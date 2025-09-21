import { kebabCase } from 'lodash';
import {
  AllRoles,
  ICreateUser,
  ISendPortalInviteRequest,
  IAuth0Organization,
  IAuth0OrganizationResponse,
  IAuth0Connections,
} from '@/helpers';
import CONFIG from '@/helpers/config';
import { getRoleId } from '@/helpers/utils';
import { useExternalApi } from '@/composables/useExternalApi';

const {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_ID_MGNT_API,
  AUTH0_CLIENT_SECRET_MGNT_API,
} = CONFIG;

export class MgntRequests {
  static getTokenForManagementApi = async () => {
    console.debug('[getTokenForManagementApi]');

    // TODO: cache the token (store in pinia)

    const body = {
      grant_type: 'client_credentials',
      client_id: AUTH0_CLIENT_ID_MGNT_API,
      client_secret: AUTH0_CLIENT_SECRET_MGNT_API,
      audience: `https://${AUTH0_DOMAIN}/api/v2/`,
    };

    const config = {
      url: `https://${AUTH0_DOMAIN}/oauth/token`,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: body,
    };

    const { data, error } = await useExternalApi({ config });
    return data?.access_token;
  };
}

export class UserRequests {
  // Must only be called by Team Admin role
  static orchestrateUserCreation = async (
    user: ICreateUser,
    auth0_org_id: string,
    access_token?: string,
  ) => {
    console.debug(`[orchestrateUserCreation]`);

    if (access_token === undefined) {
      access_token = await MgntRequests.getTokenForManagementApi();
    }

    const { email, user_role } = user;
    const client_id = AUTH0_CLIENT_ID;
    const auth0_role_id = getRoleId(user_role);
    const { data: auth0_user } = await UserRequests.createAuth0User(
      user,
      access_token,
    );
    if (!auth0_user) {
      throw new Error('Failed to create user in auth0');
    }

    await OrganizationRequests.addMembersToOrganization(
      auth0_org_id,
      auth0_user.user_id,
      access_token,
    );
    await OrganizationRequests.assignRolesToOrganizationMember(
      auth0_org_id,
      auth0_user.user_id,
      auth0_role_id,
      access_token,
    );
    await UserRequests.inviteToPortal(
      { email, auth0_org_id, client_id },
      access_token,
    );

    // Check if user exists in the Auth0 organization.
    // const [existing_auth0_user] = await this.searchUser({ email: user.email, organization_id: auth0_org_id }, access_token);

    // // If user exists in organization, first remove their existing roles and then add new roles.
    // let auth0_user;
    // if (existing_auth0_user) {
    //   const auth0_role_ids = await this.getRolesForOrganizationMember(
    //     auth0_org_id,
    //     existing_auth0_user.user_id,
    //     access_token,
    //   );

    //   if (auth0_role_ids.length > 0) {
    //     await this.removeRolesFromOrganizationMember(
    //       auth0_org_id,
    //       existing_auth0_user.user_id,
    //       auth0_role_ids,
    //       access_token,
    //     );
    //   }

    //   auth0_user = existing_auth0_user;
    // } else {
    //   const new_auth0_user = await this.createAuth0User(access_token, user);
    //   await this.addMembersToOrganization(auth0_org_id, [new_auth0_user.user_id], access_token);

    //   auth0_user = new_auth0_user;
    // }

    // await this.assignRolesToOrganizationMember(auth0_org_id, auth0_user.user_id, auth0_role_ids, access_token);
  };

  // https://auth0.com/docs/api/management/v2/users/post-users
  static createAuth0User = async (user: ICreateUser, access_token?: string) => {
    console.debug(`[createAuth0User]`);

    delete user.user_role;
    if (access_token === undefined) {
      access_token = await MgntRequests.getTokenForManagementApi();
    }

    const config = {
      url: `https://${AUTH0_DOMAIN}/api/v2/users`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      data: {
        ...user,
        email_verified: true, // IMPORTANT: for not getting the email from the management api m2m app
        connection: 'email',
      },
    };

    const { data, error } = await useExternalApi({ config });

    return {
      data,
      error,
    };
  };

  // https://auth0.com/docs/api/management/v2/organizations/post-invitations
  static inviteToPortal = async (
    body: ISendPortalInviteRequest,
    access_token?: string,
  ) => {
    const { email, client_id, auth0_org_id } = body;

    // type: Auth0OrgInvitationRequestDto
    const invitation_request = {
      inviter: {
        name: 'LAZER.io',
      },
      invitee: {
        email,
      },
      client_id,
      ttl_sec: 72 * 60 * 60, // 72 Hours
      send_invitation_email: true,
    };

    const config = {
      url: `https://${AUTH0_DOMAIN}/api/v2/organizations/${auth0_org_id}/invitations`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      data: invitation_request,
    };

    const { data, error } = await useExternalApi({ config });

    return {
      data,
      error,
    };
  };

  static getAllUserDetails = async (
    access_token: string,
    user_type: AllRoles,
  ) => {
    const url = '';
    const config = {
      url,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    };

    const { data, error } = await useExternalApi({ config });

    return {
      data,
      error,
    };
  };

  static getUsersWithSameEmail = async (
    access_token: string,
    user_id: string,
    email: string,
  ) => {
    const config = {
      url: `https://${AUTH0_DOMAIN}/auth0/users/${user_id}/email/${email}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    };

    const { data, error } = await useExternalApi({ config });

    return {
      data,
      error,
    };
  };
}

export class OrganizationRequests {
  static orchestrateTenantOnboarding = async (team_details: any) => {
    const { display_name, given_name, family_name, email, logo_url } =
      team_details;
    const access_token = await MgntRequests.getTokenForManagementApi();

    // create auth0 organization
    const unique_slug = kebabCase(display_name);
    const enabled_connections: IAuth0Connections[] = [
      {
        connection_id: 'con_RblpPrQYyowDKRsL', // gmail sso
        assign_membership_on_login: false,
      },
      {
        connection_id: 'con_2IeqWr47MmhL9HaP', // email passwordless
        assign_membership_on_login: false,
      },
    ];
    const auth0_org: IAuth0Organization = {
      name: unique_slug,
      display_name,
      enabled_connections,
      branding: {
        logo_url: logo_url
          ? logo_url
          : 'https://acmebusiness.com/wp-content/uploads/2020/07/ACME-Logo-CMYK-pdf.jpg',
        colors: {
          primary: '#dc2626',
          page_background: '#fff7ed',
        },
      },
    };
    const { data, error } = await OrganizationRequests.createAuth0Organization(
      auth0_org,
      access_token,
    );
    if (error) {
      throw new Error('Failed to create organization in auth0');
    }

    // orchestrateUserCreation with org_id value
    const user: ICreateUser = {
      given_name,
      family_name,
      email,
      user_role: AllRoles.ADMIN,
    };

    await UserRequests.orchestrateUserCreation(user, data.id);

    return true;
  };

  // https://auth0.com/docs/api/management/v2/organizations/post-organizations
  static createAuth0Organization = async (
    body: IAuth0Organization,
    access_token?: string,
  ) => {
    console.debug('[createAuth0Organization]');

    const config = {
      url: `https://${AUTH0_DOMAIN}/api/v2/organizations`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      data: body,
    };

    const { data, error } = await useExternalApi({ config });

    return {
      data: data as IAuth0OrganizationResponse,
      error,
    };
  };

  // https://auth0.com/docs/api/management/v2/organizations/post-members
  static addMembersToOrganization = async (
    auth0_org_id: string,
    auth0_member_id: string,
    access_token?: string,
  ) => {
    console.debug('[addMembersToOrganization]');

    if (access_token === undefined) {
      access_token = await MgntRequests.getTokenForManagementApi();
    }

    const body = {
      members: [auth0_member_id],
    };

    const config = {
      url: `https://${AUTH0_DOMAIN}/api/v2/organizations/${auth0_org_id}/members`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      data: body,
    };

    const { data, error } = await useExternalApi({ config });
  };

  // https://auth0.com/docs/api/management/v2/organizations/post-organization-member-roles
  static assignRolesToOrganizationMember = async (
    auth0_org_id: string,
    user_id: string,
    auth0_role_id: string,
    access_token?: string,
  ) => {
    console.debug('[assignRolesToOrganizationMember]');

    if (access_token === undefined) {
      access_token = await MgntRequests.getTokenForManagementApi();
    }

    const body = {
      roles: [auth0_role_id],
    };

    const config = {
      url: `https://${AUTH0_DOMAIN}/api/v2/organizations/${auth0_org_id}/members/${user_id}/roles`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      data: body,
    };

    const { data, error } = await useExternalApi({ config });
  };
}

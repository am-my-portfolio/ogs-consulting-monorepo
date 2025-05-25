import { useExternalApi } from "@/composables/useExternalApi";

export const loginWithFacebook = (): void => {
  window.FB.login(
    (response: any) => {
      if (response.authResponse) {
        console.log("Welcome! Fetching your information.... ");
        window.FB.api("/me", { fields: "name,email" }, (response: any) => {
          console.log(`Good to see you, ${response.name}.`);
          console.log(response);
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    },
    {
      scope: "email, public_profile, pages_manage_posts, pages_read_engagement",
      // only email, public_profile scopes can be used for testing before app is reviewed
      // but I am keeping the app in `development` mode, so I can request additional scopes here
      // but only the users added in the App Roles in the FB App console can test the app
      extras: {
        config_id: "1237220047819037",
      },
    },
  );
};

export const getFBLoginStatus = (
  my_integrations,
  fb_access_token,
  fb_user_id,
) => {
  window.FB.getLoginStatus(async (response) => {
    // console.log(response)
    // {
    //     "accessToken": "EAAasdHaZAxTMBO81TwFcz9aMdsiedG5M4tlJBPnr4h1sM9hYRw4OttV6znv8RIwas6JOyzM5ilLvrfH3KmbIM6e5ZCZAWZAxWeAbMnnhcK7a3vLcJXlRA8SXTQXpAPXbTRamNXIdEN3UarOJP4MZBcGb8ibPWp06VmBBxdqgMN3jtGUZBYFVuyHwyZC65SNc3Va60H2Ve9ZAUZAnZCXAgQwzQbub5rZCEdbuhbe75v2YL4ZD",
    //     "userID": "10231244134340576",
    //     "expiresIn": 3649,
    //     "signedRequest": "4mA-KG1I0nSjezMjTX76Mvp6ObeFiAZDgrYGFq_BF5w.eyJ1c2VyX2lkIjoiMTAyMzEyNDQxMzQzNDA1NzYiLCJjb2RlIjoiQVFBbkwxZGN6bEJ4VGdxMTJ4d0pPZkxWdG9RSUpRUTZ2X1JPM0paTGxLdGpZU0lXdWF4QXBFTXlIOUt4aTdYT0RCYzF3NU5BeFg3TzYwdTRPNE1wMGtOc3NPQk5kcFhIcnp1alZNSzZjZFBsaHdVNXl2cmZOU1BaVEdQUkZYUFpXY0VmeDl2dzFDNDRuZmprRmFvT1ZPdDVvMU1LblBFRmRTazRXTVlsNHJkak15VlotdEV3bnFnTm9rM0U1SzRoRTloWEpDVUk2MFpUMzVRTFFKWWJ5NkZuZGtySElmN19sX01nbmljUmFrSHNOSlNzcERBQ0JnVHRodWV1aENfVTFYa0wtMURNQm5jSnJ4LWZXMUN6cFU3QndMamxFS1ZlZEVIcm9LLXVUMzBGeXcyVUZvSWMxR2NZaXpBZGpFODQxMV83UDhmeXJ3WTBCOE9DSzVXQTlYZGciLCJvYXV0aF90b2tlbiI6IkVBQWFzZEhhWkF4VE1CTzgxVHdGY3o5YU1kc2llZEc1TTR0bEpCUG5yNGgxc005aFlSdzRPdHRWNnpudjhSSXdhczZKT3l6TTVpbEx2cmZIM0ttYklNNmU1WkNaQVdaQXhXZUFiTW5uaGNLN2EzdkxjSlhsUkE4U1hUUVhwQVBYYlRSYW1OWElkRU4zVWFyT0pQNE1aQmNHYjhpYlBXcDA2Vm1CQnhkcWdNTjNqdEdVWkJZRlZ1eUh3eVpDNjVTTmMzVmE2MEgyVmU5WkFVWkFuWkNYQWdRd3pRYnViNXJaQ0VkYnVoYmU3NXYyWUw0WkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTc0ODA0ODM1MX0",
    //     "graphDomain": "facebook",
    //     "data_access_expiration_time": 1754702200
    // }

    my_integrations.value[2].is_connected =
      response.status === "connected" ? true : false;
    fb_access_token.value = response?.authResponse?.accessToken;
    fb_user_id.value = response?.authResponse?.userID;
    console.log(fb_access_token.value);
  });
};

export const getAndSetPageAccessToken = async (
  fb_access_token,
  fb_page_access_token,
  fb_page_id,
  fb_user_id,
) => {
  // Option 1:
  // experimental: get Page Access Token
  // https://developers.facebook.com/docs/facebook-login/guides/access-tokens#pagetokens
  // curl -i -X GET "https://graph.facebook.com/{your-user-id}/accounts?access_token={user-access-token}"
  // TODO: create a fb.gateway.ts in the http folder and move this method there
  const config = {
    url: `https://graph.facebook.com/${fb_user_id.value}/accounts?access_token=${fb_access_token.value}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = await useExternalApi({ config });
  console.log(data, error);
  // {
  //     "access_token": "EAAasdHaZAxTMBO44Wri6MEB1X6WU4z9geaG3SWsWDxRgd4QCShbkf9XgG0cMyfiPMgOxC2EGp1nroXiKibzvE5epFTZCNUNNqrgOGDqPREiFCJXVFSMQxlhF5Q4DtaZCWBXme4YnpWzIhvD8bOZC350M2GDw6Ju7RsXchzL83rZCsD8oRoIwdLhuUVdp31hSXovmmZBYzrCd30dZBiliHyhfEOFRNO2aoniXCr0pNnn4wZDZD",
  //     "category": "Real Estate",
  //     "category_list": [
  //         {
  //             "id": "198327773511962",
  //             "name": "Real Estate"
  //         }
  //     ],
  //     "name": "My Briefcase Demo",
  //     "id": "656079247589409",
  //     "tasks": [
  //         "MODERATE",
  //         "MESSAGING",
  //         "ANALYZE",
  //         "ADVERTISE",
  //         "CREATE_CONTENT",
  //         "MANAGE"
  //     ]
  // }

  fb_page_id.value = data?.data[0]?.id;
  fb_page_access_token.value = data?.data[0]?.access_token;
  console.log(fb_page_access_token.value);

  // Option 2;
  // window.FB.api(`/${fb_page_id.value}`, { fields: 'access_token' }, (response) => {
  //   if (response && response.access_token) {
  //     fb_page_access_token.value = response.access_token;
  //   } else {
  //     console.log('Failed to get page access token');
  //   }
  // });
};

// THIS WORKS!!! both options !!!
export const publishPost = async (fb_page_access_token, fb_page_id) => {
  // https://developers.facebook.com/docs/pages-api/getting-started

  // Option 1: using my axios hook
  // const config = {
  //   url: `https://graph.facebook.com/v22.0/${fb_page_id.value}/feed`,
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   data: {
  //     "message": "your_message_text",
  //     "access_token": fb_page_access_token.value
  //   }
  // };

  // const { data, error } = await useExternalApi({ config });
  // console.log(data, error)

  // Option 2: using FB.api
  if (fb_page_access_token.value) {
    window.FB.api(
      `/${fb_page_id.value}/feed`,
      "POST",
      {
        message: "This is a test post from Vue 3!",
        link: "https://example.com",
        access_token: fb_page_access_token.value,
      },
      (response) => {
        if (response && !response.error) {
          console.log("Post published successfully!");
        } else {
          console.error("Error publishing post:", response.error);
        }
      },
    );
  }
};



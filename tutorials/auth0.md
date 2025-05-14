# Auth0 as Identity Provider
This application uses Auth0 as Identity provider. 

## ✅ **Advantages of Using Auth0 for Auth, RBAC, and Multi-Tenancy**

* **Quick Setup & Scalable**: Start with out-of-the-box login flows and scale to enterprise needs.
* **Universal Login**: Centralized login UI that supports branding, MFA, and social/email/password logins.
* **Built-in RBAC**: Define roles and permissions, enforce them via access tokens or API rules.
* **Multi-Tenancy Support**:

  * **B2C**: Social and password-based logins with custom branding per connection.
  * **B2B**: Organization-level identity support (e.g., SAML, enterprise SSO), per-tenant connections.
* **Secure by Default**: OAuth2, OIDC, MFA, brute-force protection, anomaly detection out of the box.
* **Extensibility**: Use Rules, Actions, and Hooks to customize workflows (e.g., enrich tokens, custom onboarding).
* **API Authorization**: Fine-grained access control using scopes and custom claims in JWTs.
* **Hosted & Maintained**: Focus on your product, not the auth edge-cases or security patching.

---

## 🚀 **Basic Steps to Enable Auth0 in a Vue.js App**

1. **Create a Tenant in Auth0**

   * Go to [Auth0 Dashboard](https://manage.auth0.com/).
   * Create a new tenant for your project.

2. **Set Up a New Application**

   * Navigate to **Applications → Applications**.
   * Create a new **Single Page Application (SPA)**.
   * Note the **Client ID**, **Domain**, and **Callback URL**.

3. **Enable and Configure Connections**

   * Go to **Authentication → Database** to set up Email/Password login.
   * Enable **Social Connections** (Google, GitHub, etc.) if needed.
   * For B2B, configure **Enterprise Connections** (like SAML, OIDC, AD).

4. **Customize Universal Login (Optional but Recommended)**

   * Navigate to **Branding → Universal Login**.
   * Use New Universal Login for consistent, secure login flows.
   * Customize themes, logo, background, and language.

5. **Configure APIs for Backend Authorization**

   * Go to **Applications → APIs**, create a new API (resource server).
   * Define scopes and enable RBAC + add permissions if needed.
   * Use this API identifier in your access token requests.

6. **Integrate Auth0 SDK in Vue.js**

   * Install the SDK:

     ```bash
     npm install @auth0/auth0-spa-js
     ```
   * Set up `Auth0Provider` in your Vue app (in `main.js` or as a plugin).
   * Example:

     ```js
     import { createAuth0 } from '@auth0/auth0-vue';

     app.use(
       createAuth0({
         domain: 'YOUR_DOMAIN',
         clientId: 'YOUR_CLIENT_ID',
         authorizationParams: {
           redirect_uri: window.location.origin,
           audience: 'YOUR_API_IDENTIFIER', // Optional
           scope: 'openid profile email',
         },
       })
     );
     ```
   * Use composables like `useAuth0()` in your components to access login/logout/user.


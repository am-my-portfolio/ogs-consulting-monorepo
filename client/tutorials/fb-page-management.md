- got to use Facebook Login for Business
- https://developers.facebook.com/docs/pages-api/overview
- got to use the Business App type

- https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types/

- user connect their facebook via my integrations page
- that gives me a User Token
- my code then use the User Token to request a Page token

- https://developers.facebook.com/docs/facebook-login/guides/access-tokens

- once i have the page id and page access token, then use the FB pages api
- https://developers.facebook.com/docs/pages-api/getting-started
- long lived page access token :
- https://developers.facebook.com/docs/facebook-login/guides/access-tokens/get-long-lived
- its a bit confusing that long lived token doesnt expire, but it still has a `Data Access Expires` which is `in about 3 months`
- actually, as long as requests are made regularly with that token, it stays active
- If no requests are made, the token will expire after about 60 days and the person will have to go through the login flow again to get a new token.

- https://developers.facebook.com/docs/pages-api/posts

- once the long term page access token is acquired, then create a credential in n8n
- that credential is used in the n8n workflow

Draft:

- Manual stuff

  - steps which are a must

    - go to https://developers.facebook.com/
    - create an App (https://docs.n8n.io/integrations/builtin/credentials/facebookapp/)

  - got to Graph API Explorer tool (https://developers.facebook.com/tools/explorer/)
  - authenticate to a specific Page

  ![facebook-1](public/tutorial/facebook-1.png)

  - select the app we just created above, in the 'Meta App' dropdown
  - select that page from the 'User or Page' dropdown
  - add some permissions

  ![facebook-2](public/tutorial/facebook-2.png)

  - copy the token
  - in n8n, create a credential `Facebook for Business Page` and save the token in it


  https://docs.n8n.io/integrations/builtin/credentials/facebookapp/#configure-the-facebook-trigger

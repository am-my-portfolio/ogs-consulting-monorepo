import { useExternalApi } from "@/composables/useExternalApi";


// https://docs.n8n.io/api/api-reference/?_gl=1*a1lffb*_gcl_aw*R0NMLjE3NDU4MTEzMTguQ2p3S0NBandxN2ZBQmhCMkVpd0F3ay1ZYkFVbTI5aDFQZktuZWY2czF0R0IyNzhGazVYV3IxYWJrZUlyZU5YNThVaFVfajFrMkV4WEd4b0NHZ2dRQXZEX0J3RQ..*_gcl_au*MjM3MzExNTAxLjE3NDU4MTAyOTg.*_ga*MTg3Nzk1NDk2Ni4xNzQ1ODEzNTIy*_ga_0SC4FF2FH9*czE3NDgxMzk4MjMkbzE3JGcxJHQxNzQ4MTQyNTIxJGoyNSRsMCRoMCRkNF9BN1hfM1ZLeDQ4ZzZZS0JQbjFoQWVrd2lMRWF0ZGVGUQ..#tag/Credential/paths/~1credentials/post
// https://github.com/n8n-io/n8n/blob/4e9f2b3b9a43630fcd87c0d99fa8c361e739350d/packages/nodes-base/credentials/FacebookGraphApi.credentials.ts
export const createFacebookCredentials = async (
    customer,
    fb_page_access_token,
) => {
    const config = {
        url: `http://localhost/api/v1/credentials`,
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-N8N-API-KEY": import.meta.env.VITE_N8N_API_KEY,
        },
        data: {
            "name": `[FB Page Account] Customer: ${customer}`,
            "type": "facebookGraphApi",
            "data": {
                "accessToken": fb_page_access_token.value
            }
        }
    };

    console.log(config)
    const { data, error } = await useExternalApi({ config });
    console.log(data, error);
};



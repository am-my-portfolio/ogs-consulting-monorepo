# Links
- N8N + Slack Node/Trigger/Credentials: https://docs.n8n.io/integrations/builtin/credentials/slack/#supported-authentication-methods
- Create App using Slack API: http://api.slack.com/reference/manifests

# Steps

## Manual
In Slack
- Create Workspace (optional)
- Create an App
- Give Scope
- Install App in Workspace
- Get the OAuth Token


In n8n
- Create Slack Credential
- Add Slack Trigger Node


Back In Slack 
- Configure Webhook in Slack
  - Docs
    - https://docs.n8n.io/integrations/builtin/credentials/slack/#slack-trigger-configuration
    - https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.slacktrigger/#configure-a-webhook-in-slack
  - On the url https://api.slack.com/apps/A0929JRV4TV/
    - Go to `Features` ==> `Event Subscriptions` ==> Turn on the `Enable Events` 


In Local Terminal
- create ngrok account and login
  - get the auth config command and run it locally, to authenticate
- Install ngrok cli
  - https://ngrok.com/docs/getting-started/
- run ngrok to create a tunnel (point public traffic to the localhost)
  - `ngrok http 5678` (where 5678 is the port n8n is running on)


In n8n + ngrok
- activate the workflow
  - But I have to resolve all issues in that huge workflow first !!
  - Tested in a smaller workflow ==> activated ==> copied the production url => used NGROK base url ==> slack verified successfully! 
    - Demo workflow's Slack Trigger url: https://a17d-73-153-237-71.ngrok-free.app/webhook/4b24e87c-d1e1-4db2-b47b-a84e49b26b07/webhook


- copy the Webhook URL, replace the `http://localhost:5678` part by the ngrok IP address
  - Original URL from n8n
    - Test URL: http://localhost:5678/webhook-test/6ff98c27-cc3f-4172-aac8-eb51f47ccd67/webhook
    - Production URL: http://localhost:5678/webhook/6ff98c27-cc3f-4172-aac8-eb51f47ccd67/webhook
  - Mixed up with the Ngrok Url:
    - https://a17d-73-153-237-71.ngrok-free.app/webhook-test/6ff98c27-cc3f-4172-aac8-eb51f47ccd67/webhook



In Slack Dev area (api.slack.com/app)
- paste the URL in the `Request URL`
- Make sure to add `message:channels` event in the `Subscribe to events on behalf of users`

In Slack Messenger App
- send a message to a public channel


SUCCESS!!!



## Programmatically
- is this the url? https://docs.n8n.io/integrations/builtin/credentials/slack/#using-oauth2


## Production
- might want to host it in the cloud (onRender, GCP Cloud Run)







https://a17d-73-153-237-71.ngrok-free.app/webhook-test/slack


curl -X POST https://a17d-73-153-237-71.ngrok-free.app/webhook-test/slack \
    -H 'Content-Type: application/json' \
    -d \
    '{ 
        "token": "Jhj5dZrVaK7ZwHHjRyZWjbDl", 
        "challenge": "3eZbrw1aBm2rZgRNFdxV2595E9CY3gmdALWMmHkvFXO7tYXAYM8P", 
        "type": "url_verification" 
    }'


curl -X POST https://a17d-73-153-237-71.ngrok-free.app/webhook/slack \
    -H 'Content-Type: application/json' \
    -d \
    '{
        "token": "Jhj5dZrVaK7ZwHHjRyZWjbDl", 
        "challenge": "3eZbrw1aBm2rZgRNFdxV2595E9CY3gmdALWMmHkvFXO7tYXAYM8P", 
        "type": "url_verification" 
    }'

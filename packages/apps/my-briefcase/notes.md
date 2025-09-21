# run n8n local kit

- https://github.com/n8n-io/self-hosted-ai-starter-kit
- tutorial: https://www.youtube.com/watch?v=niEFfY6BCqs

# running n8n for my clients (multi-tenancy)

- not easy, needs some license
- https://community.n8n.io/t/programatically-passing-credentials-into-a-workflow/7551/2

# setup google project and stuff

- create project, enable APIs (Gmail)
- Setup OAuth consent
- Setup an App
- Add Test users
- https://console.cloud.google.com
- https://www.youtube.com/watch?v=iAokhB-bVBw

# setup facebook stuff

- see `tutorials/fb-page-management.md`

### read these and then delete

- https://medium.com/zero-to/empowering-ai-agents-automating-facebook-page-management-with-the-facebook-mcp-server-6a5c97f8ccb8
- https://www.agentx.so/post/setup-multi-agent-for-social-media-post-using-ai-agentic-workflows

# build a workflow/automation

- automation 1: just a PoC

  - read last 5 unread emails
  - create a summary and TODO list from them
  - post to Slack (personal) (maybe later, create a jira ticket or something)
    - lets say, create slack reminders
  - get the todos done as needed
  - post slack update for each
  - mark them done

- automation 2:
  - Everyday at 6 PM
    - read emails
    - draft answers for them
    - present the drafts to me and ask for approval for individual replies
    - send the replies for the approved ones
    - re-draft the rejected ones and repeat till all is done

# use n8n agentic automation/worflows from the frontend

- vue or react app
- use the locally running n8n as the backend (http api requests)
- later, figure out how to host the n8n in the cloud or build my own using LangGraph etc

# Relevant n8n tutorials or questions

- https://community.n8n.io/t/renewing-facebook-graph-api-token-automatically/12867/2

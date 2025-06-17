# Use n8n cli
- while running n8n via the docker container: `docker ps`

    - find the id or name for the n8n container from the list
    - Run any command:
      - Template: docker exec -u node -it <n8n-container-name> <n8n-cli-command>
      - Example: `docker exec -u node -it n8n n8n export:workflow --all`


- Links:
  - https://docs.n8n.io/hosting/cli-commands/

- Export all Workflows to individual files
  - `docker exec -u node -it eca830952b03 n8n export:workflow --all --separate --output /demo-data/workflows`
  - `docker exec -it n8n /bin/sh -c "sudo n8n export:workflow --all --separate --output /demo-data/workflows"`

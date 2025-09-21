# Use n8n cli
- while running n8n via the docker container: `docker ps`

    - find the id or name for the n8n container from the list
    - Run any command:
      - Template: docker exec -u node -it <n8n-container-name> <n8n-cli-command>
      - Example: `docker exec -u node -it n8n n8n export:workflow --all`


- Links:
  - https://docs.n8n.io/hosting/cli-commands/

## Export all Workflows to individual files
In the `n8n` folder, execute:
  - `docker exec -u node -it n8n n8n export:workflow --all --separate --output /demo-data/workflows`
  - `docker exec -it n8n /bin/sh -c "sudo n8n export:workflow --all --separate --output /demo-data/workflows"`

## Export all crednetials
`docker exec -u node -it n8n n8n export:credentials --all --output=your_output_file.json`


## Update 
- https://docs.n8n.io/hosting/installation/docker/#updating

### Option 1
Using Docker Desktop
- To update n8n, in Docker Desktop, navigate to the Images tab and select Pull from the context menu to download the latest n8n image

### Option 2
Using Docker Compose
If you run n8n using a Docker Compose file, follow these steps to update n8n:

```
# Navigate to the directory containing your docker compose file
cd </path/to/your/compose/file/directory>

# Pull latest version
docker compose pull

# Stop and remove older version
docker compose down

# Start the container
docker compose up -d
```



## Self-Hosting

### Locally
- https://docs.n8n.io/hosting/installation/server-setups/docker-compose/


#### Tunnel
- n8n tunnel
- ngrok tunnel


### In the cloud
- on Rende
  - https://render.com/docs/deploy-n8n
- Cloudflare
  - https://community.n8n.io/t/how-i-secured-my-n8n-instance-with-cloudflare-zero-trust-no-open-ports-no-public-ip-further-edits-to-come/119834
  - https://community.n8n.io/t/using-llama-3-in-n8n-with-cloudflare-workers-ai/46351
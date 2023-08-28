-- DEVELOPER MODE --
please run this:
1. docker compose --env-file .\server\.env  -f .\docker-compose.yaml build
2. docker compose --env-file .\server\.env  -f .\docker-compose.yaml up -d

client: http://localhost:3000

-- PRODUCTION MODE --
coming soon...

-- DEPLOYMENT COMMAND --
git checkout production && git pull origin master && git push origin production && git checkout master
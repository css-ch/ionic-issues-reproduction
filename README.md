# ionic-issue-reproduction
This Repository is intended to address the issues with ionic plugins that we patched in most cases

By default postinstall will apply all our patches!

## Setup Repository

`npm install`

## Generate Certificate
The one available in the repo is for localhost
But if you need one for your specific IP (for connecting from mobile) you need a specific one

1. Execute command `openssl req -nodes -new -x509 -keyout server.key -out server.cert`
2. Answer all questions (https://flaviocopes.com/express-https-self-signed-certificate/)
3. Remember to fill you IP for the question `Common Name (e.g. server FQDN or YOUR name)`
4. Add both (server.key and server.cert) to `backend/certs`
4. Add the server.cert `frontend/certs` and rename it `server.cer`

## Run the Server

`npm start`, for debugging `npm run debug`

## Run the Client

`npm start`, or `ionic serve`

`npm run sync` if you like to sync for a native build (go to your native IDE to build)

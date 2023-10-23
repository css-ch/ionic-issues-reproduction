# ionic-issue-reproduction
This Repository is intended to address the issues with ionic plugins that we patched in most cases.

By default `postinstall` will `apply all our patches!`

## Setup Repository

`npm install`

## Generate Certificate
The one available in the repo is for localhost + my local mac IP @ home as alternative.
So if you want to run the app on a phone, you have to provide YOUR server's IP address (ifconfig).

1. Execute command (change IP) `openssl req -nodes -new -x509 -addext "subjectAltName = IP:192.168.1.7" -keyout server.key -out server.cert`.
2. Answer all questions (https://flaviocopes.com/express-https-self-signed-certificate/).
4. Add both (server.key and server.cert) to `backend/certs`.
4. Add the server.cert to `frontend/certs`.
5. Navigate into that folder and execute command `openssl x509 -outform der -in server.cert -out server.cer`.

## Run the Server

`npm start`, for debugging `npm run debug`

## Run the Client

`npm start`, or `ionic serve`

`npm run sync` if you like to sync for a native build (go to your native IDE to build).

## Results

The Client will output the result of the request (or time if that matters) in the UI.

The Server will output the data received in the CONSOLE.
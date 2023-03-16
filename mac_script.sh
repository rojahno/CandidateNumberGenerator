
#!/bin/sh
# Navigates to the frontend directory and downloads the dependencies
cd Frontend
yarn

# Starts the website on localhost:3000
yarn start

# Navigates to the backend directory and downloads the dependencies
cd ../Backend
npm install

# Starts the backend server on localhost:8080
node server.js

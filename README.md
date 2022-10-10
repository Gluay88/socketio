Socket.io in React app
node js and express

1. Create a project folder => Socket-React etc..
2. Create 2 folders => client and server
3. cd client => npx create-react-app .
4. open another terminal cd server => npm init -y
5. create index.js in server folder
6. install packages => npm i express cors nodemon socket.io
   => express to create a server
   => cors to connect both front / back
7. index.js

```
server.listen(3001, () => {
  console.log("Server is running...");
});
```

after listen ..

8. node index.js => run the server
9. package.json (server) =>

```
"scripts": {
    "start": "nodemon index.js"
  },
```

We changed the nodemon index.js so we can run npm start
We don't have to ctrl c and start the project everytime when something changes

\*\*\* Frontend
\*\*\* socket.io name the event => you can listen to the event and emit the event (sending the data to the ones who listens to that event)

1. npm start on the client terminal
2. delete the files you don't want in src
3. index.js remove index.css etc.
4. install socket.io to the frontend
5. cd client => npm i socket.io-client

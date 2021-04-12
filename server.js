const express = require('express');
const path = require('path');
const { Server } = require('ws');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/electric-nodes-v2'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/electric-nodes-v2/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


const wss = new Server({ app });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);
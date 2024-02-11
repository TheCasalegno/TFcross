const express = require("express");
const app = express();
const path = require("path");

const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8880 });


//express static files settings
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "assets")));

app.set("view engine", "ejs");


//WebSocket server forward messages to all clients
server.on("connection", (ws) => {
  console.log("WS: Main server connected to a CLIENT");

  ws.on("message", (message) => {

    server.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(`${message}`);
        }
    });
  });
});


//main page with useful links
app.get("/", (req, res) => {
  res.render("index");
});


//sender
const dashboard = require("./routes/dashboard");
const chrono = require("./routes/chrono");
const results = require("./routes/results");
const startlist = require("./routes/startlist");

app.use("/dashboard", dashboard);
app.use("/chrono", chrono);
app.use("/results", results);
app.use("/startlist", startlist);

//listen on port 2087
app.listen(2087);

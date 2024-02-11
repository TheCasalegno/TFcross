# TFcross
TF cross is a complete and lightweight web-based NodeJS tool to display "[iRunning Cronometraggi](https://irunning.it)" datas as live chronometer, startlist and results for Sport TV Productions.

## How to install
Here is a brief guide to install and host the WebAPP.
1. Clone this repository on your server;
2. In the terminal enter in the cloned repo and hit `npm i` _(You have to have installed [nodejs](https://nodejs.org))_;
3. Create or edit the .env file and insert this datas:
```env
WS="[insert here the WebSocket Server URL*]"
URL="[insert here the iRunning competition URL**]"
```
*If you use this WebAPP on a local network (your PC is the server and the client) put `ws://localhost:8880/`
**Eg. `https://www.irunning.it/gara.php?id=41951`;
4. Start the server with `node .`;
5. Open the test page on `https://(your-ip):2087/` and check if in works.

## Use the graphics
Now that you have installed the server, here you have an example of how you can use the datas in your Live TV Production.
1. Open OBS and add a "Browser" source;
2. Design a graphics that fits the datas;
3. Add the animations on the Browser source;
4. Add a Green Screen as bottom layer;
5. Connect via HDMI the PC to your video mixer (Eg. ATEM Mini);
5. Use the "Projector" function to display the graphics on full screen on the mixer.
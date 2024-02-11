const express = require("express");
const router = express.Router();
require("dotenv").config();
const fetch = require("node-fetch");

const url = process.env.URL;
const settings = { method: "Get" };

const WebSocket = require("ws");
const client = new WebSocket(process.env.WS);

router.get("/", (req, res) => {
  res.render("startlist", {});
});

client.on("message", (message) => {

  let jsonData = JSON.parse(message);

  if (jsonData.command == "startlist") {
      fetch(url, settings)
        .then((res) => res.json())
        .then((json) => {
          let batteria = json.batterie[jsonData.code - 1];
  
          let schermate = json.batterie[jsonData.code - 1].risultati.length;
          let forTime = Math.floor(schermate / 9) + 1;
          let a = 0;
  
          let nomeBatteria = batteria.nome
  
          for (let i = 0; i < forTime; i++) {
  
            setTimeout(() => {
  
              if (batteria.risultati[a] != undefined) {
                uno = batteria.risultati[a][0].atleta;
                unoClub = batteria.risultati[a][0].soc;
              } else {uno = ""; unoClub = ""}
              if (batteria.risultati[a + 1] != undefined) {
                due = batteria.risultati[a + 1][0].atleta;
                dueClub = batteria.risultati[a + 1][0].soc;
              }else {due = ""; dueClub = ""}
              if (batteria.risultati[a + 2] != undefined) {
                tre = batteria.risultati[a + 2][0].atleta;
                treClub = batteria.risultati[a + 2][0].soc;
              }else {tre = ""; treClub = ""}
              if (batteria.risultati[a + 3] != undefined) {
                qua = batteria.risultati[a + 3][0].atleta;
                quaClub = batteria.risultati[a + 3][0].soc;
              }else {qua = ""; quaClub = ""}
              if (batteria.risultati[a + 4] != undefined) {
                cin = batteria.risultati[a + 4][0].atleta;
                cinClub = batteria.risultati[a + 4][0].soc;
              }else {cin = ""; cinClub = ""}
              if (batteria.risultati[a + 5] != undefined) {
                sei = batteria.risultati[a + 5][0].atleta;
                seiClub = batteria.risultati[a + 5][0].soc;
              }else {sei = ""; seiClub = ""}
              if (batteria.risultati[a + 6] != undefined) {
                set = batteria.risultati[a + 6][0].atleta;
                setClub = batteria.risultati[a + 6][0].soc;
              }else {set = ""; setClub = ""}
              if (batteria.risultati[a + 7] != undefined) {
                ott = batteria.risultati[a + 7][0].atleta;
                ottClub = batteria.risultati[a + 7][0].soc;
              }else {ott = ""; ottClub = ""}
              if (batteria.risultati[a + 8] != undefined) {
                nov = batteria.risultati[a + 8][0].atleta;
                novClub = batteria.risultati[a + 8][0].soc;
              }else {nov = ""; novClub = ""}
  
              a = 9 * (i + 1);
  
              let jsonDATA = {
                  message: "startlist",
                  gara: "Startlist " + nomeBatteria,
                  uno: uno,
                  unoClub: unoClub,
                  due: due,
                  dueClub: dueClub,
                  tre: tre,
                  treClub: treClub,
                  qua: qua,
                  quaClub: quaClub,
                  cin: cin,
                  cinClub: cinClub,
                  sei: sei,
                  seiClub: seiClub,
                  set: set,
                  setClub: setClub,
                  ott: ott,
                  ottClub: ottClub,
                  nov: nov,
                  novClub: novClub
                };
      
              let jsonSEND = JSON.stringify(jsonDATA);
              client.send(jsonSEND)
  
            }, i * 10000);
          }
        });
    }
});

module.exports = router;

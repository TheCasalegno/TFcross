const express = require("express");
const router = express.Router();
require("dotenv").config();
const fetch = require("node-fetch");

const url = process.env.URL;
const settings = { method: "Get" };

const WebSocket = require("ws");
const client = new WebSocket(process.env.WS);

router.get("/", (req, res) => {
  res.render("results", {});
});

client.on("message", (message) => {
  let jsonIn = JSON.parse(message);

  if (jsonIn.command == "results") {
    fetch(url, settings)
      .then((res) => res.json())
      .then((json) => {
        let batteria = json.batterie[jsonIn.code - 1];

        let schermate = json.batterie[jsonIn.code - 1].risultati.length;
        let forTime = Math.floor(schermate / 9) + 1;
        let a = 0;

        let nomeBatteria = batteria.nome;

        for (let i = 0; i < forTime; i++) {
          setTimeout(() => {
            if (batteria.risultati[a] != undefined) {
              uno = batteria.risultati[a][0].atleta;
              unoClub = batteria.risultati[a][0].soc;
              unoRes = batteria.risultati[a][0].ris;
              unoPos = batteria.risultati[a][0].piazzamento;
              if (unoPos == 0) {
                unoPos = "NF";
              }
            } else {
              uno = "";
              (unoClub = ""), (unoRes = ""), (unoPos = "");
            }
            if (batteria.risultati[a + 1] != undefined) {
              due = batteria.risultati[a + 1][0].atleta;
              dueClub = batteria.risultati[a + 1][0].soc;
              dueRes = batteria.risultati[a + 1][0].ris;
              duePos = batteria.risultati[a + 1][0].piazzamento;
              if (duePos == 0) {
                duePos = "NF";
              }
            } else {
              due = "";
              (dueClub = ""), (dueRes = ""), (duePos = "");
            }
            if (batteria.risultati[a + 2] != undefined) {
              tre = batteria.risultati[a + 2][0].atleta;
              treClub = batteria.risultati[a + 2][0].soc;
              treRes = batteria.risultati[a + 2][0].ris;
              trePos = batteria.risultati[a + 2][0].piazzamento;
              if (trePos == 0) {
                trePos = "NF";
              }
            } else {
              tre = "";
              (treClub = ""), (treRes = ""), (trePos = "");
            }
            if (batteria.risultati[a + 3] != undefined) {
              qua = batteria.risultati[a + 3][0].atleta;
              quaClub = batteria.risultati[a + 3][0].soc;
              quaRes = batteria.risultati[a + 3][0].ris;
              quaPos = batteria.risultati[a + 3][0].piazzamento;
              if (quaPos == 0) {
                quaPos = "NF";
              }
            } else {
              qua = "";
              (quaClub = ""), (quaRes = ""), (quaPos = "");
            }
            if (batteria.risultati[a + 4] != undefined) {
              cin = batteria.risultati[a + 4][0].atleta;
              cinClub = batteria.risultati[a + 4][0].soc;
              cinRes = batteria.risultati[a + 4][0].ris;
              cinPos = batteria.risultati[a + 4][0].piazzamento;
              if (cinPos == 0) {
                cinPos = "NF";
              }
            } else {
              cin = "";
              (cinClub = ""), (cinRes = ""), (cinPos = "");
            }
            if (batteria.risultati[a + 5] != undefined) {
              sei = batteria.risultati[a + 5][0].atleta;
              seiClub = batteria.risultati[a + 5][0].soc;
              seiRes = batteria.risultati[a + 5][0].ris;
              seiPos = batteria.risultati[a + 5][0].piazzamento;
              if (seiPos == 0) {
                seiPos = "NF";
              }
            } else {
              sei = "";
              (seiClub = ""), (seiRes = ""), (seiPos = "");
            }
            if (batteria.risultati[a + 6] != undefined) {
              set = batteria.risultati[a + 6][0].atleta;
              setClub = batteria.risultati[a + 6][0].soc;
              setRes = batteria.risultati[a + 6][0].ris;
              setPos = batteria.risultati[a + 6][0].piazzamento;
              if (setPos == 0) {
                setPos = "NF";
              }
            } else {
              set = "";
              (setClub = ""), (setRes = ""), (setPos = "");
            }
            if (batteria.risultati[a + 7] != undefined) {
              ott = batteria.risultati[a + 7][0].atleta;
              ottClub = batteria.risultati[a + 7][0].soc;
              ottRes = batteria.risultati[a + 7][0].ris;
              ottPos = batteria.risultati[a + 7][0].piazzamento;
              if (ottPos == 0) {
                ottPos = "NF";
              }
            } else {
              ott = "";
              (ottClub = ""), (ottRes = ""), (ottPos = "");
            }
            if (batteria.risultati[a + 8] != undefined) {
              nov = batteria.risultati[a + 8][0].atleta;
              novClub = batteria.risultati[a + 8][0].soc;
              novRes = batteria.risultati[a + 8][0].ris;
              novPos = batteria.risultati[a + 8][0].piazzamento;
              if (novPos == 0) {
                novPos = "NF";
              }
            } else {
              nov = "";
              (novClub = ""), (novRes = ""), (novPos = "");
            }

            a = 9 * (i + 1);

            let jsonDATA = {
              message: "results",
              gara: "Results " + nomeBatteria,
              uno: uno,
              unoClub: unoClub,
              unoRes: unoRes,
              unoPos: unoPos,
              due: due,
              dueClub: dueClub,
              dueRes: dueRes,
              duePos: duePos,
              tre: tre,
              treClub: treClub,
              treRes: treRes,
              trePos: trePos,
              qua: qua,
              quaClub: quaClub,
              quaRes: quaRes,
              quaPos: quaPos,
              cin: cin,
              cinClub: cinClub,
              cinRes: cinRes,
              cinPos: cinPos,
              sei: sei,
              seiClub: seiClub,
              seiRes: seiRes,
              seiPos: seiPos,
              set: set,
              setClub: setClub,
              setRes: setRes,
              setPos: setPos,
              ott: ott,
              ottClub: ottClub,
              ottRes: ottRes,
              ottPos: ottPos,
              nov: nov,
              novClub: novClub,
              novRes: novRes,
              novPos: novPos,
            };

            let jsonSEND = JSON.stringify(jsonDATA);
            client.send(jsonSEND);
          }, i * 10000);
        }
      });
  }
});

module.exports = router;

var express = require("express");
const PORT = 3000;

const app = express();

app.get("/", (req, res) => res.json({status: "Ntask API"}));

app.get("/task", (req, res) => {
	{title: "Fazer compras"},
	{title: "Torcar óleo da moto"};
});

app.listen(PORT, () => console.log('Ntask API'));
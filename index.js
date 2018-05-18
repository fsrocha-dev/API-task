var express = require("express");
const PORT = 3000;

const app = express();

app.set("json spaces", 4);

app.get("/", (req, res) => res.json({status: "Ntask API"}));

app.get("/tasks", (req, res) => {

	res.json({
		tasks: [
		{title: "Fazer mercado"},
		{title: "Trocar oleo do carro"}
		]
	});

});

app.listen(PORT, () => console.log('Ntask API'));
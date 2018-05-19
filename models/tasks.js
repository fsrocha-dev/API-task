module.exports = app =>{
	return {
		findAll: (params, callback) => {
			return callback([
				{title: "Comprar celular"},
				{title: "Fazer mercado"},
			]);
		}
	};
};
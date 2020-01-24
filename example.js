const parse = require('./index.js');

parse("https://steamcommunity.com/tradeoffer/new/?partner=33230825&token=XXXXXXXX")
.then(parsed => {
	console.log(parsed);
	/*
	{
		url: 'https://steamcommunity.com/tradeoffer/new?partner=33230825&token=XXXXXXXX',
		partner: '33230825',
		token: 'XXXXXXXXX'
	}
	*/
})
.catch(err => {
	console.log(err);
});
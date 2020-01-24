# node-steam-tradeoffer-url-parser
Parses a steam tradeoffer url and gives a URL, token and partner params

[![npm version](https://img.shields.io/npm/v/steam-tradeoffer-url-parser.svg)](https://npmjs.com/package/steam-tradeoffer-url-parser)

```
npm install steam-tradeoffer-url-parser
```

```
const parse = require('steam-tradeoffer-url-parser');

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
```
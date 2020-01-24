const { parse, format } = require('url');

function getFormat(partner, token) {
	return {
		"url": format({"host": "steamcommunity.com", "protocol": "https:", "pathname": "tradeoffer/new", "query": {"partner": partner, "token": token}}),
		"partner": partner,
		"token": token
	};
}

function parser(input) {
	return new Promise((resolve, reject) => {
		// We only care about the querystring from the URL...
		const query = parse(input, true).query;

		if (!query.partner)
			return reject(new Error("Missing partner"));
		if (!query.token)
			return reject(new Error("Missing token"));
		if (isNaN(query.partner))
			return reject(new Error("Partner is not valid"))
		if (!query.token.match(/^[a-zA-Z0-9_-]*$/i)) // Make this match a length?
			return reject(new Error("Token is not valid"));
		
		resolve(getFormat(query.partner, query.token));
	});
}

module.exports = parser;
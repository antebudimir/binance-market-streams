const binanceStreams = [
	'ethusdt@trade',
	'btcusdt@trade',
	'adausdt@trade',
	'maticusdt@trade',
	'manausdt@trade',
	'sandusdt@trade',
	'vetusdt@trade',
];
const binanceSocket = new WebSocket(
	// Format for only one stream:
	// 'wss://stream.binance.com:9443/ws/ethbusd@trade',
	`wss://stream.binance.com:9443/stream?streams=${binanceStreams.join('/')}`,
);

binanceSocket.addEventListener('message', (event) => {
	// convert to JS object
	const responseValues = JSON.parse(event.data);
	// console.log(responseValues);

	// convert responseValues to an array
	const data = Object.values(responseValues.data);
	// console.log(data);
	// price values are located at data[4]

	//
	const currencies = [
		'ETHUSDT',
		'BTCUSDT',
		'ADAUSDT',
		'MATICUSDT',
		'MANAUSDT',
		'SANDUSDT',
		'VETUSDT',
	];

	// Output paths
	const ethPrice = document.querySelector('#ethPrice'),
		btcPrice = document.querySelector('#btcPrice'),
		adaPrice = document.querySelector('#adaPrice'),
		maticPrice = document.querySelector('#maticPrice'),
		manaPrice = document.querySelector('#manaPrice'),
		sandPrice = document.querySelector('#sandPrice'),
		vetPrice = document.querySelector('#vetPrice');

	const prices = [
		ethPrice,
		btcPrice,
		adaPrice,
		maticPrice,
		manaPrice,
		sandPrice,
		vetPrice,
	];

	// Process all currencies
	let index = -1;

	currencies.forEach((currency) => {
		index++;

		if (data[2] === currency) {
			const currencyValue = `${currency} ${parseFloat(data[4]).toFixed(4)}`;
			prices[index].textContent = currencyValue;
		}
	});
});

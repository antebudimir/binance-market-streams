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

	// Output paths
	const ethPrice = document.querySelector('#ethPrice'),
		btcPrice = document.querySelector('#btcPrice'),
		adaPrice = document.querySelector('#adaPrice'),
		maticPrice = document.querySelector('#maticPrice'),
		manaPrice = document.querySelector('#manaPrice'),
		sandPrice = document.querySelector('#sandPrice'),
		vetPrice = document.querySelector('#vetPrice');

	// ETH
	if (data[2] === 'ETHUSDT') {
		const ETHUSDT = `ETH/USDT ${parseFloat(data[4]).toFixed(2)}`;
		ethPrice.textContent = ETHUSDT;
	}

	// BTC
	if (data[2] === 'BTCUSDT') {
		const BTCUSDT = `BTC/USDT ${parseFloat(data[4]).toFixed(2)}`;
		btcPrice.textContent = BTCUSDT;
	}

	// ADA
	if (data[2] === 'ADAUSDT') {
		const ADAUSDT = `ADA/USDT ${parseFloat(data[4]).toFixed(4)}`;
		adaPrice.textContent = ADAUSDT;
	}

	// MATIC
	if (data[2] === 'MATICUSDT') {
		const MATICUSDT = `MATIC/USDT ${parseFloat(data[4]).toFixed(4)}`;
		maticPrice.textContent = MATICUSDT;
	}

	// MANA
	if (data[2] === 'MANAUSDT') {
		const MANAUSDT = `MANA/USDT ${parseFloat(data[4]).toFixed(4)}`;
		manaPrice.textContent = MANAUSDT;
	}

	// SAND
	if (data[2] === 'SANDUSDT') {
		const SANDUSDT = `SAND/USDT ${parseFloat(data[4]).toFixed(4)}`;
		sandPrice.textContent = SANDUSDT;
	}

	// VET
	if (data[2] === 'VETUSDT') {
		const VETUSDT = `VET/USDT ${parseFloat(data[4]).toFixed(4)}`;
		vetPrice.textContent = VETUSDT;
	}
});

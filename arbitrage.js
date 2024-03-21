async function fetchPrice(url, exchange) { // Fetch the prices from the API URLS
    try {
        const response = await fetch(url);
        const data = await response.json();

        switch (exchange) {
            case 'binance':
                return parseFloat(data.price);
            case 'kraken':
                const pair = Object.keys(data.result)[0];
                return parseFloat(data.result[pair].c[0]);
            case 'bitstamp':
                return parseFloat(data.last);
            case 'coinbase':
                return parseFloat(data.data.amount);
            case 'bybit':
                return parseFloat(data.result[0].last_price);
            default:
                console.log(`Exchange ${exchange} not supported.`);
        }
    } catch (error) {
        console.error('Error fetching price from', exchange, error);
    }
}

async function updatePricesofbtc() { // BTC/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=XBTUSDT', 'kraken') },
        { name: 'Bitstamp', price: await fetchPrice('https://www.bitstamp.net/api/v2/ticker/btcusdt/', 'bitstamp') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/BTC-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=BTCUSDT', 'bybit') }
    ];

    prices.forEach(({ name, price }) => {
        document.getElementById(`btc${name}Price`).textContent = `${name}: $${price.toFixed(0)}`;
        flashBackground(`btc${name}Price`, price, name.toLowerCase(), 'BTC');
    });

    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    updateArbitrage('btcArbitrage', lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage('btcSecondArbitrage', lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

async function updatePricesofeth() { // ETH/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=ETHUSDT', 'kraken') },
        { name: 'Bitstamp', price: await fetchPrice('https://www.bitstamp.net/api/v2/ticker/ethusdt/', 'bitstamp') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/ETH-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=ETHUSDT', 'bybit') }
    ];

    prices.forEach(({ name, price }) => {
        document.getElementById(`eth${name}Price`).textContent = `${name}: $${price.toFixed(0)}`;
        flashBackground(`eth${name}Price`, price, name.toLowerCase(), 'ETH');
    });

    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    updateArbitrage('ethArbitrage', lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage('ethSecondArbitrage', lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

async function updatePricesofSol() { // SOL/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=SOLUSDT', 'kraken') },
        { name: 'Bitstamp', price: await fetchPrice('https://www.bitstamp.net/api/v2/ticker/solusd/', 'bitstamp') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/SOL-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=SOLUSDT', 'bybit') }
    ];

    prices.forEach(({ name, price }) => {
        document.getElementById(`sol${name}Price`).textContent = `${name}: $${price.toFixed(1)}`;
        flashBackground(`sol${name}Price`, price, name.toLowerCase(), 'SOL');
    });

    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    updateArbitrage('solArbitrage', lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage('solSecondArbitrage', lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

async function updatePricesofAxs() { // AXS/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=AXSUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=AXSUSD', 'kraken') },
        { name: 'Bitstamp', price: await fetchPrice('https://www.bitstamp.net/api/v2/ticker/axsusd/', 'bitstamp') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/AXS-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=AXSUSDT', 'bybit') }
    ];

    prices.forEach(({ name, price }) => {
        document.getElementById(`axs${name}Price`).textContent = `${name}: $${price.toFixed(2)}`;
        flashBackground(`axs${name}Price`, price, name.toLowerCase(), 'AXS');
    });

    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    updateArbitrage('axsArbitrage', lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage('axsSecondArbitrage', lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

async function updatePricesofdoge() { // DOGE/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=DOGEUSDT', 'kraken') },
        { name: 'Bitstamp', price: await fetchPrice('https://www.bitstamp.net/api/v2/ticker/dogeusd/', 'bitstamp') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/DOGE-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=DOGEUSDT', 'bybit') }
    ];

    prices.forEach(({ name, price }) => {
        document.getElementById(`doge${name}Price`).textContent = `${name}: $${price.toFixed(4)}`;
        flashBackground(`doge${name}Price`, price, name.toLowerCase(), 'DOGE');
    });

    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    updateArbitrage('dogeArbitrage', lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage('dogeSecondArbitrage', lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

async function updatePricesofXrp() { // XRP/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=XRPUSDT', 'kraken') },
        { name: 'Bitstamp', price: await fetchPrice('https://www.bitstamp.net/api/v2/ticker/xrpusdt/', 'bitstamp') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/XRP-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=XRPUSDT', 'bybit') }
    ];

    prices.forEach(({ name, price }) => {
        document.getElementById(`xrp${name}Price`).textContent = `${name}: $${price.toFixed(3)}`;
        flashBackground(`xrp${name}Price`, price, name.toLowerCase(), 'XRP');
    });

    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    updateArbitrage('xrpArbitrage', lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage('xrpSecondArbitrage', lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

async function updatePricesofSand() { // SAND/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=SANDUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=SANDUSD', 'kraken') },
        { name: 'Bitstamp', price: await fetchPrice('https://www.bitstamp.net/api/v2/ticker/sandusd/', 'bitstamp') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/SAND-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=SANDUSDT', 'bybit') }
    ];

    prices.forEach(({ name, price }) => {
        document.getElementById(`sand${name}Price`).textContent = `${name}: $${price.toFixed(3)}`;
        flashBackground(`sand${name}Price`, price, name.toLowerCase(), 'SAND');
    });

    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    updateArbitrage('sandArbitrage', lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage('sandSecondArbitrage', lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

async function updatePricesofMana() { // MANA/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=MANAUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=MANAUSD', 'kraken') },
        { name: 'Bitstamp', price: await fetchPrice('https://www.bitstamp.net/api/v2/ticker/manausd/', 'bitstamp') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/MANA-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=MANAUSDT', 'bybit') }
    ];

    prices.forEach(({ name, price }) => {
        document.getElementById(`mana${name}Price`).textContent = `${name}: $${price.toFixed(3)}`;
        flashBackground(`mana${name}Price`, price, name.toLowerCase(), 'MANA');
    });

    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    updateArbitrage('manaArbitrage', lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage('manaSecondArbitrage', lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

async function updatePricesofAvax() { // AVAX/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=AVAXUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=AVAXUSDT', 'kraken') },
        { name: 'Bitstamp', price: await fetchPrice('https://www.bitstamp.net/api/v2/ticker/avaxusd/', 'bitstamp') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/AVAX-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=AVAXUSDT', 'bybit') }
    ];

    prices.forEach(({ name, price }) => {
        document.getElementById(`avax${name}Price`).textContent = `${name}: $${price.toFixed(1)}`;
        flashBackground(`avax${name}Price`, price, name.toLowerCase(), 'AVAX');
    });

    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    updateArbitrage('avaxArbitrage', lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage('avaxSecondArbitrage', lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

async function updatePricesofLtc() { // LTC/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=LTCUSD', 'kraken') },
        { name: 'Bitstamp', price: await fetchPrice('https://www.bitstamp.net/api/v2/ticker/ltcusd/', 'bitstamp') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/LTC-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=LTCUSDT', 'bybit') }
    ];

    prices.forEach(({ name, price }) => {
        document.getElementById(`ltc${name}Price`).textContent = `${name}: $${price.toFixed(2)}`;
        flashBackground(`ltc${name}Price`, price, name.toLowerCase(), 'LTC');
    });

    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    updateArbitrage('ltcArbitrage', lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage('ltcSecondArbitrage', lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

async function updatePricesofLink() { // LINK/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=LINKUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=LINKUSDT', 'kraken') },
        { name: 'Bitstamp', price: await fetchPrice('https://www.bitstamp.net/api/v2/ticker/linkusd/', 'bitstamp') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/LINK-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=LINKUSDT', 'bybit') }
    ];

    prices.forEach(({ name, price }) => {
        document.getElementById(`link${name}Price`).textContent = `${name}: $${price.toFixed(2)}`;
        flashBackground(`link${name}Price`, price, name.toLowerCase(), 'LINK');
    });

    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    updateArbitrage('linkArbitrage', lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage('linkSecondArbitrage', lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

async function updatePricesofAda() { // ADA/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=ADAUSDT', 'kraken') },
        { name: 'Bitstamp', price: await fetchPrice('https://www.bitstamp.net/api/v2/ticker/adausd/', 'bitstamp') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/ADA-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=ADAUSDT', 'bybit') }
    ];

    prices.forEach(({ name, price }) => {
        document.getElementById(`ada${name}Price`).textContent = `${name}: $${price.toFixed(3)}`;
        flashBackground(`ada${name}Price`, price, name.toLowerCase(), 'ADA');
    });

    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    updateArbitrage('adaArbitrage', lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage('adaSecondArbitrage', lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}

function updateArbitrage(elementId, price1, price2, exchange1, exchange2) { // Calculating the Arbitrage
    const percentDifference = ((price2 - price1) / price1) * 100;
    const arbitrageElement = document.getElementById(elementId);
    arbitrageElement.textContent = `${exchange1}>${exchange2}: ${percentDifference.toFixed(2)}%`;

    if (Math.abs(percentDifference) > 1) {
        arbitrageElement.style.backgroundColor = '#00ff22';
    } else if (Math.abs(percentDifference) >= 0.49 && Math.abs(percentDifference) <= 1) {
        arbitrageElement.style.backgroundColor = 'orange';
    } else {
        arbitrageElement.style.backgroundColor = 'white';
    }
} 

function startPriceUpdates() { // Update the prices
    const updateFunctions = [
        updatePricesofbtc,updatePricesofeth,updatePricesofSol,
        updatePricesofAxs,updatePricesofdoge,updatePricesofXrp,
        updatePricesofSand,updatePricesofMana,updatePricesofAvax,
        updatePricesofLtc,updatePricesofLink,updatePricesofAda

    ];
    updateFunctions.forEach(func => {
        func();
        setInterval(func, 25000); 
    })
}

function flashBackground(elementId, newPrice, exchange, symbol) { // When price updates, flash colour and save the last prices
    const lastPrice = lastPrices[exchange][symbol];
    if (lastPrice !== undefined && lastPrice !== newPrice) {
        const element = document.getElementById(elementId);
        const originalColor = element.style.backgroundColor;
        element.style.backgroundColor = '#fffd83';
        setTimeout(() => element.style.backgroundColor = originalColor, 1000);
    }

    lastPrices[exchange][symbol] = newPrice;
}

const lastPrices = { // Here is the saved last prices for the flashbackground
    binance: {},
    kraken: {},
    bitstamp: {},
    coinbase: {},
    bybit: {}
}

startPriceUpdates();
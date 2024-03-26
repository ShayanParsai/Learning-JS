async function updatePricesofBtc() { // BTC/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=XBTUSDT', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/BTC-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=BTCUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=btcusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('btc', name, price, name.toLowerCase()));
    processArbitrage(prices, 'btc');
}
async function updatePricesofEth() { // ETH/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=ETHUSDT', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/ETH-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=ETHUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=ethusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('eth', name, price, name.toLowerCase()));
    processArbitrage(prices, 'eth');
}
async function updatePricesofSol() { // SOL/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=SOLUSDT', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/SOL-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=SOLUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=solusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('sol', name, price, name.toLowerCase()));
    processArbitrage(prices, 'sol');
}
async function updatePricesofAxs() { // AXS/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=AXSUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=AXSUSD', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/AXS-USD/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=AXSUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=axsusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('axs', name, price, name.toLowerCase()));
    processArbitrage(prices, 'axs');
}
async function updatePricesofdoge() { // DOGE/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=DOGEUSDT', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/DOGE-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=DOGEUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=dogeusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('doge', name, price, name.toLowerCase()));
    processArbitrage(prices, 'doge');
}
async function updatePricesofXrp() { // XRP/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=XRPUSDT', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/XRP-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=XRPUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=xrpusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('xrp', name, price, name.toLowerCase()));
    processArbitrage(prices, 'xrp');
}
async function updatePricesofSand() { // SAND/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=SANDUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=SANDUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/SAND-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=SANDUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=sandusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('sand', name, price, name.toLowerCase()));
    processArbitrage(prices, 'sand');
}
async function updatePricesofMana() { // MANA/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=MANAUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=MANAUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/MANA-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=MANAUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=manausdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('mana', name, price, name.toLowerCase()));
    processArbitrage(prices, 'mana');
}
async function updatePricesofAvax() { // AVAX/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=AVAXUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=AVAXUSDT', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/AVAX-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=AVAXUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=avaxusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('avax', name, price, name.toLowerCase()));
    processArbitrage(prices, 'avax');
}
async function updatePricesofLtc() { // LTC/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=LTCUSD', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/LTC-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=LTCUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=ltcusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('ltc', name, price, name.toLowerCase()));
    processArbitrage(prices, 'ltc');
}
async function updatePricesofLink() { // LINK/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=LINKUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=LINKUSDT', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/LINK-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=LINKUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=linkusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('link', name, price, name.toLowerCase()));
    processArbitrage(prices, 'link');
}
async function updatePricesofAda() { // ADA/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=ADAUSDT', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/ADA-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=ADAUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=adausdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('ada', name, price, name.toLowerCase()));
    processArbitrage(prices, 'ada');
}
async function updatePricesOfIcp() { // ICP/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=ICPUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=ICPUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/ICP-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=ICPUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=icpusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('icp', name, price, name.toLowerCase()));
    processArbitrage(prices, 'icp');
}
async function updatePricesOfDot() { // DOT/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=DOTUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=DOTUSD', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/DOT-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=DOTUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=dotusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('dot', name, price, name.toLowerCase()));
    processArbitrage(prices, 'dot');
}
async function updatePricesOfXlm() { // XLM/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=XLMUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=XLMUSD', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/XLM-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=XLMUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=xlmusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('xlm', name, price, name.toLowerCase()));
    processArbitrage(prices, 'xlm');
}
async function updatePricesOfUni() { // UNI/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=UNIUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=UNIUSD', 'kraken') },        
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/UNI-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=UNIUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=uniusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('uni', name, price, name.toLowerCase()));
    processArbitrage(prices, 'uni');
}
async function updatePricesOfNear() { // NEAR/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=NEARUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=NEARUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/NEAR-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=NEARUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=nearusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('near', name, price, name.toLowerCase()));
    processArbitrage(prices, 'near');
}
async function updatePricesOfTrx() { // TRX/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=TRXUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=TRXUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/TRX-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=TRXUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=trxusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('trx', name, price, name.toLowerCase()));
    processArbitrage(prices, 'trx');
}
async function updatePricesOfMatic() { // MATIC/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=MATICUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=MATICUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/MATIC-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=MATICUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=maticusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('matic', name, price, name.toLowerCase()));
    processArbitrage(prices, 'matic');
}
async function updatePricesOfBch() { // BCH/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=BCHUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=BCHUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/BCH-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=BCHUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=bchusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('bch', name, price, name.toLowerCase()));
    processArbitrage(prices, 'bch');
}
async function updatePricesOfApt() { // APT/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=APTUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=APTUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/APT-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=APTUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=aptusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('apt', name, price, name.toLowerCase()));
    processArbitrage(prices, 'apt');
}
async function updatePricesOfFil() { // FIL/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=FILUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=FILUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/FIL-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=FILUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=filusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('fil', name, price, name.toLowerCase()));
    processArbitrage(prices, 'fil');
}
async function updatePricesOfEtc() { // ETC/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=ETCUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=ETCUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/ETC-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=ETCUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=etcusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('etc', name, price, name.toLowerCase()));
    processArbitrage(prices, 'etc');
}
async function updatePricesOfAtom() { // ATOM/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=ATOMUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=ATOMUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/ATOM-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=ATOMUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=atomusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('atom', name, price, name.toLowerCase()));
    processArbitrage(prices, 'atom');
}
async function updatePricesOfArb() { // ARB/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=ARBUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=ARBUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/ARB-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=ARBUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=arbusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('arb', name, price, name.toLowerCase()));
    processArbitrage(prices, 'arb');
}
async function updatePricesOfImx() { // IMX/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=IMXUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=IMXUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/IMX-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=IMXUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=imxusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('imx', name, price, name.toLowerCase()));
    processArbitrage(prices, 'imx');
}
async function updatePricesOfRndr() { // RNDR/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=RNDRUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=RNDRUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/RNDR-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=RNDRUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=rndrusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('rndr', name, price, name.toLowerCase()));
    processArbitrage(prices, 'rndr');
}
async function updatePricesOfGrt() { // GRT/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=GRTUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=GRTUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/GRT-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=GRTUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=grtusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('grt', name, price, name.toLowerCase()));
    processArbitrage(prices, 'grt');
}
async function updatePricesOfOp() { // OP/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=OPUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=OPUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/OP-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=OPUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=opusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('op', name, price, name.toLowerCase()));
    processArbitrage(prices, 'op');
}
async function updatePricesOfInj() { // INJ/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=INJUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=INJUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/INJ-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=INJUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=injusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('inj', name, price, name.toLowerCase()));
    processArbitrage(prices, 'inj');
}
async function updatePricesOfRune() { // RUNE/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=RUNEUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=RUNEUSD', 'kraken') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=RUNEUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=runeusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('rune', name, price, name.toLowerCase()));
    processArbitrage(prices, 'rune');
}
async function updatePricesOfWif() { // WIF/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=WIFUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=WIFUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/WIF-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=WIFUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=wifusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('wif', name, price, name.toLowerCase()));
    processArbitrage(prices, 'wif');
}
async function updatePricesOfFtm() { // FTM/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=FTMUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=FTMUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/FTM-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=FTMUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=ftmusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('ftm', name, price, name.toLowerCase()));
    processArbitrage(prices, 'ftm');
}
async function updatePricesOfMkr() { // MKR/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=MKRUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=MKRUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/MKR-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=MKRUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=mkrusdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('mkr', name, price, name.toLowerCase()));
    processArbitrage(prices, 'mkr');
}
async function updatePricesOfLdo() { // LDO/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=LDOUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=LDOUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/LDO-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=LDOUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=ldousdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('ldo', name, price, name.toLowerCase()));
    processArbitrage(prices, 'ldo');
}
async function updatePricesOfTia() { // TIA/USDT Pair
    const prices = [
        { name: 'Binance', price: await fetchPrice('https://api.binance.com/api/v3/ticker/price?symbol=TIAUSDT', 'binance') },
        { name: 'Kraken', price: await fetchPrice('https://api.kraken.com/0/public/Ticker?pair=TIAUSD', 'kraken') },
        { name: 'Coinbase', price: await fetchPrice('https://api.coinbase.com/v2/prices/TIA-USDT/spot', 'coinbase') },
        { name: 'Bybit', price: await fetchPrice('https://api.bybit.com/v2/public/tickers?symbol=TIAUSDT', 'bybit') },
        { name: 'Htx', price: await fetchPrice('https://api.huobi.pro/market/trade?symbol=tiausdt', 'htx') }
    ];
    prices.forEach(({ name, price }) => updatePriceDisplay('tia', name, price, name.toLowerCase()));
    processArbitrage(prices, 'tia');
}
async function fetchPrice(url, exchange) { // Fetch the prices from the API URLs
    try {
        const response = await fetch(url);
        const data = await response.json();

        switch (exchange) {
            case 'binance':
                return parseFloat(data.price);
            case 'kraken':
                const pair = Object.keys(data.result)[0];
                return parseFloat(data.result[pair].c[0]);
            case 'coinbase':
                return parseFloat(data.data.amount);
            case 'bybit':
                return parseFloat(data.result[0].last_price);
            case 'htx':
                return parseFloat(data.tick.data[0].price);
            default:
                console.log(`Exchange ${exchange} not supported.`);
        }
    } catch (error) {
        console.error('Error fetching price from', exchange, error);
    }
}
function processArbitrage(prices, crypto) { // prepares the info that is sent into updateArbitrage
    let lowest = prices.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
    let highest = prices.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
    let secondHighest = prices.filter(item => item.price !== highest.price).reduce((prev, curr) => prev.price > curr.price ? prev : curr);

    updateArbitrage(`${crypto}Arbitrage`, lowest.price, highest.price, lowest.name, highest.name);
    updateArbitrage(`${crypto}SecondArbitrage`, lowest.price, secondHighest.price, lowest.name, secondHighest.name);
}
function updateArbitrage(elementId, price1, price2, exchange1, exchange2) { // Calculating the Arbitrage
    const percentDifference = ((price2 - price1) / price1) * 100;
    const arbitrageElement = document.getElementById(elementId);
    arbitrageElement.textContent = `${exchange1}>${exchange2}: ${percentDifference.toFixed(2)}%`;

    if (Math.abs(percentDifference) > 0.99) {
        arbitrageElement.style.backgroundColor = '#00ff22';
    } else if (Math.abs(percentDifference) >= 0.40 && Math.abs(percentDifference) <= 0.99) {
        arbitrageElement.style.backgroundColor = 'orange';
    } else {
        arbitrageElement.style.backgroundColor = 'white';
    }
} 
function startPriceUpdates() { // Update the prices
    const updateFunctions = [
        updatePricesofBtc, updatePricesofEth, updatePricesofSol,
        updatePricesofAxs, updatePricesofdoge, updatePricesofXrp,
        updatePricesofSand, updatePricesofMana, updatePricesofAvax,
        updatePricesofLtc, updatePricesofLink, updatePricesofAda,
        updatePricesOfIcp, updatePricesOfDot, updatePricesOfXlm, 
        updatePricesOfUni, updatePricesOfNear, updatePricesOfTrx,
        updatePricesOfMatic, updatePricesOfBch, updatePricesOfApt,
        updatePricesOfFil, updatePricesOfEtc, updatePricesOfAtom,
        updatePricesOfArb, updatePricesOfImx, updatePricesOfRndr,
        updatePricesOfGrt, updatePricesOfOp, updatePricesOfInj, 
        updatePricesOfRune, updatePricesOfWif, updatePricesOfFtm,
        updatePricesOfMkr, updatePricesOfLdo, updatePricesOfTia
    ];

    updateFunctions.forEach(func => {
        func();
        setInterval(func, 33000);
    });
}
function updatePriceDisplay(cryptoName, name, price, exchange) { // Updates the price boxes and than calls flashBackground
    let decimalPlaces;
    if (price >= 250) {
        decimalPlaces = 0;
    } else if (price >= 50) {
        decimalPlaces = 1;
    } else if (price > 0.99) {
        decimalPlaces = 2;
    } else {
        decimalPlaces = 3;
    }
    const elementId = `${cryptoName}${name}Price`;
    document.getElementById(elementId).textContent = `${name}: $${price.toFixed(decimalPlaces)}`;
    flashBackground(elementId, price, exchange, cryptoName.toUpperCase());
}
function flashBackground(elementId, newPrice, exchange, symbol) { // if prices are new, flash the backgrounds, than save the lastPrices
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
    coinbase: {},
    bybit: {},
    htx: {}
} 
startPriceUpdates();
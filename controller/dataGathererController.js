const { GetExchangeRate } = require("./nomicsController");

const LoadCurrenciesMetadata = () => {
  GetExchangeRate().then((currencies) => {
    const allCurrencies = currencies.map((currency) => currency.currency);
    console.log(
      "🚀 ~ file: dataGathererController.js ~ line 4 ~ GetExchangeRate ~ allCurrencies",
      allCurrencies.join(",")
    );
  });
};

module.exports = { LoadCurrenciesMetadata };

const axios = require("axios");
const { nomicsKey } = require("../config");

const baseURL = "https://api.nomics.com/v1";

const instance = axios.create({
  baseURL,
  params: { key: nomicsKey },
});

const getExchangeRateUrl = "/exchange-rates";

const GetExchangeRate = () => {
  return instance.get(getExchangeRateUrl).then((response) => response.data);
};

module.exports = { GetExchangeRate };

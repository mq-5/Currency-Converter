//const availableCurrencies = ["EUR", "USD", "VND", "IDR", "KRW"];

function getExchangeRate(fromCurrency, toCurrency) {
  if (fromCurrency === toCurrency) {
    return 1;
  } else if (fromCurrency === "USD" && toCurrency == "VND") {
    return 23216;
  } else if (fromCurrency == "USD" && toCurrency == "KRW") {
    return 1177.15;
  } else if (fromCurrency == "USD" && toCurrency == "EUR") {
    return 0.89;
  } else if (fromCurrency == "USD" && toCurrency == "IDR") {
    return 13925.0;
  } else if (fromCurrency == "VND" && toCurrency == "KRW") {
    return 0.051;
  } else if (fromCurrency == "VND" && toCurrency == "EUR") {
    return 0.000038;
  } else if (fromCurrency == "VND" && toCurrency == "IDR") {
    return 0.6;
  } else if (fromCurrency == "KRW" && toCurrency == "EUR") {
    return 0.00076;
  } else if (fromCurrency == "KRW" && toCurrency == "IDR") {
    return 11.84;
  } else if (fromCurrency == "IDR" && toCurrency == "EUR") {
    return 0.000064;
  } else {
    return 1 / getExchangeRate(toCurrency, fromCurrency);
  }
}

function convertCurrency(fromCurrency, toCurrency, amount) {
  let result = amount * getExchangeRate(fromCurrency, toCurrency);

  const formatterFrom = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: fromCurrency,
    minimumFractionDigits: 2
  });

  const formatterTo = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: toCurrency,
    minimumFractionDigits: 2
  });
  return (
    formatterFrom.format(amount) +
    " is equivalent to " +
    formatterTo.format(result)
  );
}

function printResult() {
  let fromCurrency = document.getElementById("from").value;
  let toCurrency = document.getElementById("to").value;
  let amount = document.getElementById("amount").value;
  document.getElementById("result").innerHTML = convertCurrency(
    fromCurrency,
    toCurrency,
    amount
  );
}

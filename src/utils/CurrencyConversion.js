let Country = JSON.parse(localStorage.getItem("selected_price")) ?? null;
var regExp = /[a-zA-Z]/g;

const CurrencyConversion = (price) => {
  // Check if price value contains "free" string
  if (regExp.test(price)) {
    if (typeof price === "number") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
      }).format(Math.round(parseFloat(0)));
    }
    price = price.replaceAll("Free", "");
    if (price === "") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
      }).format(Math.round(parseFloat(0)));
    }
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(Math.round(parseFloat(price)));
  } else {
    if (parseFloat(price) && Country) {
      if (Country.currencyAlias === "INR") {
        if (Math.round(parseFloat(price)) === 0) {
          return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: Country.currencyAlias,
            minimumFractionDigits: 0,
          }).format(Math.round(parseFloat(price)));
        }
        return new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: Country.currencyAlias,
          minimumFractionDigits: 0,
        }).format(
          Math.round(parseFloat(price) / Country.fxConversionRate ?? 0)
        );
      } else {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: Country.currencyAlias,
          minimumFractionDigits: 0,
        }).format(
          Math.round(parseFloat(price) / Country.fxConversionRate ?? 0)
        );
      }
    }
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(Math.round(parseFloat(price ?? 0)));
};

export default CurrencyConversion;

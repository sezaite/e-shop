function priceFormatter(price, noCents) {
    const dollars = Math.floor(price);
    const cents = price - dollars;
    return noCents ? dollars : cents.toFixed(2).slice(1);
}


export default priceFormatter

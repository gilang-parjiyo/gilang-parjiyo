const calcAge = (age) => {
    const DAYS_IN_YEAR = 365;
    return age <= 0 ? 0 : age * DAYS_IN_YEAR;
}

console.log(calcAge(65));

module.exports = calcAge;
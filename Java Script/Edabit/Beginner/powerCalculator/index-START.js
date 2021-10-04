/* 
Create a function that takes voltage and current and returns the calculated power.
resource : https://edabit.com/challenge/wAdE9te55cowBLcPs

P = V * C, C = P / V, V = P / V;
*/

const circuitPower = (voltage, current) => {
    const POWER = voltage * current;
    return POWER;
}

module.exports = circuitPower;
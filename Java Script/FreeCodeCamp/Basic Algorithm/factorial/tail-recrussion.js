function factorialFunc(num, factorial = 1) {
    if (num === 0) return factorial;
    return factorialFunc(num - 1, factorial * num )
}



console.log(factorialFunc(0));
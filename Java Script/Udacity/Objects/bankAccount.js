var savingAccount = {
    balance: 1000,
    interestPercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingAccount.balance += amount;
            return savingAccount.balance;
        }
    },
    withdraw: function substractMoney(amount) {
        var verifyBalance = savingAccount.balance - amount;
        if (verifyBalance >= 0 && amount >= 0) {
            savingAccount.balance -= amount;
            return savingAccount.balance;
        }
    },
};


console.log(savingAccount.withdraw(1));
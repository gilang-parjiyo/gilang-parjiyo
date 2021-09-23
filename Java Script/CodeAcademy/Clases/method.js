class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }
    get name() {
        return this._name; // method getter
    }
    get department() {
        return this._department;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }
    takeVacationDay(daysOff){ //method 
        this._remainingVacationDays -= daysOff;
    }
}

const surgeonGilang = new Surgeon ('gilang', 'Dental');
console.log(surgeonGilang.name);
surgeonGilang.takeVacationDay(10);
console.log(surgeonGilang.remainingVacationDays);

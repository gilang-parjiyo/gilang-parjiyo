class HospitalEmployee { //class parent
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }
    get name() {
        return this._name;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays
    }
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
    static generatePassword() { // static method
        const randomInteger = Math.floor(Math.random()* 10000);
        return randomInteger;
    }
}

class Nurse extends HospitalEmployee {  // class child
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
    get certifications() {
        return this._certifications;
    }
    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}
console.log(HospitalEmployee.generatePassword()); // result an error
console.log(nurseOlynyk.generatePassword()); // result an error
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
}
 
class Nurse extends HospitalEmployee {  // class child
    constructor(name, certifications){
        super(name);
        this._certifications = certifications;
    }
}

const nurseOlynyk = new Nurse ('Olynyk', ['trauma', 'pediatirc']); // create new instance for nurse
console.log(nurseOlynyk.name);
nurseOlynyk.takeVacationDays(5); //inherit parent method
console.log(nurseOlynyk.remainingVacationDays); //inherit parent method
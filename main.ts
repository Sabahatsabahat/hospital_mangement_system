class Patient {
    name: string;
    age: number;
    phone: number;
    hospitalName: string;
    caregiver: Caregiver | undefined;

    constructor(name: string, age: number, phone: number, hospitalName: string) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.hospitalName = hospitalName;
        this.caregiver = undefined; // Initially, no caregiver assigned
    }

    assignCaregiver(caregiver: Caregiver): void {
        if (caregiver.hospitalName === this.hospitalName) {
            this.caregiver = caregiver;
        } else {
            console.log(`Caregiver ${caregiver.name} is not from the same hospital as ${this.name}.`);
        }
    }
}

class Caregiver {
    name: string;
    age: number;
    phone: number;
    hospitalName: string;

    constructor(name: string, age: number, phone: number, hospitalName: string) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.hospitalName = hospitalName;
    }
}

class Hospital {
    name: string;
    patients: Patient[];
    caregivers: Caregiver[];

    constructor(name: string) {
        this.name = name;
        this.patients = [];
        this.caregivers = [];
    }

    addPatient(patient: Patient): void {
        this.patients.push(patient);
    }

    addCaregiver(caregiver: Caregiver): void {
        this.caregivers.push(caregiver);
    }
}

let hospital1 = new Hospital("Holy Family Hospital");
let hospital2 = new Hospital("Agha Khan Hospital");
let hospital3 = new Hospital("Burhani Hospital");

let patient1 = new Patient("Farhan", 30, 34567890, hospital1.name);
let patient2 = new Patient("Waheed", 30, 12345678, hospital2.name);
let patient3 = new Patient("Shamiq", 30, 12345678, hospital3.name);

let caregiver1 = new Caregiver("M.iqbal", 30, 34567890, hospital1.name);
let caregiver2 = new Caregiver("Yasmeen", 30, 12345678, hospital2.name);
let caregiver3 = new Caregiver("Abdull ahad", 30, 12345678, hospital3.name);

patient1.assignCaregiver(caregiver1);
patient2.assignCaregiver(caregiver2);
patient3.assignCaregiver(caregiver3);

hospital1.addPatient(patient1);
hospital2.addPatient(patient2);
hospital3.addPatient(patient3);

hospital1.addCaregiver(caregiver1);
hospital2.addCaregiver(caregiver2);
hospital3.addCaregiver(caregiver3);

console.log("Hospitals:");
console.log(hospital1);
console.log(hospital2);
console.log(hospital3);

console.log("Patients:");
console.log(patient1);
console.log(patient2);
console.log(patient3);

console.log("Caregivers:");
console.log(caregiver1);
console.log(caregiver2);
console.log(caregiver3);

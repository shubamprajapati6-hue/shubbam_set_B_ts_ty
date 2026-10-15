const patient =[{bill: 2000, name: "shubham", age: 22},
{bill: 3000, name: "shiva", age: 23},
{bill: 4000, name: "ankur", age: 24},
{bill: 5000, name: "harsh", age: 25}]

function HighestBillPatient() {
    let highestBill = 0;
    let highestBillPatient = null;

    for (let i = 0; i < patient.length; i++) {
        if (patient[i].bill > highestBill) {
            highestBill = patient[i].bill;
            highestBillPatient = patient[i];
        }
    }

    return highestBillPatient;
}HighestBillPatient()


// 1-SAVOL

// class CAR {
//     constructor(markasi, yili, OtKuchi) {
//         this.markasi = markasi
//         this.yili = yili
//         this.OtKuchi = OtKuchi
//     }
// }

// let car1 = new CAR("Tesla Cybertruck", 2022, 845)
// let car2 = new CAR("Toyota Supra", 1978, "от 105 до 387")



// console.log(car1, car2);


// 2-SAVOL

// class Car {
//     constructor(marca, yil) {
//         this.marca = marca;
//         this.yil = yil;
//     }
// }

// class ElectricCar extends Car {
//     constructor(marca, yil, akumlatori) {
//         super(marca, yil);
//         this.akumlatori = akumlatori;
//     }
// }

// let elektrikliAvtomobil1 = new ElectricCar("Tesla", 2023, 300);
// let elektrikliAvtomobil2 = new ElectricCar("Tesla Cybertruck", 2022, 250);

// console.log("Elektrikli Avtomobil 1:", elektrikliAvtomobil1);
// console.log("Elektrikli Avtomobil 2:", elektrikliAvtomobil2);


// 3-SAVOL

// class Car {
//     constructor(marca, yil) {
//         this.marca = marca;
//         this.yil = yil;
//     }

//     displayInfo() {
//         console.log(`Avto markasi: ${this.marca}, ishlab chiqarilgan yili: ${this.yil}`);
//     }
// }

// class ElectricCar extends Car {
//     constructor(marca, yil, akkumulyatorMuddati) {
//         super(marca, yil);
//         this.akkumulyatorMuddati = akkumulyatorMuddati;
//     }
// }

// let elektrikliAvtomobil1 = new ElectricCar("Tesla", 2023, 300);
// let elektrikliAvtomobil2 = new ElectricCar("Tesla Cybertruck", 2022, 250);

// elektrikliAvtomobil1.displayInfo();
// elektrikliAvtomobil2.displayInfo();


// 4-SAVOL
// ID BILAN
let item1 = document.getElementById("item1");
// CLASS BILAN
let item2 = document.getElementsByClassName("item2")
// TEG BILAN
let item3 = document.getElementsByTagName("li")
// 

let item = document.querySelectorAll('.item');

[...item].forEach((el, ind) => {
    console.log(); (el.textContent);
});

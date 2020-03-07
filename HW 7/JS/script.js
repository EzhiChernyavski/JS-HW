/*Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
(ввод информации о скорости движения), расчет пройденных километров.*/

let Auto = function(brand, num) {
    let status = false;
    this.getBrand = function() {
        return brand;
    };
    this.getNum = function() {
        return num;
    };
    this.getStatus = function() {
        return status;
    };
};

let Car = function(brand, num, volume) {
    Auto.apply(this, arguments);

    volume = volume || 50;

    let readyRun = false;

    this.fuelQuantity = 0;

    this.setFuel = function(quantity) {
        if (quantity > 0 && quantity <= volume) {
            this.fuelQuantity = quantity;
        } else {
            this.fuelQuantity = 0;
        };
    };

    this.getFuel = function() {
        return fuelQuantity;
    };

    this.getReady = function() {
        readyRun = true;
    };
    this.diseble = function() {
        readyRun = false;
    };

    this.info = function() {
        return 'Марка: ' + brand + ', номер: ' + num + ', объем ' + volume + ' л. ' + 'Залито топлива ' + this.fuelQuantity + ' л. ' + 'Cостояние: ' + (this.readyRun ? 'готов к поездке.' : 'не готов к поездке.');
    };
};

let car = new Car('Ford', 5269);
console.log(car);






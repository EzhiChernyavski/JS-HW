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
    
};

let Car = function(brand, num, volume) {
    Auto.apply(this, arguments);

    let readyRun = false;

    volume = volume || 50;

    this.fuelQuantity = 0;

    this.setFuel = function(quantity) {
        if (quantity > 0 && quantity <= volume) {
            this.fuelQuantity = quantity
        } else {
            this.fuelQuantity = 0;
        };
    };

    this.getFuel = function() {
        return fuelQuantity;
    };


    this.onEng = function() {
        readyRun = true
    };

    this.offEng = function() {
        readyRun = false
    };

    this.getStatus = function() {
        return readyRun
    };

    this.direction = 0;

    this.Gear = function(front, back, neutral) {
    }//?????????????????????????????????????????

    this.info = function() {
        return 'Марка: ' + brand + ', номер: ' + num + ', объем ' + volume + ' л. ' + 'Залито топлива ' + this.fuelQuantity + ' л. ' + 'Cостояние: ' + (this.getStatus() ? 'двигатель включен, ' : 'двигатель выключен, ') + (readyRun ? 'Готов ехать' : 'Не готов ехать');
    };
};

let car = new Car('Ford', 5269);
console.log(car);
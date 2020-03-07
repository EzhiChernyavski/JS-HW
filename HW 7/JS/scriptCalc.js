let Calc = function() {
    this.get = function() {
        this.a = +prompt('Введите первое число');
        this.b = +prompt('Введите второе число');
        this.oprator = prompt('Введите операцию: +, -, *, /');

        this.operation();
    };

    this.operation = function() {
        switch(this.oprator) {
            case '+': 
                this.result = this.a + this.b; 
            break;
            case '-': 
                this.result = this.a - this.b; 
            break;
            case '*': 
                this.result = this.a * this.b; 
            break;
            case '/': 
                this.result = this.a / this.b; 
            break;
            //default: this.result = 0;

        }

        this.showResalt();
    };

    this.showResalt = function() {
        alert(this.a + ' ' + this.oprator + ' ' + this.b + ' = ' + this.result);
    };
};

let calc = new Calc();
calc.get();


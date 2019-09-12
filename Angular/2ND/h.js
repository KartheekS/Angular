var cust = /** @class */ (function () {
    function cust(td) {
        this.today = td;
    }
    cust.prototype.toString = function () {
        console.log(this.today + '');
    };
    return cust;
}());
var z = new Date();
var x = new cust(z);
x.toString();

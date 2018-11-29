var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.re = re;
        this.im = im;
    }
    Complex.prototype.add = function (complex2) {
        var re = this.re + complex2.re;
        var im = this.im + complex2.im;
        return new Complex(re, im);
    };
    Complex.prototype.substract = function (complex2) {
        var re = this.re - complex2.re;
        var im = this.im - complex2.im;
        return new Complex(re, im);
    };
    Complex.prototype.toString = function () {
        console.log(this.re, this.im);
    };
    return Complex;
}());
var a = new Complex(5, 2);
var b = new Complex(7, 3);
var c = a.add(b);
c.toString();

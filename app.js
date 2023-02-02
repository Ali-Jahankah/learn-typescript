var adding = function (x, y) {
    return "This is ".concat(x);
};
console.log(adding("num1", true));
var notReturn = function (x, y) {
    console.log("This is ".concat(x));
};
var returnNothing = function (x, y) {
    console.log("This is ".concat(x));
    return;
};

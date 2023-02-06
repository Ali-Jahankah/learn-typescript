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
console.log("watch mode...");
console.log("TEST");
var acceptFunction;
acceptFunction = function (a, b) {
    return a + b;
};
var test;
var unknown;
var num;
var an;
// -----------test=unknown;//==============can not assign atype to unknown but can assign to any
test = an;
console.log(acceptFunction("num1", true));

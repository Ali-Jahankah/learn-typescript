//Learning new superset course
var newObj = {
    x: 2,
    y: {
        z: "Ali"
    }
};
newObj.x = 3;
var strickNewObj = {
    a: 2,
    b: {
        c: "Ali"
    }
};
var otherWay = {
    a: 2,
    b: {
        c: "Ali"
    }
};
// ----strickNewObj.a=1;------ ERROR => <const>
var ownTest = {
    a: 2,
    b: {
        c: "Ali"
    }
};
ownTest.a = 3;
// --- ownTest.b="Reza" => Error =>const
ownTest.b["d"] = "reza";
console.log(ownTest);
var x;
var z = "ASD";

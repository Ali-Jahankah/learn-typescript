var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
// enum Role {
//   ADMIN,
//   USER,
//   TEACHER,
// }
var user = {
    name: "Ali",
    age: 666,
    role: [5, "test"],
    // role: Role.ADMIN,
    jobs: [2, { age: 2 }, "ali"]
};
console.log(user.role);

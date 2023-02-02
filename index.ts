const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
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
const user: {
  name: string;
  age: number;
  role: [number, string]; //Tuple ;;;; We can use push to change it!!!!!!!
  jobs: any[]; //Any array of types
} = {
  name: "Ali",
  age: 666,
  role: [5, "test"],
  // role: Role.ADMIN,
  jobs: [2, { age: 2 }, "ali"],
};
console.log(user.role);

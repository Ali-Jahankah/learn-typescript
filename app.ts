type Combinable = "num1" | "num2";
const adding = (x: Combinable, y: string | boolean) => {
  return `This is ${x}`;
};
console.log(adding("num1", true));

const notReturn = (x: Combinable, y: string | boolean): void => {
  console.log(`This is ${x}`);
};
const returnNothing = (x: Combinable, y: string | boolean): undefined => {
  console.log(`This is ${x}`);
  return;
};
console.log("TEST");
let acceptFunction: (a: Combinable, b: string | boolean) => string;
acceptFunction = (a, b) => {
  return a + b;
};
let test: string;
let unknown: unknown;
let num: number;
let an: any;
// -----------test=unknown;//==============can not assign atype to unknown but can assign to any
test = an;

console.log(acceptFunction("num1", true));

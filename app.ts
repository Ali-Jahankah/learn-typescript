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

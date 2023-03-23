//Learning new superset course
const newObj = {
  x: 2,
  y: {
    z: "Ali",
  },
};
newObj.x = 3;

const strickNewObj = <const>{
  a: 2,
  b: {
    c: "Ali",
  },
};
const otherWay = {
  a: 2,
  b: {
    c: "Ali",
  },
} as const;
// ----strickNewObj.a=1;------ ERROR => <const>
const ownTest = {
  a: 2,
  b: <const>{
    c: "Ali",
  },
};
ownTest.a = 3;
// --- ownTest.b="Reza" => Error =>const
ownTest.b["d"] = "reza";
console.log(ownTest);

type Obj1 = {
  day: string;
  date: Date;
  status: "indoor" | "outdoor";
};
type KeyOfObj1 = keyof Obj1;
let x: KeyOfObj1;

type Numbers = {
  [key: number]: string;
};
type Strings = {
  [key: string]: string;
};

type KeyOfStrings = keyof Strings;
const z: KeyOfStrings = "ASD";

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
type Artist = {
  id: number;
  name: string;
  bio: string;
};
type EditArtist = {
  [each in keyof Artist]?: Artist[each];
} & { id: number };
// -------------_Above means a copy of optional options from Artist but id is manadatory.
const artist: Artist = {
  id: 2,
  name: "Ali",
  bio: "666",
};
const editArtist: EditArtist = {
  id: 2,
};
interface IAnimal {
  eat: boolean;
}
interface IDog extends IAnimal {
  bark: boolean;
}
type CheckType = IDog extends IAnimal ? string : boolean;

type IsString<T> = T extends string ? true : false;

type TestString = IsString<string>;
type TestNumber = IsString<number>;

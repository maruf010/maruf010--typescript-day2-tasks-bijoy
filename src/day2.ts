// 1. Object & Array Manipulation
type User = {
  name: string;
  active: boolean;
};
const users: User[] = [
  { name: "Maruf", active: true },
  { name: "hossain", active: false },
  { name: "bijoy", active: true },
];

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.active);
}
// console.log(filterActiveUsers(users));

// 2. Function Overloading
function getArea(shape: "circle", r: number): number;
function getArea(shape: "square", a: number): number;
function getArea(shape: string, value: number): number {
  if (shape === "circle") return Math.PI * value * value;
  if (shape === "square") return value * value;
  throw new Error("Invalid shape!");
}

// Example:
console.log("Circle area:", getArea("circle", 5));
console.log("Square area:", getArea("square", 4));

// 3. Async/await Practice
async function fetchData(url: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1500);
  });
}
(async () => {
  const data = await fetchData("https://api.example.com/data");
  console.log(data);
})();

// 4. Error Handling
function safeJSONParse(str: string): object | null {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error("Invalid JSON:", error);
    return null;
  }
}

// Example:
console.log(safeJSONParse('{"name": "Fahim"}'));
console.log(safeJSONParse("invalid json"));

// 5. Interface + Class Implementation
interface Animal {
  name: string;
  sound(): string;
}
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound(): string {
    return "Woof!";
  }
}
const myDog = new Dog("Buddy");
console.log(`${myDog.name} says ${myDog.sound()}`);

// 6. Generic Function
function getLastItem<T>(arr: T[]): T | null {
  return arr.length ? arr[arr.length - 1] : null;
}
console.log(getLastItem([1, 2, 3, 4]));

// 7. Module Export/Import
import { add, subtract } from "./utils/mathUtils.ts";

console.log("Add:", add(10, 5));
console.log("Subtract:", subtract(10, 5));

//  8. Simple CLI Program

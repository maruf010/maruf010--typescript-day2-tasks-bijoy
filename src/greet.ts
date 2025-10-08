// greet.ts
const userName = process.argv[2];
const age = process.argv[3];

if (!userName || !age) {
  console.log("Usage: ts-node greet.ts <name> <age>");
} else {
  console.log(`Hello, ${userName}! You are ${age} years old.`);
}

// node greet.ts Maruf 22

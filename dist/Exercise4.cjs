"use strict";
// Problem 4 — Module Export + Intersection Types + Enum
// Detailed Problem Statement
// In submission/math.ts:
Object.defineProperty(exports, "__esModule", { value: true });
// Create enum
// Define intersection type
// Export default function:
// export default function createCalc(op);
// The returned object must:store op
// execute add or multiply based on it
// In index.ts, import and use it.
// Constraints
// Must use intersection type.
// Must use enum fields Operation.Add or Operation.Multiply.
// Example Test Cases
// Valid
// const addCalc = createCalc(Operation.Add);
// addCalc.execute(2, 3);  // → 5
// Code Snippet — submission/math.ts
// // Problem 4 — Module Export + Intersection Types + Enum
// TODO: Define an enum for operations (add, multiply)
// TODO: Define a type for calculator object
// It should store the operation and have an execute method
// Code Snippet — index.ts
// import createCalc, { Operation } from './submission/math';
const Exercise4Math_1 = require("./Exercise4Math");
const calc = (0, Exercise4Math_1.default)(/* TODO: pass operation */ Exercise4Math_1.Operation.Add);
console.log(calc.execute(5, 10)); // Expected output: 15

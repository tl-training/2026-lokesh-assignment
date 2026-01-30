// Problem 5 — API Response Parser with Type Assertion
// Detailed Problem Statement
// Implement:
// export function parseApiResponse(
//   response
// ){ }

// Rules:

// Use type assertion (as) only after runtime validation.
// Validate:id must be a number
// title must be a string
// Return:validated object, OR
// null if validation fails

// Constraints

// Must not trust unknown without checks.
// Must avoid unsafe direct casting before checks.

// Example Test Cases
// Valid
// parseApiResponse({ id: 1, title: "Hello" })
// // → { id: 1, title: "Hello" }

// Code Snippet
// // Problem 5 — API Response Parser with Type Assertion

type User = {
  id: number;
  title: string;
}

function parseApiResponse(response: unknown): User | null {  // TODO: Validate response is non-null object
   if (typeof response !== "object" || response === null || !("id" in response) || !("title" in response) || typeof response.id !== "number" || typeof response.title !== "string")
    return null;
  // TODO: Check id is number and title is string, else return null
  const data = response as User;
  // TODO: Use type assertion after runtime validation
  return data;
  return null; // placeholder return
}

console.log(parseApiResponse({ id: 1, title: "Hello" }));
console.log(parseApiResponse({ title: "Hello" }));
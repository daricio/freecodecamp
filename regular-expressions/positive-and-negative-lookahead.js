// ❓ DESCRIPTION
// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long,
// and have two consecutive digits.

// ✅ SOLUTION
let sampleWord = "astronaut";
let pwRegex = /(?=.{6,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
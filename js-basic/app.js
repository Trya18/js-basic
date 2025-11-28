'use strict';

// Interactive CLI using prompt-sync
// Best practices: strict mode, clear function boundaries, validation, and main guard

let prompt;
try {
  // Ensure you have installed: npm install prompt-sync
  prompt = require('prompt-sync')({ sigint: true });
} catch (err) {
  console.error('Dependency missing: prompt-sync. Install it with:\n  npm install prompt-sync');
  process.exit(1);
}

const DEFAULT_LANGUAGE = 'JavaScript';

function promptNonEmptyString(message) {
  // Prompt until a non-empty trimmed string is provided
  while (true) {
    const input = prompt(message).trim();
    if (input.length > 0) return input.replace(/\s+/g, ' ');
    console.log('Input cannot be empty. Please try again.');
  }
}

function promptPositiveInteger(message, min = 1, max = 129) {
  while (true) {
    const raw = prompt(message).trim();
    const num = Number(raw);
    if (Number.isInteger(num) && num >= min && num <= max) return num;
    console.log(`Please enter a valid whole number between ${min} and ${max}.`);
  }
}

function buildGreeting({ name, age, language = DEFAULT_LANGUAGE }) {
  return `Hello, my name is ${name} and I am ${age} years old. I am learning ${language}.`;
}

function main() {
  console.log('=== Greeting App ===');

  const name = promptNonEmptyString('Enter your name: ');
  const age = promptPositiveInteger('Enter your age: ');
  const languageInput = prompt(`What language are you learning? (default: ${DEFAULT_LANGUAGE}): `).trim();
  const language = languageInput || DEFAULT_LANGUAGE;

  const greeting = buildGreeting({ name, age, language });
  console.log(greeting);
}

if (require.main === module) {
  main();
}

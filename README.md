# Multibank Character Counter

A simple, efficient CLI tool built with Node.js that counts character occurrences in a string.

## Features

* Case-insensitive counting (`A` = `a`)
* Ignores all whitespace (spaces, tabs, newlines)
* Preserves order of first appearance
* Supports special characters, numbers, and Unicode
* Works with both CLI arguments and piped input
* Fully unit tested with Jest

---

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

## Usage

### 1. Using CLI Argument

```bash
node bin/cli.js "hello world"
```

**Output:**

```
h:1, e:1, l:3, o:2, w:1, r:1, d:1
```

---

### 2. Using Piped Input

```bash
echo "Hello World" | node bin/cli.js
```

---

### Important: Shell Variable Expansion

If you use `$` inside double quotes, your shell may interpret it as an environment variable.

Incorrect:

```bash
node bin/cli.js "test $MSG"
```

Correct:

```bash
node bin/cli.js 'test $MSG'
```

OR

```bash
node bin/cli.js "test \$MSG"
```

---

## How It Works

### Processing Steps

1. Convert input to lowercase
2. Remove all whitespace using regex (`\s`)
3. Iterate through characters
4. Store counts using a `Map` (preserves order)
5. Format output as `char:count`

---

## Project Structure

```
multibank-character-counter/
├── src/
│   └── counter.js       # Core logic
├── bin/
│   └── cli.js           # CLI entry point
├── tests/
│   └── counter.test.js  # Jest tests
├── package.json
└── README.md
```

---

## Running Tests

```bash
npm test
```

Verbose mode:

```bash
npm run test:verbose
```

Coverage report:

```bash
npm run test:coverage
```

---

## Example Cases

| Input       | Output                            |
| ----------- | --------------------------------- |
| hello world | h:1, e:1, l:3, o:2, w:1, r:1, d:1 |
| Hello       | h:1, e:1, l:2, o:1                |
| a b c       | a:1, b:1, c:1                     |
| a!a?        | a:2, !:1, ?:1                     |
| café        | c:1, a:1, f:1, é:1                |

---

## Error Handling

If the input is empty or contains only whitespace:

* Prints error to `stderr`
* Exits with status code `1`

Example:

```bash
node bin/cli.js "   "
```

Output:

```
Error: Input is empty or whitespace only.
```

---

## Scripts

```json
"scripts": {
  "test": "jest",
  "test:verbose": "jest --verbose",
  "test:coverage": "jest --coverage",
  "start": "node bin/cli.js"
}
```

---

## Future Improvements

* Publish as global npm CLI tool
* Add TypeScript support
* Add interactive prompt mode
* Performance optimization for very large inputs



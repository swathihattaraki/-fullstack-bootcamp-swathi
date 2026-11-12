# Full Stack Engineering Bootcamp

## Project Description

This repository contains my practical assignments and learning activities for the Full Stack Engineering Bootcamp. It covers web engineering fundamentals, Git and GitHub workflows, and a TypeScript-based employee data utility.

## Learning Objectives

- Understand client-server architecture and request lifecycles.
- Learn HTTP, HTTPS, DNS, REST APIs, and JSON.
- Understand HTTP methods and status codes.
- Practise Git branching, commits, pull requests, and merge conflict resolution.
- Develop a TypeScript application with strict type checking.
- Fetch, validate, transform, and summarize API data.

## Technologies and Tools

- Git and GitHub
- JavaScript and TypeScript
- Node.js
- REST APIs and JSON
- JSONPlaceholder API
- Visual Studio Code

## Project Structure

```text
fullstack-bootcamp-swathi/
├── src/
│   ├── types.ts
│   ├── employeeService.ts
│   ├── index.ts
│   └── test.ts
├── docs/
├── examples/
├── dist/
├── README.md
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Day 1: Web Engineering Fundamentals and Git

- Studied client-server architecture and the HTTP request lifecycle.
- Learned HTTP methods: GET, POST, PUT, PATCH, and DELETE.
- Studied HTTP status codes, HTTPS, DNS, REST APIs, and JSON.
- Practised Git repositories, branches, commits, and pull requests.
- Practised resolving a Git merge conflict.
- Worked on architecture documentation.

## Client-Server Request Lifecycle

1. The user sends a request from the client.
2. The frontend sends an HTTP request to the backend.
3. The backend receives and validates the request.
4. The backend communicates with the database when required.
5. The database processes the operation.
6. The backend sends an HTTP response.
7. The client displays the result.

## HTTP Methods

| Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create new data |
| PUT | Replace existing data |
| PATCH | Partially update data |
| DELETE | Delete data |

## Day 2: TypeScript Employee Utility

Developed a TypeScript application that fetches employee data from the JSONPlaceholder API and processes the returned records.

### Features

- Created interfaces for raw API users, employee records, and employee summaries.
- Enabled strict TypeScript type checking.
- Fetched data using the Fetch API.
- Handled HTTP errors and network errors.
- Validated incoming API data.
- Transformed employee records using `map()`.
- Filtered active employees using `filter()`.
- Calculated payroll and department summaries using `reduce()`.
- Added eight test cases covering valid, invalid, missing, empty, HTTP-error, and network-error scenarios.

**Note:** Salary and active-status values are generated demonstration values for practising data transformation. They are not provided by the JSONPlaceholder API.

## Setup Instructions

### Prerequisites

- Node.js installed
- npm installed
- Git installed

### Clone the Repository

```bash
git clone REPOSITORY_URL
cd fullstack-bootcamp-swathi
```

Replace `REPOSITORY_URL` with the actual GitHub repository URL.

### Install Dependencies

```bash
npm install
```

### Build the Project

```bash
npm run build
```

### Run the Application

```bash
npm start
```

### Run Tests

```bash
npm test
```

### Check TypeScript Types

```bash
npm run typecheck
```

## Configuration

TypeScript compiler settings are maintained in `tsconfig.json`. Strict type checking is enabled.

The application uses the public JSONPlaceholder API and does not require API keys or environment variables.

## Git Workflow Practice

- Created and worked with Git branches.
- Practised staging and committing changes.
- Practised pushing changes to GitHub.
- Worked on pull request workflows.
- Resolved an intentional merge conflict.

## Known Limitations

- JSONPlaceholder provides sample user data, not real employee records.
- Salary and active-status values are generated for demonstration purposes.
- The project is a learning utility and is not intended for production use.

## Author

Swathi Hattaraki
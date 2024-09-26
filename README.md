# Didomi Challenge

## Overview
This project is built using modern tools such as Vite for fast builds, TypeScript for static typing, React to manage the interfaces, ESLint for code linting, and Playwright for end-to-end testing. Below are the steps and commands required to set up, develop, lint, build, and test the project.

Technologies:
  * Typescript
  * React
  * Tailwind CSS
  * [Material Tailwind](https://material-tailwind.com)
  * Vite
  * Vitest
  * React Testing Library
  * Playwright

## Table of Contents
- [Before start (dependencies)](#before-start-dependencies)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Code Linting](#code-linting)
  - [Linting Code](#linting-code)
  - [Type Checking](#type-checking)
  - [Auto-fixing Lint Issues](#auto-fixing-lint-issues)
- [Building the Project](#building-the-project)
- [Previewing the Production Build](#previewing-the-production-build)
- [Running Tests](#running-tests)
  - [Unit Tests](#unit-tests)
  - [End-to-End (E2E) Tests](#end-to-end-e2e-tests)

---
## Before start (dependencies)

* Make sure you have Node.js v20.17 or higher
* The project is based on Yarn, so you need to enable it
    ```bash
    corepack enable yarn
    ```
    It can also work with npm.
* Playwright may require additional dependencies depending on your platform. Run yarn test:e2e:install to handle them automatically.

## Installation

1. Clone the repository:
```bash
> git clone https://github.com/jmrosadev/didomi-challenge
```

2. Navigate to the project directory:
```bash
> cd didomi-challenge
```

3. Install the dependencies:
```bash
> yarn install
```

## Development

The first thing to do is to configure **husky** to apply linters on some git hooks.
```bash
yarn postinstall
```

To run the development server with **Vite**:

```bash
> yarn dev
```
This will start the server and make it accessible via the network by binding it to 0.0.0.0. You can access it at http://localhost:5173.

## Code Linting

### Linting Code
To lint your code using ESLint, run:
```bash
> yarn lint
```

### Type Checking

To check for TypeScript errors without emitting output:
```
> yarn lint:type
```

### Auto-fixing Lint Issues

You can automatically fix fixable linting errors by running:
```bash
> yarn lint:fix
```

## Building the Project

To build the project for production using Vite:
```bash
> yarn build
```
The build will be optimized and output to the dist/ folder.

## Previewing the Production Build

After building the project, you can preview the production build locally:
```bash
> yarn preview
```
This will serve the production build on http://localhost:4173.

## Running Tests

### Unit Tests

To run unit tests with Vitest, use the following command:
```bash
> yarn test
```

### End-to-End (E2E) Tests

#### Installing Playwright and Dependencies

Before running end-to-end tests with Playwright, you need to install Playwright along with the necessary browser dependencies:
```bash
> yarn test:e2e:install
```

#### Running E2E Tests

To run the Playwright end-to-end tests in the interactive UI mode:
```bash
> yarn test:e2e
```

To run the tests in headless mode:
```bash
yarn test:e2e:run
```

# Dev UI: Testing & Code Quality

**`dev-ui`** is a robust and flexible development environment setup for React. This repository demonstrates an optimized testing setup with modern tooling and practices for ensuring code quality.

## **Features**

- TypeScript support for static type checking
- Vite for building, developing and previewing the project
- ESLint and Prettier for code linting and formatting
- Radix UI for constructing UI components
- Vitest for unit and integration testing
- Playwright for end-to-end testing
- Husky for managing git hooks
- Tailwind CSS for utility-first CSS

## **Getting Started**

First, clone the repository

Then, navigate into the project directory:

```
cd dev-ui
```

Install the project dependencies:

```
pnpm install
```

## **Scripts**

This project includes several pnpm scripts for managing the development lifecycle:

- **`pnpm dev`**: Runs the Vite development server
- **`pnpm build`**: Runs the TypeScript compiler and then builds the project with Vite
- **`pnpm lint`**: Lints the source files with ESLint
- **`pnpm preview`**: Runs the Vite preview server on the production build
- **`pnpm test`**: Runs unit and integration tests with Vitest
- **`pnpm test-ui`**: Opens the Vitest UI
- **`pnpm coverage`**: Generates code coverage reports using Vitest
- **`pnpm prepare`**: Sets up Husky for managing git hooks
- **`pnpm format`**: Formats the entire project with Prettier
- **`pnpm test-e2e`**: Runs end-to-end tests with Playwright

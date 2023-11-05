# product-gui

## web description

# Highlights of the project setup

### This repo is setup using latest tools like:

1. ### vite -
   Is a build tool that aims to provide a faster and leaner development experience for modern web projects, it uses esbuild which way more faster than any other build tools [https://vitejs.dev/guide/]
2. ### react with typescript -
   Using Typescript to build our React applications will make our react applications more predictable as we will be able to catch a lot of errors at runtime (during compilation). [https://create-react-app.dev/docs/adding-typescript/]


3. ### react-query - 
 React Query simplifies data management, improves performance, enhances type safety, and streamlines error handling in your React.js project, making it a valuable addition when using TypeScript for development.Efficient Data Fetching, Automatic Caching.

4. ### Styling - 

In this project, we use SCSS for custom styling and leverage React Bootstrap for UI components. Here's a brief overview of our styling setup:

- **SCSS (Sass)**: We use SCSS to create custom styles. SCSS provides a powerful way to manage styles, including variables, mixins, and nesting, ensuring maintainable and modular CSS.

- **React Bootstrap**: We rely on React Bootstrap for UI components. It offers a library of pre-styled and responsive components, making it easier to build a consistent and visually appealing user interface.

# Setup project in local enviornment

1. Git Clone Repo in local from url using below command
   ```bash
   git clone []
   ```
2. Go to web directory just created after git clone finishes.
   ```bash
   cd web
   ```
3. Install project packages required to setup project in local, it takes packages from package.josn In same directory execuet below steps:
   ```bash
   npm i
   ```
4. Launch application local enviornment, execute below command in same directory
   ```bash
   pnpm dev
   ```
5. Open http://localhost:5174// in browser to access the application

## Things could be implemented
1. unit tests with testing-library
2. end to end test with cypress/testcafe
3. SignIn and signOut user
4. Pagination
5. Search functionality
6. Course image to database
7. Dashboard panel
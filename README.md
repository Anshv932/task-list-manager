# Task List Manager

A task management application built with React, featuring an editable task table where users can dynamically add, edit, delete, and filter tasks. This app integrates with a dummy API to fetch tasks and uses `react-tabulator` for an editable table. The app is styled with TailwindCSS to ensure a clean, responsive design.

## Features

1. **Editable Task Table**:
   - Display tasks in a table with columns for Task ID, Title, Description, and Status.
   - Inline editing for Title, Description, and Status.
   - Status field includes options: `To Do`, `In Progress`, and `Done`.
   - Delete tasks directly from the table.

2. **Add a New Task**:
   - Provide a form or button that allows users to add new tasks dynamically.
   - Newly added tasks appear in the table without requiring a page refresh.

3. **Task Filtering**:
   - Add a dropdown filter to display tasks based on their status: `To Do`, `In Progress`, or `Done`.

4. **Fetch Data from Dummy API**:
   - Fetch initial task data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos).
   - Display the first 20 tasks and map the `completed` field to task status (`Done` or `To Do`).

5. **Styling**:
   - Clean and responsive design using TailwindCSS for styling.

6. **Search Bar**:
   - Add a search bar to filter tasks by their Title or Description.

7. **Toast Notifications**:
   - Display success messages when a task is added, edited, or deleted.

## Live Demo

The app is deployed on Netlify. You can access the live version here:

[Live Demo](https://keen-truffle-628fb7.netlify.app)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-list-manager.git


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

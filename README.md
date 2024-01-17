# My Books

![demo](https://github.com/IgorMokhov/my-books/assets/115712538/72db7c85-725f-4e2d-b0d7-31fa9a78a3cd)
[Deployed Project](https://my-books-gamma.vercel.app/)

## Introduction

"My Books" is a React Single Page Application (SPA) designed for searching books using the Google Books API. This project allows users to explore a vast collection of books, leveraging the power of the Google Books API. The application is built with a modern and efficient tech stack, ensuring a smooth and responsive user experience.

## Features

### Elements

- Server request includes information: search query string, category selector (default is 'all'), and relevance selector (default is 'relevance').
- Redirects to the main page with search results if the request is not from the main page.
- Any book can be added to favorites, implemented as a sidebar.
- Light/Dark theme.
- Counter for the number of received books.
- Pagination implemented with a "Load More" approach in increments of 30 books.
- Filtering out duplicate books received from the Google Books API server.
- Additional check for remaining books to load.

### Status Information

- Loader displayed during each load.
- Snackbar provides information on adding/deletion/errors.

### Routing

- HomePage
- Detailed page with dynamic path.
- AboutPage
- NotFoundPage.

### State Management

- Implemented through Slice.
- All important data is saved in LocalStorage.

### Security

- API_KEY is stored in a separate .env file.

### Layout

- Responsive design up to 320px.

## Technologies

- [**TypeScript**](https://www.typescriptlang.org/): A superset of JavaScript that adds static types to the language.
- [**React**](https://reactjs.org/): A JavaScript library for building user interfaces.
- [**React Router**](https://reactrouter.com/): Enables navigation and routing in the React application.
- [**Redux Toolkit**](https://redux-toolkit.js.org/): Facilitates state management in React applications.
- [**Redux Persist**](https://www.npmjs.com/package/redux-persist): Persists the Redux store, ensuring data retention between sessions.
- [**Material UI**](https://material-ui.com/): React UI framework for building responsive and aesthetically pleasing user interfaces.
- [**Axios**](https://axios-http.com/): A promise-based HTTP client for making requests to the Google Books API.
- [**Html React Parser**](https://www.npmjs.com/package/html-react-parser): Parses HTML content received from the Google Books API.
- [**Notistack**](https://www.npmjs.com/package/notistack): A notification library for React applications.

## Getting Started

To install and use the project, follow these steps:

### API Key

1. Obtain an API key from [Google Developers Console](https://console.developers.google.com/).
2. Create a new file named `.env` in the root directory of the project.
3. Add your API key to the `.env` file:

```env
  REACT_APP_API_KEY=your_api_key
```

[env.example.txt](env.example.txt) - see the env.example.txt

<br/>

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run the following command to install dependencies:

```sh
  npm install
```

<br/>

### Usage

To start the development server, use the following command:

```sh
  npm start
```

Visit the provided local URL in your browser to explore the "My Books" application.

<br/>

### Build

For a production build, run the following command:

```sh
  npm run build
```

<br/>

<br/>

## License

This project is licensed under the [MIT License](LICENSE.md) - see the LICENSE.md file for details.

<br/>

## Author

If you have questions, write me an email

Igor Mokhov — Frontend Developer<br/>
igormokhovid@gmail.com

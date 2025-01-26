# News Application

Welcome to the **News Application**! This is a Next.js-based project designed to provide an interactive platform where users can explore, add, and manage news articles.

---

## Features

1. **News Section**
   - View a list of news articles.
   - Titles are adorned with Fibonacci numbers to add a unique touch.
   - Prime-numbered titles are highlighted for distinction.
   - Logged-in users can:
      - **Add** new news articles to the list.
      - **Delete** existing articles.

2. **Profile Page**
   - Accessible only to logged-in users.
   - Currently empty but acts as a placeholder for future enhancements.

3. **Profile Page**
   - Default Home page.
   - Currently empty but acts as a placeholder for future enhancements.

---

## Libraries Used

This project utilizes the following libraries to deliver a smooth and feature-rich experience:

- [Next.js](https://nextjs.org/) (v15.1.6) - Framework for building server-rendered React applications.
- [React](https://reactjs.org/) (v19.0.0) - Library for building user interfaces.
- [Redux Toolkit](https://redux-toolkit.js.org/) (v2.5.0) - For managing global state.
- [React Redux](https://react-redux.js.org/) (v9.2.0) - Integration of Redux with React.
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) (v3.1.0) - Middleware for handling async operations in Redux.
- [Ant Design](https://ant.design/) (v5.23.2) - UI component library for a clean and consistent design.
- [React Infinite Scroll Component](https://github.com/ankeetmaini/react-infinite-scroll-component) (v6.1.0) - Infinite scrolling functionality for news lists.
- [Axios](https://axios-http.com/) (v1.7.9) - HTTP client for API calls.
- [Tailwind CSS](https://tailwindcss.com/) (v3.4.1) - Utility-first CSS framework.
- [JSON Server](https://github.com/typicode/json-server) (v1.0.0-beta.3) - Mock REST API for local development.
- [Cross-Env](https://github.com/kentcdodds/cross-env) (v7.0.3) - For managing environment variables.

---

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saents/test-task-oneSt.git
   ```

2. Navigate to the project directory:
   ```bash
   cd test--task
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Environment

1. **Start the JSON Server:**
   ```bash
   npm run server
   ```
   This will start the mock REST API at `http://localhost:3004/`.

2. **Run the Next.js Application:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000/`.

---

## Folder Structure

The project structure is organized as follows:

```
├── public/                  # Static assets (images, icons, etc.)
├── src/                     # Source code
│   ├── api/                 # API configuration
│   ├── components/          # Reusable UI components
│   ├── pages/               # Application pages (Next.js routing)
│   ├── store/               # Redux store setup
│   ├── types/               # Type definitions
│   ├── styles/              # Global and component-specific styles
│   └── utils/               # Utility functions
├── db.json                  # Mock database for JSON Server
├── next.config.js           # Next.js configuration
├── package.json             # Project metadata
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── eslint.config.mjs        # ESLint configuration
├── next-env.d.ts            # Type definitions for Next.js
├── .gitignore               # Git ignore file
├── .eslint.config.mjs     # ESLint configuration
└── README.md                # Project documentation
```

---

## Future Enhancements

- Add more functionality to the profile page.
- Implement user authentication with OAuth.
- Enhance the UI with custom themes.

---

## License

This project is licensed under the MIT License.

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request with your improvements.

---

### Contact

For inquiries or feedback, reach out to the maintainer at [arm.dev.292@gmail.com](mailto:arm.dev.292@gmail.com).

---

P.S. The project took approximately **3.5 hours** to complete.

Enjoy building with the **News Application**! 🎉

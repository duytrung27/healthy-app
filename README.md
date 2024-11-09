# Arent Healthcare

A healthcare web application built using Next.js, React, Redux Toolkit, and TailwindCSS. This project is structured for scalability, maintainability, and ease of development.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building the Project](#building-the-project)
- [Project Structure](#project-structure)
- [Data flow](#data-flow)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [Configuration](#configuration)

## Getting Started

Follow the instructions below to set up and run the project on your local machine for development or testing purposes.

## Prerequisites

- [Node.js](https://nodejs.org/) (>=16.8 recommended, Node.js 18 or later preferred)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

> **Note:** While Node.js 14 may work, it is not officially supported and may lead to compatibility issues. It is highly recommended to use Node.js 16.8 or later.

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the project:**
   ```bash
   npm run dev
   ```

## Building the Project

```bash
npm run build
```

## Project Structure

ARENT-HEALTHCARE    /
├── .husky/               # Configuration for Git hooks
├── .next/                # Auto-generated folder with Next.js build files
├── .vscode/              # VS Code workspace settings
├── app/                  # Application's main pages and layout components
│   ├── [locale]/         # Directory for handling locale-based routing
│   ├── column-list/      # Specific page or section
│   ├── own-record/       # Specific page or section
│   ├── globals.css       # Global CSS styles
│   ├── layout.tsx        # Main layout component
│   ├── page.tsx          # Main page component
│   └── favicon.ico       # Favicon for the app
├── components/           # Reusable UI components
│   ├── button/           # Button components
│   ├── chart/            # Chart components
│   ├── footer/           # Footer component
│   ├── header/           # Header component
│   ├── home/             # Home page components
│   ├── layout/           # Layout components
│   └── ui/               # UI components (buttons, forms, etc.)
├── lang/                 # Language and localization files
├── libs/                 # Libraries and utility files
│   ├── data/             # Data-related logic
│   └── redux/            # Redux state management
│       ├── api.ts        # API-related functions for Redux
│       ├── constants.ts  # Constants for Redux
│       ├── helpers.ts    # Helper functions for Redux
│       └── utils.ts      # Utility functions for Redux
├── providers/            # Context providers
├── public/               # Public assets (images, icons, etc.)
│   ├── icons/            # Icon assets
│   └── images/           # Image assets
├── types/                # TypeScript type definitions
├── .env                  # Environment variables for production
├── .env.dev              # Environment variables for development
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore file
├── components.json       # Component configuration file
├── i18n.ts               # Internationalization configuration
├── middleware.ts         # Middleware for API or authentication
├── next-env.d.ts         # Next.js environment types
├── next.config.mjs       # Next.js configuration file
├── package-lock.json     # Lockfile for npm dependencies
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
├── README.md             # Project README
├── tailwind.config.ts    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
└── tsconfig.tsbuildinfo  # TypeScript build info (auto-generated)

## Data flow

- API Data Fetching: Data is fetched via APIs using axios and then dispatched to the Redux store. In this project, the data will be mocked and not fetched from the server. We assume that the data is already available in the Redux store.
- State Management: Components access data from the Redux store using react-redux to subscribe to specific state slices. This keeps components reactive to state changes.
- Rendering: The application uses Next.js's server-side rendering (SSR) for faster loading and better SEO, fetching data as needed before rendering components.

## Dependencies

- @reduxjs/toolkit: A package for managing application state in React using Redux.  
- axios: Promise-based HTTP client for making API requests.
- clsx: Utility for conditionally joining class names.
- dayjs: A library for handling date and time functions.      
- next: A React framework for server-rendered applications.
- react: Library for building user interfaces.
- react-dom: Package for working with the DOM in React.
- react-icons: A library of popular icons for React applications.
- react-redux: Official React bindings for Redux.
- recharts: A charting library for React.
- tailwind-merge: Utility to merge TailwindCSS classes.
- tailwindcss-animate: Plugin for adding animations with TailwindCSS.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the production version of the application.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint to check for linting errors.
- `npm run format`: Run Prettier to format the code.
- `npm run check`: Checks if the code format adheres to Prettier rules.
- `npm run prepare`: Prepares the project for deployment by installing Husky for Git hooks.

## Configuration

- `.env`: Environment variables for production.
- `.env.dev`: Environment variables for development.
- `.eslintrc.json`: ESLint configuration.
- `.gitignore`: Git ignore file.
- `i18n.ts`: Internationalization configuration.
- `middleware.ts`: Middleware for API or authentication.
- `next-env.d.ts`: Next.js environment types.
- `next.config.mjs`: Next.js configuration file.
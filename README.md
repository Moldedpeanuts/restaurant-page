# Restaurant Page (with Webpack)
This project is a dynamic restaurant homepage built using JavaScript, showcasing DOM manipulation code. It was created as part of a Webpack-based project setup and is intended to serve as a basic example of a restaurant website with tabbed navigation. This project uses Webpack, JavaScript, HTML and CSS to dynamically render the content of the website.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Acknowledgements](#ackgnowledgements)


## Project Overview

The Restaurant Page is a single-page web app that simulates a restaurant homepage with dynamic tabbed content. The homepage displays the restaurant's introductory content, while additional "tabs" such as "Menu" and "Contact" allow users to navigate different sections. The content for each tab is generated dynamically using JavaScript, and the user interface is styled with CSS.

The project demonstrates several skills:
- **DOM Manipulation**: Using JavaScript to dynamically create and display content.

- **Modularization**: Organizing the code into separate modules for different sections of the page.

- **Webpack Setup**: Utilizing Webpack to bundle the project and run the development server.

- **Responsive Design**: Ensuring the site is responsive and works well on all screen sizes.

- **Deployment**: Deploying the project to GitHub Pages.


## Features

- **Dynamic Content Rendering** : All content is created dynamically using JavaScript, ensuring flexibility and modularity.

- **Tabbed Navigation**: The website includes navigation tabs that let users switch between different sections, such as the homepage, menu and contact page.

- **Responsive Layout**: The website is designed to be mobile-friendly, adapting well to different screen sizes.

- **Webpack Integration**: The project is bundled and served using Webpack, providing an optimized build process.


## Technologies Used

- **HTML and CSS**: Structure, styling and responsiveness.
- **JavaScript(ES6+)**: DOM Manipulation, event handling and creating dynamic content.
- **Webpack**: Bundling the project files and running a local development server.
- **GitHub Pages**: Deployment.



## How to Use

To view and interact with the restaurant page, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/Moldedpeanuts/restaurant-page.git
```

2. Navigate to the project directory:
```bash
cd restaurant-page
```

3. Install dependencies using npm:
```bash
npm install
```

4. Run the development server:
```bash
npx webpack serve
```

5. Open your browser and go to http://localhost:8080 to see the page.


## Project Structure

```graphql
restaurant-page/
├── dist/                 # Bundled project files for production
├── src/                  # Source files for the project
│   ├── index.js          # Main entry file for JavaScript
│   ├── modules/          # Folder containing different modules (e.g. homepage, menu, contact)
│   ├── template.html     # HTML template
│   └── style.css         # CSS file for styling
├── .gitignore            # Gitignore file for ignoring node_modules and dist
├── package.json          # Project configuration and dependencies
└── webpack.config.js     # Webpack configuration file
```


## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed. You can download and install them from https://nodejs.org/en Node.js official website.

### Install Dependencies

After cloning the project, run the following command to install the necessary dependencies:
```bash
npm install
```

### Run Development Server

To start a local development server, use the following command:
```bash
npx webpack serve
```

This will bundle the project files and open a development server at http://localhost:8080.


## Deployment
The project is deployed to GitHub Pages. To deploy your own version of the project, follow these steps:
1. Make sure you have completed the setup and committed all your changes.
2. Create a new branch for deployment:
```bash
git branch gh-pages
git checkout gh-pages
```

3. Bundle the project for production:
```bash
npx webpack
```

4. Deploy the `dist` directory to GitHub pages:
```bash
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
```

5. Switch back to the main brach:
```bash
git checkout main
```

6. Set the source branch for GitHub Pages to `gh-pages` in your repository settings.


## Future Improvements

- **Enhanced Design** : Improve visual styling.
- **Menu Details** : Add detailed information for reach menu item, including images and descriptions.
- **Contact Form**: Implement a contact form that allows users to send messages directly to the restaurant.
- **Search Functionality**: Add a search bar to allow users to search for menu items.
- **Local Storage**: Implement local storage to persist user interactions or selections.
- **Backend Integration**: Integrate a backend to handle contact form submissions and store menu data dynamically.



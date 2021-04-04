# 2020-04-btc-agile-sw-online-proyecto

<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/githubagilesoftware.jpg" >	
</p>

## Workflow

```
Forkea el proyecto y trabaja en tu rama.
Commitea de vez en cuando las 'features' que vayas desarrollando.
Una vez lo creas necesario, haz un 'pull request' a la rama Master.
Avísanos por el slack del curso.
```

## Information

```sh
Proyect name : 'agile-proyect'
```

```
Description: Password generator/validator. From the interface, it allows you to generate passwords between 6 and 16 characters, including uppercase, lowercase and numbers, according to the user's choice. However, the code is prepared (including tests) to add special characters.

The application also allows to validate the strength of a given password, relying on the zxcvbn library. It offers suggestions with 5 levels of validation.
```

```sh
Student: 'Antonio Cebrián Mesa'
```

## Instalation

|                   **AKA** | _URL_                                                                                               |
| ------------------------: | --------------------------------------------------------------------------------------------------- |
|        Visual Studio Code | https://code.visualstudio.com/                                                                      |
|               Jest Runner | https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner                    |
|                   Node.js | https://nodejs.org/en/                                                                              |
|                     React | https://reactjs.org/                                                                                |
|                     BABEL | https://babeljs.io/docs/en/babel-preset-react<BR>https://babeljs.io/docs/en/babel-preset-typescript |
|                Typescript | https://www.typescriptlang.org/docs/handbook/react.html                                             |
|                      JEST | https://jestjs.io/es-ES/docs/next/tutorial-react                                                    |
|                   Cypress | https://www.cypress.io/<BR>https://github.com/cypress-io/cypress/tree/master/npm/react              |
|              Font Awesome | https://fontawesome.com/                                                                            |
|   react-copy-to-clipboard | https://www.npmjs.com/package/react-copy-to-clipboard                                               |
| Docker Desktop on Windows | https://docs.docker.com/docker-for-windows/install/                                                 |

<BR>

## Versions

| **AKA**                   | _Version_                                          |
| ------------------------- | -------------------------------------------------- |
| Visual Studio Code        | 1.55                                               |
| Jest Runner               | 0.4.31                                             |
| Node.js                   | 15.15.5                                            |
| React                     | 17.0.2                                             |
| BABEL                     | preset-react: 7.13.13<BR>preset-typescript: 7.13.0 |
| Typescript                | 4.2.3                                              |
| JEST                      | 26.0.22                                            |
| Cypress                   | 6.8.0                                              |
| Font Awesome              | 5.15.3                                             |
| react-copy-to-clipboard   | 5.0.3                                              |
| Docker Desktop on Windows | 20.10.5                                            |

<BR>

## Command Line (TLDR)

```json
Through the package.json file.

{
  "name": "agile-proyect",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.35",
    "@fortawesome/free-solid-svg-icons": "^5.15.3",
    "@fortawesome/react-fontawesome": "^0.1.14",
    "@testing-library/jest-dom": "^5.11.10",
    "@testing-library/user-event": "^12.8.3",
    "@types/jest": "^26.0.22",
    "@types/node": "^14.14.37",
    "@types/react": "^17.0.3",
    "@types/react-dom": "^17.0.3",
    "react": "^17.0.2",
    "react-copy-to-clipboard": "^5.0.3",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react-test-renderer": "^17.0.2",
    "typescript": "^4.2.3",
    "web-vitals": "^1.1.1",
    "zxcvbn": "^4.4.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "j-w": "jest --watchAll",
    "c-run": "cypress run",
    "c-open": "cypress open"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/preset-react": "^7.13.13",
    "@babel/preset-typescript": "^7.13.0",
    "@cypress/react": "^4.16.4",
    "@cypress/webpack-dev-server": "^1.1.0",
    "@testing-library/react": "^11.2.6",
    "cypress": "^6.8.0"
  }
}

Delete the 'node_modules' directory and the 'package-lock.json' file from your application.

Then run the commands:
> 'npm install'
> 'npm update'
```

```sh
Installation and configuration in a new project

# set up a new or existing npm package
    npm init -y react-app ./agile-proyect

# include fontawesome icons in the proyect
    npm i --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/react-fontawesome

# Copy to clipboard React component
    npm install react-copy-to-clipboard

# Install the stable version of the react-router library
    npm install react-router-dom@5

# Install Jest library for react
    npm install --save-dev @testing-library/react
    npm install --dev react-test-renderer

# Install babel
    npm install --save-dev @babel/preset-react
    npm install --save-dev @babel/preset-typescript

# Install typescript
    npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# Add the tsconfig.json
    npx tsc --init

# Install the react dependencies
    npm install react react-dom @types/react @types/react-dom

# Install cypress
    npm install --save-dev cypress @cypress/react cypress-react-unit-test

# delete webpack
    > delete webpack form package.json
    > delete package-lock.json and /node_modules
    > run command: npm install

# Add this to tsconfig.json to make sure TypeScript understands Cypress
{
    "compilerOptions": {
      "types": ["cypress"]
    }
}
```

```docker
Generate docker container

# Create docker image
	docker build --tag ch3ssmaster/agile .

# Check docker image
	docker images

# Run container
    docker run --publish 3000:3000 agile

# List containers
    docker ps

# Upload container to Hub
    docker login
    docker push ch3ssmaster/agile:latest
```

```docker
Run the proyect

1. From docker container

# Download the container from Hub
    docker pull ch3ssmaster/agile

# Run docker container
    docker run -d -p 3000:3000 agile

# Open your favourite navigator and type the URL:
    http://localhost:3000/

2. From npm
    npm start
```

```
Run the tests

# JEST
    npm run j-w

# Cypress (shell mode)
    npm run c-run

# Cypress (navigator mode)
    npm run c-open
```

## SOLID Principles

|       Principle       |                                             File                                              |
| -------------------: | :------------------------------------------------------------------------------------------- |
| Single-Responsibility | CheckSelection.tsx<br>Validate.tsx<br>SetAlertValues.js<br>RandomPassword.tsx<br>Validate.tsx |
|      Open-closed      |                                      CheckSelection.tsx                                       |
<br>

## Patterns

| Patrón                | Fichero                   | Método           |
| :-------------------- | :------------------------ | :--------------- |
| Controlled Components | PasswordLengthSelector.js | PasswordLenght() |
| React Hooks           | PasswordLengthSelector.js | PasswordLenght() |
| Iterator              | RandomPassword.tsx        | password()       |
| Mediator              | App.js                    | App()            |
| Strategy              | Validate.tsx              | validate()       |
| Facade                | CopyToClipboard.js        | CopyText()       |

<br>

## Refactors

| Refactor | Fichero | Método |
| :------ | :----- | :---- |
|   Extract Method    |   RandomPassword.tsx   |  checkSelection()<br>validate()   |
|   Substitute Algorithm    |   CheckPassword.js   |  CheckPassword()   |
|   Replace Array with Object    |   RandomPassword.tsx   |  password()   |
<br>
## Notas

```
Ponga aquí cualquier tipo de mensaje necesario.
```

# Node.js Boilerplate

A Node.js base project with ES6 syntax support using babel

### Prerequisites

This project use Node.js, so you need to have it installed locally, follow [this steps](https://nodejs.org/en/download/package-manager/).
Also npm is required, in order to install it follow [this guide](https://docs.npmjs.com/getting-started/installing-node).

## Getting Started

Clone this repository and install npm project dependencies
```
npm install
```

## Running the tests

You can run all Mocha test using this command:
```
npm run test
```

Ther's a possibility to run tests on files' changed, usefull during development
```
npm run test:watch
```

## Build

Build the code in a runnable ES5 format
```
npm run build
```

You can watch the files' changes and automatically re-build it during the deployment
```
npm run build:watch
```

# Code style

A `.editorconfig` configuration file and `.eslint` files are provided, you can also run linter using this command:
```
npm run lint
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

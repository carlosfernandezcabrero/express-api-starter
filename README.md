# Express API Starter

This template is a fork. Link to the original template by user w3cj: [Link](https://github.com/w3cj/express-api-starter)

Differences with the original template:

* Add editorconfig file.
* Add compression middleware.
* Replace nodemon with the parameter of node --watch.
* Add Prettier config file.
* Simplify eslint configuration.
* Use ECMAScript Modules.

Includes API Server utilities:

* [compression](https://www.npmjs.com/package/compression)
  * Node.js compression middleware
* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
* [cors](https://www.npmjs.com/package/cors)
  * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Development utilities:

* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [jest](https://www.npmjs.com/package/jest)
  * Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.

## Setup

``` bash
npm install
```

## Lint

``` bash
npm run lint
```

## Test

``` bash
npm test
```

## Development

``` bash
npm run dev
```

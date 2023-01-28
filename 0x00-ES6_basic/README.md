# ECMAScript 6 - Basic
Project done during ALX Software Engineering Scholarship Programme 2022 at Alx Students Education. It aims to learn about what ES6 is, new features in ES6, blocked scoped variables, string templating in ES6, etc.
<img src="https://media.sitepen.com/blog-images/2016/04/es6_symbols_header-1-1024x672.png" width="600px"/>

## Resources
Read or watch:

* [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

## Configuration
- curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
- sudo bash nodesource_setup.sh
- sudo apt install nodejs -y

Install Jest, Babel, and ESLint in your project directory

- npm install --save-dev jest
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- npm install --save-dev eslint

## Configuration files
<details><summary>package.json</summary>
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
</details>

<details><summary>babel.config.js</summary>module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};</details>

<details><summary>.eslintrc.js</summary>module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};</details>

run `npm install`

## Technologies
* JavaScript transpiled using babel.js
* Tested on Ubuntu 18.04 LTS
* nodejs -v(v12.22.12), npm -v(6.14.16)

## Files
All of the following files are programs written in js:

|Filename| Description|
|-------|---------------|
|`0-constants.js`|Modify: * function taskFirst to instantiate variables using const * function taskNext to instantiate variables using let|
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||

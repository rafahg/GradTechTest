
# **GRAD TECH TEST**

[PROJECT SETUP](#setup)
| [CHALLENGE](#challenge)
- - -
<br>

## SETUP
  - Clone this repository.
  - cd GradTechTest.
  - install yarn or npm globally 

``` 
  run `yarn` or `npm install`

```
 - To setup Jest for testing: 

 Using yarn:
 
 ```
 yarn add --dev jest

 ````

Using npm:

```
npm install --save-dev jest 

```

In the package.json file within the project root folder, add or substitute the following:

```
{
  "scripts": {
    "test": "jest"
  }
} 
```
To run the test, depending on if you have installed yarn or npm

```
$ npm test

```
or 

```
$ yarn test 

``` 

- To setupt EsLint 

In the project root: 

```
npm install eslint --save-dev

# or

yarn add eslint --dev 

```

To setup a configuration file for Eslint:

```
$ npx eslint --init 

```

After is done: 

```
$ npx eslint gradTest.test.js 

```
<br>

Links to Jest and EsLint documentation for a more detailed explanation:

[Jest Documentation](https://jestjs.io/docs/en/getting-started)
| [EsLint Documentation](https://eslint.org/docs/user-guide/getting-started)
- - -

## CHALLENGE

Write some code to implement the function `createMenuData`

Use the test runner `jest` to run the `gradTest.test.js` 

I have included my approach to the challenge in this separeted Readme file.

 [Challenge Approach]()

### TIPS

The data set in the test ends at parent 4, but imagine any number of parents and children could be passed to this function.

When the test passes clean up your code.
It's worth spending time formatting and simplifing thins.
It's more important that humans can read your code than computers.
Software tools like `eslint` do some amazing things 🕶

[Back to the top](#setup)

# Front End Capstone Project
Developed by Aharon Kolatch, Cody Jue, Will Chang and Claire Sujin Kim

## Intro
We developed this project as a group over the course of 9 days during the Hack Reactor program.
We were all worked on our own individual widget for the site.

- **Aharon** - Product Overview
- **Claire** - Related Items and Comparison	
- **Aharon** - Questions and Answers
- **Will** - Ratings and Reviews

We were given a business document which outlined a strict set of requirements that guided our implementation, funcitonality, and styling.
That document can be found [here](https://docs.google.com/document/d/1KAqduzY8ae3DYrSoCL1i23qHe95zJRYFulqMk-sGLWY/edit#).

## Technologies
For this project, we used the following languages and frameworks in our implementation
```bash
Javascript
React
Redux
npm
```

## Installation Guidelines
  1. clone this repo to your local machine
  2. run ```npm install``` in the 'root' directory
  2. run ```npm run build-prod```
  3. run ```npm run build-dev```
  4. run ```npm start```
  5. find the site on ***[http://localhost:3333](http://localhost:3333/)***

## Check out
  **Upgrading from Enzyme 2.x or React < 16**
    - To get started with enzyme, you can simply install it via npm. You will need to install enzyme along with an Adapter corresponding to the version of react

**We are going to use "react": "^17.0.1"**

    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';

    Enzyme.configure({ adapter: new Adapter() });


    *** more info: https://www.npmjs.com/package/enzyme

  **babel compiler**
  Instruction says you should install it globally.
  if installing in local folder doesn't work, try to install
  "npm install --global create-babelrc"

## **Useful resource**
- **esLint** :https://eslint.org/docs/user-guide/command-line-interface

_Have a great day!_

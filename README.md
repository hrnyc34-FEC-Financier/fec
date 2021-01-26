# System Design Capstone

# Guidelines to start
  **Installation**
  1. npm install
  2. npm run build-prod
  3. npm run build-dev
  4. npm start

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
-

_Have a great day guys!_
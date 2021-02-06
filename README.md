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
- Javascript
- React
- Redux
```
## Deployment
We deployed our site on AWS, which can be viewed **here**

## Installation Guidelines
  1. clone this repo to your local machine
  2. run ```npm install``` in the 'root' directory
  2. run ```npm run build-prod```
  3. run ```npm run build-dev```
  4. run ```npm start```
  5. find the site on ***localhost:3333***
  
# Components
**Product Overview**
This feature gives client the ability to filter through all styles available for a product. Client can click through a gallery of images for a given style. Client can add products by quantity and size. This was the top-most module on the Product Detail page. The functionality contained within this module can be divided into several pieces:
1. Image gallery
2. Product information
3. Style selector
4. Add to cart

**Related Items and Comparison**
The Related Products module was implemented to provide clients with a carousel of related products from the Product Overview. The carousel allows clients to navigate to related products and compare the given characteristics of each product.
The Your Outfit List module below the Related Products carousel allows clients to select a current item and add it to their own list to group together as an outfit.
1. Carousel with related Product Cards
2. Navigating to the related products
3. Comparison Modal
4. Carousel to add to Outfit

**Questions & Answers**
The Questions & Answers module was implemented to allow asking and answering of questions for a product selected. The functionality contained within this module can be divided into several pieces:
1. View questions
2. Search for a question
3. Asking a question
4. Answering a question

**Ratings and Reviews**
The Ratings & Reviews module was implemented to allow viewing and submission of reviews for a product selected. The functionality contained within this module can be divided into several pieces:
1. Write new review
2. Reviews List
3. Sorting
4. Rating,Product Breakdown

## **Useful resource**
- **esLint** : https://eslint.org/docs/user-guide/command-line-interface
- **Enzyme** : https://www.npmjs.com/package/enzyme

_Have a great day!_

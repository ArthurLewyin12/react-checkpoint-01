# React Checkpoint 01

This is my React Checkpoint 01 (Front End Development - React JS Fundamentals). It's a product card for a pair of headphones, made with small React components, JSX and react-bootstrap.

## Files

- `src/product.js`: the product object (name, price, description and image path), exported with `export default`
- `src/Name.js`, `src/Price.js`, `src/Description.js`, `src/Image.js`: one component for each piece of information. Each one imports the product object and returns its part.
- `src/App.js`: the root component, which puts the four components together in a react-bootstrap `Card`
- `src/App.css`: my styling
- `public/images/`: the product image and the smiley shown next to the greeting

## The greeting

Above the `App` component there is a variable:

```js
const firstName = "Cedric";
```

Below the card, the app shows "Hello, Cedric". If the variable is empty (`""`), it shows "Hello, there!" instead. The smiley image is only displayed when a first name is provided (`{firstName && <img ... />}`).

## Styling

- a soft pink to blue gradient in the background
- a card with rounded corners and a shadow that goes up a little when you hover it
- a red "New" badge on the image
- the price in pink next to an "Add to cart" button
- the greeting in a white bubble under the card

## How to run it

```bash
npm install
npm start
```

Then open http://localhost:3000 in the browser.

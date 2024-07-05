# Simple Store

A simple store application built with Vue.js that displays products in a table view, allows adding, editing, and deleting products. The project uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data.

## Features

- Display products in a table format.
- Pagination for products.
- Add new products.
- Edit existing products.
- Delete products with a confirmation modal.

## Project Structure

```bash

Simple-Store/
├── node_modules/
├── src/
│   ├── assets/
│       ├── style.css
│   ├── views/
│   │   ├── AddProduct.vue
│   │   ├── EditProduct.vue
│   │   ├── Products.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
├── .gitignore
├── package.json
├── readme.md
└── vue.config.js

```

## Installation

1- clone the repository :

    `git clone https://github.com/Soliman72/Simple-Store.git`

2- Navigate to the project directory:

    `cd Simple-Store`

3- Install dependencies:

    `npm install`

4- and run the project

    `npm run dev`

## Components 

### Products.vue

    Displays the list of products in a table format.
    Provides pagination for navigating through pages of products.
    Includes buttons for adding, editing, and deleting products.

### AddProduct.vue

    Form for adding a new product.
    Submits the new product to the Fake Store API.

### EditProduct.vue

    Form for editing an existing product.
    Loads the product data into the form fields.
    Submits the updated product data to the Fake Store API.

### API
    
    This project uses the Fake Store API to fetch product data.

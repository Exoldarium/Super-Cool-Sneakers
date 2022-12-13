# Sneakers Product Page

A product page made with React
[Website]()

## Description

I made this small product page in order to practice React.js. I decided to make something that I could re-use
in the future especially if I decide to make a full website. All of the images were taken from [Frontendmentor](https://www.frontendmentor.io/). It's a single page application and i only focus on adding the functionality to it. The user can browse through images, open an image gallery and add and remove product from the cart. The page is using responsive design, so all of the functionality is present on the mobile small-screen devices as well.

## Things I learned

Originally, I decided to import all of my data through data.js file but when i realized that I will have to move data between components and had to change my approach in order to learn how props could be used to accomplish this. 

Most of the menus were originally closed on button click but I realized that
the same functionality could be accomplished through different state hooks and so I learned how to create my own hook that closes menus on clicking outside of the menu element and I am reusing for each menu that is present in the app.

I also decided to go with [Styled-components](https://styled-components.com/) instead of using a CSS file. It gives me much better overview of my CSS and I can also componentize most of my classes.

## To-do's

-Scale the application, adding more products.

-Create a homepage and an account page.

-Crete a way to checkout the product

## Dependencies

[Create React App](https://create-react-app.dev/)
```bash
npx create-react-app my-app
cd my-app
npm run start
```
Styled [Styled-components](https://styled-components.com/)
```bash
npm install --save styled-components
```
Images from [Frontendmentor](https://www.frontendmentor.io/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
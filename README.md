# CSC301 A1 - Punk Shop

A web based shop application for the browsing and purchasing of digital avatars.

## Setup

### Back End

To run a1-backend locally:
```
$ git clone https://github.com/CSC301A1-Pairs48/a1-server.git
$ npm install 
$ npm run dev
```

Local server is now accessible through http://localhost:5000

To run the unit tests for a1-backend:

```html
$ npm test
```

Whenever there is a commit to the master branch, it automatically triggers a build + deploy on Vercel’s end. Changes are reflected shortly on the production server.

A demo for the server is deployed here: https://a1-server-a1-48.vercel.app

### Front End

To run a1-frontend locally:
```
$ git clone https://github.com/CSC301A1-Pairs48/a1-frontend.git
$ npm Install
$ npm run dev
```

Local front end is now accessible through http://localhost:3000. The backend server must also be running locally first or else an error will be thrown saying it can not fetch data.

Whenever there is a commit to the master branch, it automatically triggers a build + deploy on Vercel’s end. Changes are reflected shortly on the production server. The front end platform polls data from the deployed back end platform to be displayed..

A demo for the front end is deployed here: https://a1-frontend.vercel.app

## User Usage Instructions

The shop page (/shop or /) features a list of digital avatars polled from the server for sale. Clicking on a product brings up a modal detailing the avatar's information with a button for adding that product to the cart. 

The user can access the cart page (/cart) by clicking on the cart button in the header bar. In the cart page, the user can see all the products that they have selected for checkout on the left. If they wish to make any changes to their cart, they can adjust the product quantity or remove the product altogether by clicking on the respective buttons on each product card. The right panel shows the total price that the user is expected to pay, including tax and discounts. The user can type in and apply one of the two discounts (0xv439c3d or 0xl23k4jf34) listed in the discounts tooltip (the … icon). Clicking on the Submit Order button completes the order and takes the user to the order confirmation page.

All pages are responsive and can be viewed both on mobile and desktop. The UI scales automatically based on the width of the window.

## Collaborators

- Elson Liang
- Tom Kan


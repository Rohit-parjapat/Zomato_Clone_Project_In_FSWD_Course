# Zomato-Clone-FSWD-Project

This is a clone of the zomato website using MERN.

Babel is used to build the project

# API Documentation link

https://documenter.getpostman.com/view/22926215/2s8Yeixw1R

# => Documentation of Backend part of the site

Nodejs is used to made backend part of the site

## Dependencies used for the backend are listed below

    "aws-sdk": "^2.1230.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.1",
    "express-session": "^1.17.3",
    "helmet": "^6.0.0",
    "joi": "^17.6.2",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.6.3",
    "multer": "^1.4.5-lts.1",
    "passport": "^0.6.0",
    "passport-google-oauth2": "^0.2.0",
    "passport-jwt": "^4.0.0"

## Dev-Dependencies used for the backend are listed below

    "@babel/cli": "^7.19.3",
    "@babel/core": "^7.19.3",
    "@babel/node": "^7.19.1",
    "@babel/preset-env": "^7.19.3",
    "nodemon": "^2.0.20"

# Routes and Endpoints

# Users Routes

## /auth/signin

POST: Create a token for user

## /auth/signun

POST: Create a new user

## /user/

GET: Get authorized user information using bearer token

## /user/{id}

GET: Get public user information

## /user/update/{id}

PUT: Update Private user information using bearer token

# Menu Routes

## /menu/list/{id}

GET: Get menu information based on Id

## /menu/image/{id}

GET: Get menu image based id

# Order Routes

## /order/

GET: Get user order information using bearer token

# Restaurant Routes

## /restaurant?city={city}

GET: Get restaurant information based on city

## /restaurant/{id}

GET: Get restaurant information based on id

## /restaurant/search/:searchString

GET: Get restaurant information based on search string

## /restaurant/new

POST: Create new restaurant using bearer token (private route)

# Food Routes

## food/{id}

GET: Get food information based on id

## food/r/{id}

GET: Get food information based on restaurant id

## food/c/:category

GET: Get food information based on category

# Image Routes

Here we have to upload image on the server using s3 bucket
First we upload image on the s3 bucket and then upload the link on the server

## image/

POST: Upload image on the server through the s3 bucket

## image/{id}

GET: Get image based on id

# Review Routes

## review/{id}

GET: Get review based on id

# => Documentation of Frontend part of the site

## UI contains Four pages ->

Homepage: On localhost:3000/

GoogleAuthpage: On localhost:3000/google/:token

Restaurantpage: On localhost:3000/restaurant/{id}/overview

Checkoutpage: On localhost:3000/checkout/orders

# Different Dependencies used in client side are listed below

    "@headlessui/react": "^1.7.3",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.1.2",
    "classnames": "^2.3.2",
    "dayjs": "^1.11.5",
    "leaflet": "^1.9.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.4.0",
    "react-leaflet": "^4.1.0",
    "react-rating-stars-component": "^2.2.0",
    "react-redux": "^8.0.4",
    "react-router-dom": "^6.4.2",
    "react-scripts": "5.0.1",
    "react-simple-image-viewer": "^1.2.2",
    "redux": "^4.2.0",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.4.1",
    "swiper": "^8.4.3",
    "util": "^0.12.5",
    "web-vitals": "^2.1.4"

# Different Dev-Dependencies used in client side are listed below

    "autoprefixer": "^10.4.12",
    "postcss": "^8.4.17",
    "tailwindcss": "^3.1.8"

# Razorpay service is used for payment gateway

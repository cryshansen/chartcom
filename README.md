# chartcom
React TypeScript  Vite website system, coupled with a node.js server back end. Dynamic data based on images and json files to load. Can be coupled with a database backend. 

This simple site uses contact modal for all page engagement outside of the footer newsletter and the apothecary newsletter components. 

The site is intended to be used as a template to start with a basic niche market and showcase a sales front via the apothecary page. 


# React Image Gallery Site

This is a custom React-based image gallery project using a minimal Node.js and Webpack setup. It supports multiple image categories with a dynamic button interface to toggle content.

## 🚀 Features

- React + TypeScript support
- Manual Webpack configuration
- Dynamic category buttons
- Gallery layout using a shared `ImageGrid` component
- Masonry layout for studio views (e.g. `StudioGallery`)
- Modular file structure

## 🛠 Tech Stack

- React / ReactDOM
- TypeScript
- Webpack + Babel
- Bootstrap (for styling)
- Optional: Sass for custom styling



# Initialize project
npm init -y

# Install React + React DOM
npm install react react-dom

# TypeScript support
npm install --save-dev typescript @types/react @types/react-dom

# Webpack and loaders for bundling
npm install --save-dev webpack webpack-cli webpack-dev-server

# Babel for JSX/ES6+ transpiling
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

# Loaders and plugins
npm install --save-dev html-webpack-plugin css-loader style-loader

# For image and asset handling
npm install --save-dev file-loader

# Optional: Sass support
npm install --save-dev sass sass-loader

# If using React Router (if applicable)
npm install react-router-dom @types/react-router-dom


# ImageMagick 
install ImageMagick to run against photos to resize for website and placements.

navigate to the image folder and run
mkdir 576_clean

/* uses ImageMagick installation to manage image sizing */
mogrify -path 576_clean -resize 576x576 -format jpg *.jpg

# Dependencies


npm install --save-dev nodemon  /*allows rebuild as change files*/
npm install express image-size /* allows to manage sizing images or reading image size tbd*/

npm install cors
npm install node-cron

# Cron Job creates a booking.json per day at 00:01AM
The cron is required for the fakeStudioBookings.js file that generates dates for demo in the calendar. It can be changed to hook to a database instead. this is for breavity. 

Initialize the bookings.json with today forward a mont days 
in server.cjs uncomment //fakeStudioBooking(); // <-- Run immediately Init
in fakeStudioBookings.js 
comment out  -->  module.exports = updateBookings;
uncomment  -->//module.exports = updateInitialBookings; 
in the server folder run terminal npm run dev



# Image Layout Galleries unused: Code to be removed in version 2 

import MasonryLayout from './pages/MasonLayout'
<Route path="/masonry" element={<MasonryLayout />} />
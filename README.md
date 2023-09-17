# UserNameCard
## Table of Content
- [OverView](#overview)
- [Challenge](#challenge)
- [Tools Used](#tools-used)
- [Challenge and Solution](#challenge-and-solution)


## OverView 
This is a simple web application that takes user input for first name and last name, and upon submission, displays a welcome message in the sidebar. 
The purpose of this project is to demonstrate basic interaction with HTML forms and JavaScript event handling.

## Challenge 
The main challenge in this project was ensuring that the JavaScript code executed correctly after the HTML document was fully loaded.
This was achieved by wrapping the code in a `DOMContentLoaded` event listener.

## Tools Used
- HTML
- CSS (`styles.css`)
- JavaScript (`index.js`)

## Challenge and Solution
- **Challenge:** The JavaScript code was initially executed before the HTML was 
fully loaded, causing errors when trying to access HTML elements.
- **Solution:** The code was wrapped in a `DOMContentLoaded` event listener to ensure that it only runs when the HTML document is ready.
This resolved the issue of accessing elements before they were available.




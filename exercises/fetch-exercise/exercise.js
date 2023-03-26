/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/

//Get DOM elements
const lengua = document.querySelector('span');
const greetingText = document.querySelector('p');

fetchGreeting();

async function fetchGreeting() {
  try {
    const response = await fetch('https://www.greetingsapi.com/random');
    const greeting = await response.json();
    sayHello(greeting);
  } catch (error) {
    console.log(error);
  }
}

function sayHello(greeting) {
  const greetingObj = greeting;
  lengua.innerText = greetingObj.language;
  greetingText.innerText = greetingObj.greeting;
}

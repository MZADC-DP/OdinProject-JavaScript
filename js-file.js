// Get the container element
var container = document.getElementById("container");

// Create a <p> element with red text
var pElement = document.createElement("p");
pElement.style.color = "red";
pElement.textContent = "Hey I'm red!";

// Create an <h3> element with blue text
var h3Element = document.createElement("h3");
h3Element.style.color = "blue";
h3Element.textContent = "I'm a blue h3!";

// Create a <div> element with black border and pink background
var divElement = document.createElement("div");
divElement.style.border = "1px solid black";
divElement.style.backgroundColor = "pink";

// Create an <h1> element inside the div with text
var h1Element = document.createElement("h1");
h1Element.textContent = "I'm in a div";

// Create a <p> element inside the div with text
var pElementInsideDiv = document.createElement("p");
pElementInsideDiv.textContent = "ME TOO!";

// Append the <h1> and <p> elements to the <div>
divElement.appendChild(h1Element);
divElement.appendChild(pElementInsideDiv);

// Append the <p> and <h3> elements to the container
container.appendChild(pElement);
container.appendChild(h3Element);

// Append the <div> element to the container
container.appendChild(divElement);

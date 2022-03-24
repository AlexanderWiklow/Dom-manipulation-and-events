const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = "Hey i'm red!";

container.appendChild(content);



document.querySelector('p').style.color = "red";

// ===================================================


const underTitle = document.createElement('h3');

underTitle.textContent = "I'm a blue h3!";

underTitle.style.color = "blue";



container.appendChild(underTitle);

// ===================================================

const divContent = document.createElement('div');

// divContent.textContent = "div content";

divContent.style.border = "0.2rem solid black";
divContent.style.backgroundColor = "pink";
// divContent.setAttribute(
//     'background: pink'
// )

container.appendChild(divContent);

// ===================================================

const childContent = document.createElement('h1');
const childContentParagraph = document.createElement('p');
childContent.textContent = "im a child";
childContentParagraph.textContent = "ME TOO!";

divContent.appendChild(childContent);
divContent.appendChild(childContentParagraph);





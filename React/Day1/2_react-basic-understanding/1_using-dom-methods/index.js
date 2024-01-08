const appElement = document.getElementById('app');

const hOneElement = document.createElement('h1');
hOneElement.textContent = 'Hello World';
hOneElement.className = 'orange';

appElement.appendChild(hOneElement);
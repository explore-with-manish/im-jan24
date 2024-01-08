// const appElement = document.getElementById('app');

// const hOneElement = document.createElement('h1');
// hOneElement.textContent = 'Hello World';
// hOneElement.className = 'orange';

// appElement.appendChild(hOneElement);

// ---------------------------------------
const myReactElement = React.createElement('h1', {className: 'orange'}, 'Hello World from React');
ReactDOM.render(myReactElement, document.getElementById('app'));
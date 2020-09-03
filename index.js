// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS basics</h1>`;
var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x);
}
console.log(x);
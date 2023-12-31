// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// WAP to get array of names from given sample array

const sampleArray = [
  { id: 1, name: 'Hello' },
  { id: 2, name: 'World' },
  { id: 3, name: 'Global' },
];

function getNameArray() {
  let nameArray = [];
  sampleArray.filter((item) => {
    if (item.name !== 'Abhay') {
      nameArray = [...nameArray, item];
    }
  });
  return nameArray;
}

console.log(getNameArray(sampleArray));

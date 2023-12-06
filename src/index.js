import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);

function componenent() {

    const element = document.createElement('p');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    
    element.appendChild(myIcon)

    console.log(Data);
    console.log(Notes);

    return element;

}

document.body.appendChild(componenent());

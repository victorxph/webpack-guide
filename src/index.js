import _ from 'lodash';
import printMe from './print.js';

function componenent() {

    const element = document.createElement('p');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;

}

document.body.appendChild(componenent());
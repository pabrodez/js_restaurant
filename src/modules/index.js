// TODO: change menu items from <div> to <article>

import head from './header.js';
import foot from './footer.js';
import home from './homeSection.js';
import about from './aboutSection.js';
import menu from './menuSection.js';
import styles from '../styles/pre.scss';

const content = document.querySelector('#content');

// header
content.appendChild(head());

// wrapper for content of tabs
let mainSection = document.createElement('section');
mainSection.setAttribute('id', 'main');
content.appendChild(mainSection);
mainSection.appendChild(home()); // set home as default
window.addEventListener('scroll', () => {
  if ( window.pageYOffset >= (0.7 * document.querySelector('#header').offsetHeight) ) {
    document.querySelector('nav').classList.add('visible');
    document.querySelector('#header h1').classList.add('translateX');
    document.querySelector('#header #arrow').style.display = "none";
  } else {
    document.querySelector('nav').classList.remove('visible');
    document.querySelector('#header h1').classList.remove('translateX');
    document.querySelector('#header #arrow').style.display = "block";
  }
});
// add listeners to tabs
document.querySelector('#menu-link').addEventListener('click', () => {
  if ( mainSection.hasChildNodes() ) {
    mainSection.removeChild(mainSection.childNodes[0]);
    mainSection.appendChild(menu());
  } else {
    mainSection.appendChild(menu());
  }
})
document.querySelector('#about-link').addEventListener('click', () => {
  if ( mainSection.hasChildNodes() ) {
    mainSection.removeChild(mainSection.childNodes[0]);
    mainSection.appendChild(about());
  } else {
    mainSection.appendChild(about());
  }
});
document.querySelector('#home-link').addEventListener('click', () => {
  if ( mainSection.hasChildNodes() ) {
    mainSection.removeChild(mainSection.childNodes[0]);
    mainSection.appendChild(home());
  } else {
    mainSection.appendChild(home());
  }
});
// footer
content.appendChild(foot());
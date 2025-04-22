// import './style.css'
import {dark} from './mainDark';
import {toggleTheme, initItem} from './modeShem';

window.toggleTheme = toggleTheme;
initItem();

dark(document.querySelector('#app'));


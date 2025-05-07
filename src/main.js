// import './style.css'
import {dark} from './mainDark';
import {home} from '../page/home'
import {toggleTheme, initItem} from './modeShem';

window.toggleTheme = toggleTheme;
initItem();

// dark(document.querySelector('#app'));
home(document.getElementById('app'));



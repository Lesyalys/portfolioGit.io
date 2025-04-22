import frame1 from '/public/img/Frame.png';
import frame2 from '/public/img/Frame2.png';
import styleCSS from '/src/style.css';
import lightCSS from './src/light.css';

export function shem() {
    const mode = document.getElementById('mode');
    const logo = document.getElementById('logo');

    if (mode && logo) {
        const currentStyle = mode.getAttribute('href');
        
        if (currentStyle.includes('style.css')) {
            mode.setAttribute('href', lightCSS);
            logo.setAttribute('src', frame2);
        } else {
            mode.setAttribute('href', styleCSS);
            logo.setAttribute('src', frame1);
        }
    }
}
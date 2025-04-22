import frame1 from '/public/img/Frame.png';
import frame2 from '/public/img/Frame2.png';
import '/src/style.css';
import '/src/light.css';

export function shem() {
    const mode = document.getElementById('mode');
    const logo = document.getElementById('logo');

    if (mode && logo) {
        const currentStyle = mode.getAttribute('href');
        
        if (currentStyle.includes('style.css')) {
            mode.setAttribute('href', 'src/light.css');
            logo.setAttribute('src', frame2);
        } else {
            mode.setAttribute('href', 'src/style.css');
            logo.setAttribute('src', frame1);
        }
    }
}
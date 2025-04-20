export function shem(){
        const mode = document.getElementById('mode');
        const logo = document.getElementById('logo');

        if (mode){
            const style = mode.getAttribute('href');
            if (style === '/portfolioGit.io/src/style.css'){
                mode.setAttribute('href','/portfolioGit.io/src/light.css');
                logo.setAttribute('src','./img/Frame2.png');
            }
            else if (style === '/portfolioGit.io/src/light.css'){
                mode.setAttribute('href','/portfolioGit.io/src/style.css');
                logo.setAttribute('src','./img/Frame.png');
            }
        }
}
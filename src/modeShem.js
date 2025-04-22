export function shem(){
        const mode = document.getElementById('mode');
        const logo = document.getElementById('logo');

        if (mode){
            const style = mode.getAttribute('href');
            if (style === '/portfolioGit.io/src/style.css'){
                console.log('dark')
                mode.setAttribute('href','/portfolioGit.io/src/light.css');
                logo.setAttribute('src','./img/Frame2.png');
            }
            else if (style === '/portfolioGit.io/src/light.css'){
                console.log('light')
                mode.setAttribute('href','/portfolioGit.io/src/style.css');
                logo.setAttribute('src','./img/Frame.png');
            }
        }
}
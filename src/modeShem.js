export function shem(){
        const mode = document.getElementById('mode');
        const logo = document.getElementById('logo');

        if (mode){
            const style = mode.getAttribute('href');
            if (style === './src/style.css'){
                console.log('dark')
                mode.setAttribute('href','./src/light.css');
                logo.setAttribute('src','./img/Frame2.png');
            }
            else if (style === './src/light.css'){
                console.log('light')
                mode.setAttribute('href','./src/style.css');
                logo.setAttribute('src','./img/Frame.png');
            }
        }
}
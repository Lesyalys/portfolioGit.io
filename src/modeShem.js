export function shem(){
    document.body.classList.toggle('dark-shem');
        //  const mode = document.getElementById('mode');
        const logo = document.getElementById('logo');
        const isDark = document.body.classList.contains('dark-shem');

        logo.src = isDark ? './img/Frame2.png' : './img/Frame.png';
        localStorage.setItem('theme',isDark ? 'dark' : 'light');

        const saveTheme = localStorage.getItem('theme');
        if (saveTheme === 'dark'){
            document.body.classList.add('dark-shem');
        }

        // if (mode){
        //     const style = mode.getAttribute('href');
        //     if (style === './src/style.css'){
        //         console.log('dark')
        //         mode.setAttribute('href','./src/light.css');
        //         logo.setAttribute('src','./img/Frame2.png');
        //     }
        //     else if (style === './src/light.css'){
        //         console.log('light')
        //         mode.setAttribute('href','./src/style.css');
        //         logo.setAttribute('src','./img/Frame.png');
        //     }
        // }
}
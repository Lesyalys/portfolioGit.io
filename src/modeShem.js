export function shem(element){
        element.body.classList.toggle('dark-shem');

        const mode = element.head.querySelector('#mode');
        console.log(mode)
        const logo = element.getElementById('logo');
        const isDark = element.body.classList.contains('dark-shem');

        logo.src = isDark ? './img/Frame2.png' : './img/Frame.png';
        // mode.setAttribute
        mode.href = isDark ? './src/style.css' : './src/light.css'
        localStorage.setItem('theme',isDark ? 'dark' : 'light');

        const saveTheme = localStorage.getItem('theme');
        if (saveTheme === 'dark'){
            element.body.classList.add('dark-shem');
        }
        else if (saveTheme === 'light'){
            element.body.classList.add('light-shem');
        }


}
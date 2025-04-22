export function shem(){
    document.addEventListener('DOMContentLoaded', function() {
        document.body.classList.toggle('dark-shem');
        const mode = document.getElementById('mode');
        console.log(mode)
        const logo = document.getElementById('logo');
        const isDark = document.body.classList.contains('dark-shem');

        logo.src = isDark ? './img/Frame2.png' : './img/Frame.png';
        // mode.setAttribute
        mode.href = isDark ? './src/style.css' : './src/light.css'
        localStorage.setItem('theme',isDark ? 'dark' : 'light');

        const saveTheme = localStorage.getItem('theme');
        if (saveTheme === 'dark'){
            document.body.classList.add('dark-shem');
        }
        else if (saveTheme === 'light'){
            document.body.classList.add('light-shem');
        }
    })


}
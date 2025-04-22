export function shem(){
    console.log( document.body)
        document.body.classList.toggle('dark-shem');
        
        const mode = document.head.querySelector('#mode');
        console.log(mode)
        const logo = document.getElementById('logo');
        const isDark = document.body.classList.contains('dark-shem');

        logo.src = isDark ? './img/Frame2.png' : './img/Frame.png';
        // mode.setAttribute
        mode.href = isDark ? '/portfolioGit.io/assets/index-CrcVQEFh.css' : '/portfolioGit.io/assets/index-CrcVQEFh.css'
        localStorage.setItem('theme',isDark ? 'dark' : 'light');

        const saveTheme = localStorage.getItem('theme');
        if (saveTheme === 'dark'){
            document.body.classList.add('dark-shem');
        }

}

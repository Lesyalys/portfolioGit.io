
export function toggleTheme() {
    const logo = document.getElementById('logo');
    const isDark = document.body.classList.toggle('light-shem');

    if (logo){
        logo.src = isDark ? './img/Frame2.png' : './img/Frame.png'
    }

    localStorage.setItem('theme',isDark ? 'dark' : 'light');
}

export function initItem() {
    const saveTheme = localStorage.getItem('theme');
    const logo = document.getElementById('logo');

    if (saveTheme === 'dark'){
        document.body.classList.add('dark-theme');
        if (logo) logo.src = './img/Frame2.png';
    }
    else {
        document.body.classList.add('light-theme');
        if (logo) logo.src = './img/Frame.png'
    }
}

document.addEventListener('DOMContentLoaded', initItem)


// export function shem(){
//     console.log( document.body)
//         document.body.classList.toggle('dark-shem');
        
//         const mode = document.head.querySelector('#mode');
//         console.log(mode)
//         const logo = document.getElementById('logo');
//         const isDark = document.body.classList.contains('dark-shem');

//         logo.src = isDark ? './img/Frame2.png' : './img/Frame.png';
//         // mode.setAttribute
//         mode.href = isDark ? '/portfolioGit.io/assets/index-CrcVQEFh.css' : '/portfolioGit.io/assets/index-CrcVQEFh.css'
//         localStorage.setItem('theme',isDark ? 'dark' : 'light');

//         const saveTheme = localStorage.getItem('theme');
//         if (saveTheme === 'dark'){
//             document.body.classList.add('dark-shem');
//         }

// }

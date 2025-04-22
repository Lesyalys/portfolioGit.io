export function shem() {
    const mode = document.getElementById('mode');
    const logo = document.getElementById('logo');
    
    // Переключаем тему
    document.body.classList.toggle('dark-shem');
    const isDark = document.body.classList.contains('dark-shem');
    
    // Устанавливаем соответствующие ресурсы
    logo.src = isDark ? './img/Frame2.png' : './img/Frame.png';
    mode.href = isDark ? './src/dark.css' : './src/light.css';
    
    // Сохраняем тему
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Функция для применения сохранённой темы при загрузке страницы
export function applySavedTheme() {
    const mode = document.getElementById('mode');
    const logo = document.getElementById('logo');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-shem');
        if (logo) logo.src = './img/Frame2.png';
        if (mode) mode.href = './src/dark.css';
    } else {
        document.body.classList.remove('dark-shem');
        if (logo) logo.src = './img/Frame.png';
        if (mode) mode.href = './src/light.css';
    }
}
/*// Theme toggle functionality
const toggleBtn = document.getElementById('theme-toggle-btn');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);        

toggleBtn.textContent = currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = 'Switch to Light Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = 'Switch to Dark Mode';
    }
});*/


    const toggle = document.getElementById('toggle');
    const body = document.body;

    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(currentTheme === 'dark' ? 'dark-mode' : 'light-mode');
    toggle.checked = currentTheme === 'dark'; // Set the toggle based on the saved theme

    // Toggle theme on change
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark'); // Save the theme preference
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light'); // Save the theme preference
        }
    });



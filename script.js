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



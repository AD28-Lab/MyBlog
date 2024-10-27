document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');

    function toggleDarkMode() {
        body.classList.toggle('light-mode');

    
        if (body.classList.contains('light-mode')) {
            modeIcon.textContent = '☀️'; // Ikon matahari untuk Light Mode
        } else {
            modeIcon.textContent = '🌙'; // Ikon bulan untuk Dark Mode
        }
    }

    toggleButton.addEventListener('click', toggleDarkMode);
});




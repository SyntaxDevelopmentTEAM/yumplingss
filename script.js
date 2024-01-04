// script.js
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    function switchPage(targetPage) {
        sections.forEach(section => {
            section.classList.remove('show');
        });

        links.forEach(link => {
            link.classList.remove('active');
        });

        document.getElementById(targetPage).classList.add('show');
        document.querySelector(`nav a[href="#${targetPage}"]`).classList.add('active');

        setTimeout(() => {
            history.pushState({}, '', targetPage);
        }, 500); // Adjust the delay as needed
    }

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href').substring(1);
            switchPage(targetPage);
        });
    });

    window.addEventListener('popstate', function (event) {
        const targetPage = location.pathname.substring(1) || 'index.html';
        switchPage(targetPage);
    });
});

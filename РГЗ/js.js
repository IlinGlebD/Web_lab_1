document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const scrollBtn = document.getElementById('scrollTopBtn');
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', function () {
        // Прозрачность хедера
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Поднятие кнопки над подвалом
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (footerRect.top < windowHeight) {
            scrollBtn.style.bottom = (windowHeight - footerRect.top + 20) + 'px';
        } else {
            scrollBtn.style.bottom = '15px';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.menu-link');
    const current = location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute('href') === current) {
        link.classList.add('active');
        }
    });
});

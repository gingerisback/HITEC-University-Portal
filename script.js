document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    form.onsubmit = (e) => {
        e.preventDefault();
        alert("Inquiry Sent Successfully!");
        form.reset();
    };

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            let target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        };
    });
});

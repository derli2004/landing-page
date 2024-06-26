document.addEventListener("DOMContentLoaded", function () {
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const sections = document.querySelectorAll(".about, .features, .courses, .testimonials, .contact");
    sections.forEach(section => {
        observer.observe(section);
    });
});

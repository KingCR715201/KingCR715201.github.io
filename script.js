document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('#what-are-ghg');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('visible');
            }
        });
    });

    observer.observe(section);
});




// Function to execute on scroll
function handleScroll() {
            const header = document.getElementById('header');
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
                // console.log("Hello");
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);


        document.addEventListener('DOMContentLoaded', function () {
    const introSection = document.querySelector('#intro');
    const whatAreGHGSection = document.querySelector('#what-are-ghg');
    const impactsSection = document.querySelector('#impacts');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    // Observe the sections for visibility
    observer.observe(introSection);
    observer.observe(whatAreGHGSection);
    observer.observe(impactsSection);
});

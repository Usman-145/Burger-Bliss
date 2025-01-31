// Select the burger element
const burger = document.querySelector('.burger-3d');

// Rotate the burger on mouse movement
burger.addEventListener('mousemove', (e) => {
    const rect = burger.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    burger.style.transform = `rotateY(${-x / 10}deg) rotateX(${y / 10}deg)`;
});

// Reset the rotation when the mouse leaves
burger.addEventListener('mouseleave', () => {
    burger.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// Smooth scrolling to 'Order Now' sections
const orderButtons = document.querySelectorAll('.order-now');

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Scroll smoothly to the order section
        document.querySelector('#order-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Trigger animations when elements come into view
const animateOnScroll = (element) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(element);
};

document.querySelectorAll('.deal-card').forEach(card => {
    animateOnScroll(card);
});

animateOnScroll(document.querySelector('.rate-list table'));

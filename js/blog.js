// Category Filtering
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-filters button');
    const posts = document.querySelectorAll('.post');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.dataset.category;

            // Show/hide posts based on category
            posts.forEach(post => {
                if (category === 'all') {
                    post.style.display = 'block';
                } else {
                    const postCategory = post.querySelector('.category').textContent.toLowerCase();
                    post.style.display = postCategory === category.toLowerCase() ? 'block' : 'none';
                }
            });
        });
    });
});

// Newsletter Subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send this to your server
        console.log('Newsletter subscription:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.post-image img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to posts on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.post').forEach(post => {
    observer.observe(post);
}); 
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page name
    // Add 'active' class based on the current page
    if (currentPage === 'index.html' || currentPage === '') {
        document.getElementById('home-nav')?.classList.add('active');
    } else if (currentPage === 'about.html') {
        document.getElementById('about-nav')?.classList.add('active');
    } else if (currentPage === 'contact.html') {
        document.getElementById('contact-nav')?.classList.add('active');
    }
}

// Load Header
fetch('header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load header.html');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('header').innerHTML = data;
        setActiveNav(); // Set active class after header is loaded
    })
    .catch(error => console.error('Error loading header:', error));

// Load Footer
fetch('footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load footer.html');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));


    // Load Header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Highlight the active nav item after header is loaded
            const currentPage = window.location.pathname.split('/').pop(); // Get the current page name
            if (currentPage === 'index.html' || currentPage === '') {
                document.getElementById('home-nav').classList.add('active');
                console.log('home-nav');
            } else if (currentPage === 'about.html') {
                document.getElementById('about-nav').classList.add('active');
                console.log('about-nav');
            } else if (currentPage === 'contact.html') {
                document.getElementById('contact-nav').classList.add('active');
                console.log('contact-nav');
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));

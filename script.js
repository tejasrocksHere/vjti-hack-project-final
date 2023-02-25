(function() {
    var navbarToggle = document.querySelector('#navbar-toggle');
    var navUL = document.querySelector('nav ul');
    var navbarDropdowns = document.querySelectorAll('.navbar-dropdown');
    var navLinks = document.querySelectorAll('nav ul li a:not(:only-child)');
    var html = document.querySelector('html');
  
    // open and close nav
    navbarToggle.addEventListener('click', function() {
      if (navUL.style.display === 'block') {
        navUL.style.display = 'none';
      } else {
        navUL.style.display = 'block';
      }
    });
  
    // Hamburger toggle
    navbarToggle.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  
    // If a link has a dropdown, add sub menu toggle.
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(e) {
        var navbarDropdown = this.nextElementSibling;
        navbarDropdown.style.display = navbarDropdown.style.display === 'block' ? 'none' : 'block';
        navbarDropdowns.forEach(function(otherNavbarDropdown) {
          if (otherNavbarDropdown !== navbarDropdown) {
            otherNavbarDropdown.style.display = 'none';
          }
        });
        e.stopPropagation();
      });
    });
  
    // Click outside the dropdown will remove the dropdown class
    html.addEventListener('click', function() {
      navbarDropdowns.forEach(function(navbarDropdown) {
        navbarDropdown.style.display = 'none';
      });
    });
  })();
//   const element = document.querySelector('.card');

  
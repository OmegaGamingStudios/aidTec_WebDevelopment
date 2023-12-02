document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const menu = document.querySelector('.menu');

    mobileMenuIcon.addEventListener('click', function () {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
});



  document.addEventListener('DOMContentLoaded', function () {
    const menuCategories = document.querySelectorAll('.menu-category');
    let currentIndex = 0;

    function showCategory(index) {
      menuCategories.forEach((category, i) => {
        category.style.display = i === index ? 'block' : 'none';
      });
    }

    function showNextCategory() {
      currentIndex = (currentIndex + 1) % menuCategories.length;
      showCategory(currentIndex);
    }

    function showPrevCategory() {
      currentIndex = (currentIndex - 1 + menuCategories.length) % menuCategories.length;
      showCategory(currentIndex);
    }

    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    nextBtn.addEventListener('click', function () {
      stopAutoSlide(); // Stop auto sliding when user clicks next manually
      showNextCategory();
    });

    prevBtn.addEventListener('click', function () {
      stopAutoSlide(); // Stop auto sliding when user clicks prev manually
      showPrevCategory();
    });

    // Automatic sliding - only for mobile view
    let autoSlideInterval;

    function startAutoSlide() {
      autoSlideInterval = setInterval(showNextCategory, 3000); // Change image every 3 seconds
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    // Check if the window width is less than or equal to 768px (mobile view)
    function handleResize() {
      if (window.innerWidth <= 768) {
        startAutoSlide(); // Start auto sliding for mobile view
        showCategory(currentIndex); // Show the current category
      } else {
        stopAutoSlide(); // Stop auto sliding for desktop view
        menuCategories.forEach(category => {
          category.style.display = 'block'; // Display all categories for desktop view
        });
      }
    }

    // Initial check on page load
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);
  });


  function scrollToMenu() {
    // Get the target element by its class name
    const menuSection = document.getElementsByClassName('our-menu-section')[0];

    // Scroll smoothly to the target element
    menuSection.scrollIntoView({ behavior: 'smooth' });
}


function scrollToContact() {
  // Get the target element by its class name
  const menuSection = document.getElementsByClassName('contact-details-section')[0];

  // Scroll smoothly to the target element
  menuSection.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', function () {
  const menuRows = document.querySelectorAll('.menu-row');

  menuRows.forEach(function (row) {
      row.addEventListener('click', function () {
          this.classList.toggle('expanded');
      });
  });
});

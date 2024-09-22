const mainWrapper = document.getElementById("main-wrapper");
  
const menuIcon = document.querySelector('.menu-icon');

const menuButton = document.querySelectorAll('.menu-buttons');

const header = document.getElementById('main-header');


    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('active'); // Toggle 'active' class on the menu icon
        mainWrapper.classList.toggle('active'); // Toggle 'active' class on the main wrapper
        mainWrapper.classList.toggle('menu-height'); // Toggle 'active' class on the main wrapper

        
    
    });

    menuButton.forEach(item => {
        item.addEventListener('click', function() {
            menuIcon.classList.toggle('active'); // Toggle 'active' class on the menu icon
            mainWrapper.classList.toggle('active'); // Toggle 'active' class on the main wrapper
            mainWrapper.classList.toggle('menu-height'); // Toggle 'active' class on the main wrapper
        })
    })

// Function to add or remove the 'scrolled' class based on scroll position
function addBoxShadowOnScroll() {
    if (window.scrollY > 0) { // Check if the scroll position is greater than 0
        header.classList.add('scrolled'); // Add 'scrolled' class to header
    } else {
        header.classList.remove('scrolled'); // Remove 'scrolled' class when at the top
    }
}

// Attach the function to the window's scroll event
window.addEventListener('scroll', addBoxShadowOnScroll);
    
    
    

  
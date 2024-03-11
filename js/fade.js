// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
    
// Function to handle scroll event
    function handleScroll() {
        const elements = document.querySelectorAll('.fade-in-up');
        elements.forEach(element => {
          if (isInViewport(element)) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
          }
        });
      }

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
      
// Initial check on page load
handleScroll();
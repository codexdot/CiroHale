
    function toggleSideNav(x) {
      const sidenav = document.getElementById("mySidenav");
      sidenav.style.width = sidenav.style.width === "250px" ? "0" : "250px";
      x.classList.toggle("change");
    }

    function closesideNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

    // Toggle between light and dark mode
    function toggleTheme() {
      document.body.classList.toggle("dark-mode");
    }
    
      // Function to apply the theme based on localStorage value
  function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  // Wait until the DOM is fully loaded before running the script
  document.addEventListener('DOMContentLoaded', function() {

    // Function to apply the theme based on localStorage value
    function applySavedTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }

    // Call the function to apply theme when the page loads
    applySavedTheme();

    // Function to toggle theme and save the preference
    window.toggleTheme = function() {
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Save light theme to localStorage
      } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Save dark theme to localStorage
      }
    };
    
  });
  
  
  document.querySelector('meta[name="theme-color"]').setAttribute("content", "#00ffff"); // Change to desired color code
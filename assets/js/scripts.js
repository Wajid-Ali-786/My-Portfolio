document.addEventListener('DOMContentLoaded', () => {
    const magicButton = document.getElementById('magicButton');
    const magicMessage = document.getElementById('magicMessage');
  
    magicButton.addEventListener('click', () => {
      // Toggle the display of the magic message
      if (magicMessage.style.display === 'none' || magicMessage.style.display === '') {
        magicMessage.style.display = 'block';
      } else {
        magicMessage.style.display = 'none';
      }
    });
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    // Retrieve dark mode preference from localStorage
    const darkModePreference = localStorage.getItem('darkMode');
    const darkModeToggle = document.getElementById('darkModeToggle');
  
    if (darkModePreference === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Show sun icon for light mode option
    } else {
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Show moon icon for dark mode option
    }
  
    // Dark Mode Toggle functionality
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      }
    });
  });
  

 
  
  function displayCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    
    const date = currentTime.getDate().toString().padStart(2, '0');
    const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = currentTime.getFullYear().toString();

    const timeString = `🕒 ${hours}:${minutes}:${seconds}`;
    const dateString = `📅 ${date}/${month}/${year}`;

    document.getElementById("timeDisplay").textContent = timeString;
    document.getElementById("dateDisplay").textContent = dateString;
}

// Run the function every second
setInterval(displayCurrentTime, 1000);

// Call it immediately when the page loads
document.addEventListener("DOMContentLoaded", displayCurrentTime);




document.getElementById("darkModeToggle").addEventListener("click", function() {
    let style = document.createElement("style");
    style.innerHTML = `
        input::placeholder, textarea::placeholder {
            color: white !important;
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});

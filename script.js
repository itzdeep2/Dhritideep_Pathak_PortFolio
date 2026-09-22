document.addEventListener("DOMContentLoaded", () => {
  
  
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  
  if(menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  
  const words = [
    "Ethical Hacker & Cybersecurity Enthusiast",
    "Full-Stack Developer",
    "Google Cloud Certified",
    "Security Professional"
  ];
  let currentWordIndex = 0;
  const flipElement = document.getElementById("flip-word");

  if(flipElement) {
    setInterval(() => {
      
      flipElement.classList.add("flip-hide");
      
      setTimeout(() => {
        
        currentWordIndex = (currentWordIndex + 1) % words.length;
        flipElement.textContent = words[currentWordIndex];
        
        flipElement.classList.remove("flip-hide");
      }, 500); 

    }, 3000);
  }


  const meteorContainer = document.getElementById("meteor-container");
  const numberOfMeteors = 10;

  if (meteorContainer) {
    for (let i = 0; i < numberOfMeteors; i++) {
      const meteor = document.createElement("span");
      meteor.classList.add("meteor");
      
      
      meteor.style.top = Math.floor(Math.random() * 100) + "%";
      meteor.style.left = Math.floor(Math.random() * 100) + "%";
      meteor.style.animationDelay = (Math.random() * 0.8) + "s";
      meteor.style.animationDuration = Math.floor(Math.random() * 6 + 3) + "s";
      
      meteorContainer.appendChild(meteor);
    }
  }

});
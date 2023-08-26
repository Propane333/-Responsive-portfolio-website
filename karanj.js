window.addEventListener("load", function() {
    const skillProgressBars = document.querySelectorAll(".skill-progress");
    skillProgressBars.forEach(bar => {
      const progress = bar.style.width;
      bar.style.width = "0"; // Reset the width for animation
      setTimeout(() => {
        bar.style.width = progress;
      }, 100); // Delay the animation for smoother effect
    });
  });
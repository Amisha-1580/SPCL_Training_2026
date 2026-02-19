const sections = document.querySelectorAll("section");

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "0.6s";
});

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// Contact form message
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
});

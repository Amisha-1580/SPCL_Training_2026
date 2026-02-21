// LOADER
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// THEME MEMORY
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  toggleBtn.textContent = "☀️";
}

toggleBtn.onclick = () => {
  document.body.classList.toggle("light-theme");
  const theme = document.body.classList.contains("light-theme") ? "light" : "dark";
  localStorage.setItem("theme", theme);
  toggleBtn.textContent = theme === "light" ? "☀️" : "🌙";
};

// ACTIVE NAV LINK
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (pageYOffset >= top) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

// CONTACT FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;

  if (!name || !email || !msg) {
    alert("Please fill all fields!");
  } else {
    alert("Message sent successfully!");
  }
});

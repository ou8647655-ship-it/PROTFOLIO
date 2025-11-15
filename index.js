// Responsive Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "⚠️ Please fill out all fields.";
    formMessage.style.color = "#ff4b5c";
    return;
  }

  formMessage.textContent = `✅ Thank you, ${name}! Your message has been sent successfully.`;
  formMessage.style.color = "#00ffc8";
  document.getElementById("contactForm").reset();
});

// Select form and elements
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page refresh

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation
  if (name === "" || email === "" || message === "") {
    showMessage("All fields are required.", "error");
    return;
  }

  if (!emailPattern.test(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  // Success message
  showMessage("Message sent successfully! We’ll get back to you soon.", "success");

  // Clear form
  contactForm.reset();
});

// Function to show messages
function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = type;
}



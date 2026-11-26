// CHUDEX CREATE DECO — small front-end interactions
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    });
  });
}

const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const enquiryForm = document.querySelector("#enquiry-form");
const formMessage = document.querySelector("#form-message");

if (enquiryForm && formMessage) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent =
      "Thanks for your interest! The form design is ready. In the backend stage, we will securely save and deliver enquiries.";
    enquiryForm.reset();
  });
}

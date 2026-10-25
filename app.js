const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3600);
}

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

const navLinks = [...document.querySelectorAll(".nav-link")];
const observedSections = navLinks
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  observedSections.forEach(section => sectionObserver.observe(section));
}

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach(item => item.classList.toggle("active", item === button));
    document.querySelectorAll(".project-card").forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const serviceSelect = document.querySelector("#service");
    const wanted = link.dataset.service;
    [...serviceSelect.options].forEach(option => {
      if (option.value === wanted || option.textContent === wanted) serviceSelect.value = option.value || option.textContent;
    });
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const form = document.querySelector("#contactForm");
const status = document.querySelector("#formStatus");
form.addEventListener("submit", event => {
  event.preventDefault();
  status.classList.remove("error");
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const service = form.elements.service.value;
  const message = form.elements.message.value.trim();
  const emailOkay = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (name.length < 2) return setError("Please enter your name (at least 2 characters).", "name");
  if (!emailOkay) return setError("Please enter a valid email address.", "email");
  if (!service) return setError("Please choose the service you need.", "service");
  if (message.length < 10) return setError("Please describe your idea in at least 10 characters.", "message");

  status.textContent = "Looks good! This demo doesn't send messages yet. Connect a secure form endpoint before launch.";
  showToast("Form validated successfully. No message was sent.");
  console.info("SRS Vision demo form validated", { name, email, service, messageLength: message.length });
});

function setError(message, fieldName) {
  status.textContent = message;
  status.classList.add("error");
  form.elements[fieldName].focus();
}

form.addEventListener("input", () => {
  if (status.textContent) {
    status.textContent = "";
    status.classList.remove("error");
  }
});

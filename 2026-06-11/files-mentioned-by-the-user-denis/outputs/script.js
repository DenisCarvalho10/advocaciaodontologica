const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const cookie = document.querySelector("[data-cookie]");
const cookieAccept = document.querySelector("[data-cookie-accept]");
const faqItems = document.querySelectorAll(".faq-list details");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") return;
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) otherItem.removeAttribute("open");
    });
  });
});

if (!localStorage.getItem("denis-odontologico-cookie")) {
  cookie.classList.add("is-visible");
}

cookieAccept.addEventListener("click", () => {
  localStorage.setItem("denis-odontologico-cookie", "accepted");
  cookie.classList.remove("is-visible");
});

const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const page = document.body.dataset.page;

document.querySelector(`[data-nav-link="${page}"]`)?.classList.add("is-active");

function closeMenu() {
  document.body.classList.remove("menu-open");
  nav?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
}

menuButton?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  nav?.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const subject = encodeURIComponent(`Project inquiry from ${formData.get("name") || "website visitor"}`);
  const body = encodeURIComponent(
    [
      `Name: ${formData.get("name") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Project Type: ${formData.get("project") || ""}`,
      "",
      `${formData.get("message") || ""}`
    ].join("\n")
  );

  window.location.href = `mailto:Ehsan.ghassemlou@gmail.com?subject=${subject}&body=${body}`;
});

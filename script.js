const page = document.body.dataset.page || "home";

const site = {
  brand: {
    name: "ECONSET Design",
    logoText: "ECONSET<br />DESIGN",
    logoImage: "assets/econset-logo-icon.png",
    email: "Ehsan.ghassemlou@gmail.com",
    phone: "+1 (647) 460-7907",
    phoneHref: "+16474607907"
  },
  navigation: [
    { label: "Home", href: "index.html", page: "home" },
    { label: "Services", href: "services.html", page: "services" },
    { label: "About", href: "about.html", page: "about" },
    { label: "Contact", href: "contact.html", page: "contact" }
  ],
  footer: {
    copyright: "\u00A9 2026 ECONSET Design",
    ctaLabel: "Book Consultation",
    ctaHref: "contact.html"
  }
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderHeader() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  header.className = page === "home" ? "site-header" : "site-header static-header";
  header.innerHTML = `
    <a class="logo" href="index.html" aria-label="${escapeHtml(site.brand.name)} home">
      <img src="${escapeHtml(site.brand.logoImage)}" alt="" />
      <span>${site.brand.logoText}</span>
    </a>
    <nav class="nav" aria-label="Primary navigation" data-nav>
      ${site.navigation
        .map(
          (item) =>
            `<a href="${escapeHtml(item.href)}" data-nav-link="${escapeHtml(item.page)}">${escapeHtml(item.label)}</a>`
        )
        .join("")}
    </nav>
    <button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button>
      <span></span><span></span>
    </button>
  `;
}

function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;

  footer.className = "site-footer";
  footer.innerHTML = `
    <p>${escapeHtml(site.footer.copyright)}</p>
    <div class="footer-links">
      <a href="tel:${escapeHtml(site.brand.phoneHref)}">${escapeHtml(site.brand.phone)}</a>
      <a href="mailto:${escapeHtml(site.brand.email)}">${escapeHtml(site.brand.email)}</a>
      <a href="${escapeHtml(site.footer.ctaHref)}">${escapeHtml(site.footer.ctaLabel)}</a>
    </div>
  `;
}

function bindNavigation() {
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-nav]");

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
}

function bindContactForm() {
  document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const subject = encodeURIComponent(`Project inquiry from ${formData.get("name") || "website visitor"}`);
    const fieldLines = [...form.querySelectorAll("input")].map((input) => {
      const label = input.closest("label")?.querySelector("span")?.textContent || input.name;
      return `${label}: ${formData.get(input.name) || ""}`;
    });
    const body = encodeURIComponent([...fieldLines, "", `${formData.get("message") || ""}`].join("\n"));

    window.location.href = `mailto:${site.brand.email}?subject=${subject}&body=${body}`;
  });
}

function initRevealAnimations() {
  document.body.classList.add("is-ready");

  const revealItems = [...document.querySelectorAll(".reveal")];
  if (!revealItems.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

renderHeader();
renderFooter();
bindNavigation();
bindContactForm();
initRevealAnimations();

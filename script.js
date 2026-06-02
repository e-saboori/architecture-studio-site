const data = window.ECONSET_DATA;
const page = document.body.dataset.page || "home";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function paragraphs(items) {
  return items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

function renderHeader() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  header.className = page === "home" ? "site-header" : "site-header static-header";
  header.innerHTML = `
    <a class="logo" href="index.html" aria-label="${escapeHtml(data.brand.name)} home">
      <img src="${escapeHtml(data.brand.logoImage)}" alt="" />
      <span>${data.brand.logoText}</span>
    </a>
    <nav class="nav" aria-label="Primary navigation" data-nav>
      ${data.navigation
        .map(
          (item) =>
            `<a href="${escapeHtml(item.href)}" data-nav-link="${escapeHtml(item.page)}">${escapeHtml(item.label)}</a>`
        )
        .join("")}
      <a class="nav-cta" href="${escapeHtml(data.navCta.href)}">${escapeHtml(data.navCta.label)}</a>
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
    <p>${escapeHtml(data.footer.copyright)}</p>
    <div class="footer-links">
      <a href="tel:${escapeHtml(data.brand.phoneHref)}">${escapeHtml(data.brand.phone)}</a>
      <a href="mailto:${escapeHtml(data.brand.email)}">${escapeHtml(data.brand.email)}</a>
      <a href="${escapeHtml(data.footer.ctaHref)}">${escapeHtml(data.footer.ctaLabel)}</a>
    </div>
  `;
}

function renderHome(main) {
  const home = data.pages.home;
  main.innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <h1>${escapeHtml(home.hero.heading)}</h1>
        <p>${escapeHtml(home.hero.body)}</p>
        <p class="hero-note">${escapeHtml(home.hero.note)}</p>
        <a class="button" href="${escapeHtml(home.hero.ctaHref)}">${escapeHtml(home.hero.ctaLabel)}</a>
      </div>
    </section>

    <section class="section intro-grid reveal">
      <div>
        <p class="section-label">${escapeHtml(home.why.label)}</p>
        <h2>${escapeHtml(home.why.heading)}</h2>
      </div>
      <div class="body-copy">${paragraphs(home.why.paragraphs)}</div>
    </section>

    <section class="section services-preview reveal">
      <div class="section-kicker">
        <p class="section-label">${escapeHtml(home.servicesPreview.label)}</p>
        <h2>${escapeHtml(home.servicesPreview.heading)}</h2>
      </div>
      <div class="services-preview-grid">
        ${data.pages.services.services
          .slice(0, 4)
          .map((item) => `<article><h3>${escapeHtml(item.title)}</h3></article>`)
          .join("")}
      </div>
      <a class="text-link" href="${escapeHtml(home.servicesPreview.ctaHref)}">${escapeHtml(home.servicesPreview.ctaLabel)}</a>
    </section>

    <section class="cta reveal">
      <div class="cta-image" aria-hidden="true"></div>
      <div class="cta-content">
        <p class="section-label">${escapeHtml(home.cta.label)}</p>
        <h2>${escapeHtml(home.cta.heading)}</h2>
        <p>${escapeHtml(home.cta.body)}</p>
        <a class="button button-outline" href="${escapeHtml(home.cta.ctaHref)}">${escapeHtml(home.cta.ctaLabel)}</a>
      </div>
    </section>
  `;
}

function renderServices(main) {
  const services = data.pages.services;
  main.innerHTML = `
    <section class="page-hero two-col-hero">
      <div>
        <p class="section-label">${escapeHtml(services.hero.label)}</p>
        <h1>${escapeHtml(services.hero.heading)}</h1>
        <p>${escapeHtml(services.hero.body)}</p>
      </div>
      <div class="image-edge-fade">
        <img src="${escapeHtml(services.hero.image)}" alt="${escapeHtml(services.hero.imageAlt)}" />
      </div>
    </section>

    <section class="section service-list reveal">
      ${services.services
        .map((item) => `<article class="service-row"><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.body)}</p></article>`)
        .join("")}
    </section>

    <section class="section reveal">
      <p class="section-label">${escapeHtml(services.process.label)}</p>
      <div class="body-copy process-copy">${paragraphs(services.process.description)}</div>
      <div class="process-list">
        ${services.process.steps
          .map(
            (step) =>
              `<article class="process-step"><span>${escapeHtml(step.number)}</span><div><h2>${escapeHtml(step.title)}</h2>${
                step.note ? `<p>${escapeHtml(step.note)}</p>` : ""
              }</div></article>`
          )
          .join("")}
      </div>
    </section>

    <section class="section page-cta reveal">
      <p class="section-label">${escapeHtml(data.pages.home.cta.label)}</p>
      <h2>${escapeHtml(data.pages.home.cta.heading)}</h2>
      <p>${escapeHtml(data.pages.home.cta.body)}</p>
      <a class="button" href="${escapeHtml(data.pages.home.cta.ctaHref)}">${escapeHtml(data.pages.home.cta.ctaLabel)}</a>
    </section>
  `;
}

function renderAbout(main) {
  const about = data.pages.about;
  main.innerHTML = `
    <section class="page-hero two-col-hero about-founder">
      <div>
        <p class="section-label">${escapeHtml(about.hero.label)}</p>
        <h1>${escapeHtml(about.hero.heading)}</h1>
      </div>
      <img src="${escapeHtml(about.hero.image)}" alt="${escapeHtml(about.hero.imageAlt)}" />
    </section>

    <section class="section trust-strip reveal">
      ${about.credentials.map((item) => `<article><span>${escapeHtml(item)}</span></article>`).join("")}
    </section>

    <section class="section narrative reveal">
      <h2>${escapeHtml(about.narrative.heading)}</h2>
      ${paragraphs(about.narrative.paragraphs)}
      <a class="text-link profile-link" href="${escapeHtml(about.narrative.linkHref)}" target="_blank" rel="noreferrer">
        ${escapeHtml(about.narrative.linkLabel)}
      </a>
    </section>
  `;
}

function contactIcon(type) {
  const icons = {
    email: '<path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" />',
    phone:
      '<path d="M7 4h4l2 5-3 2c1.2 2.4 2.9 4.1 5 5l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2h2z" />',
    location:
      '<path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z" /><path d="M12 10.5h.01" />'
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24">${icons[type]}</svg>`;
}

function renderContact(main) {
  const contact = data.pages.contact;
  main.innerHTML = `
    <section class="page-hero contact-hero">
      <div>
        <h1>${escapeHtml(contact.hero.heading)}</h1>
        <p>${escapeHtml(contact.hero.body)}</p>
      </div>
      <img src="${escapeHtml(contact.hero.image)}" alt="${escapeHtml(contact.hero.imageAlt)}" />
    </section>

    <section class="section contact-grid reveal">
      <div class="contact-details">
        <a class="contact-item" href="mailto:${escapeHtml(data.brand.email)}">
          ${contactIcon("email")}<span>${escapeHtml(data.brand.email)}</span>
        </a>
        <a class="contact-item" href="tel:${escapeHtml(data.brand.phoneHref)}">
          ${contactIcon("phone")}<span>${escapeHtml(data.brand.phone)}</span>
        </a>
        <p class="contact-item">
          ${contactIcon("location")}<span>${escapeHtml(data.brand.address)}</span>
        </p>
        <a class="button" href="mailto:${escapeHtml(data.brand.email)}">${escapeHtml(contact.form.consultationLabel)}</a>
      </div>

      <form class="contact-form">
        ${contact.form.fields
          .map(
            (field) =>
              `<label><span>${escapeHtml(field.label)}</span><input type="${escapeHtml(field.type)}" name="${escapeHtml(
                field.name
              )}"${field.autocomplete ? ` autocomplete="${escapeHtml(field.autocomplete)}"` : ""}${
                field.required ? " required" : ""
              } /></label>`
          )
          .join("")}
        <label><span>${escapeHtml(contact.form.messageLabel)}</span><textarea name="message" rows="6"${
          contact.form.messageRequired ? " required" : ""
        }></textarea></label>
        <p class="form-helper">${escapeHtml(contact.form.helperText)}</p>
        <button class="button" type="submit">${escapeHtml(contact.form.buttonLabel)}</button>
      </form>
    </section>
  `;
}

function renderPage() {
  const main = document.querySelector("[data-page-content]");
  if (!main) return;

  const renderers = {
    home: renderHome,
    services: renderServices,
    about: renderAbout,
    contact: renderContact
  };

  renderers[page]?.(main);
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

    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${formData.get("name") || "website visitor"}`);
    const fieldLines = data.pages.contact.form.fields.map(
      (field) => `${field.label}: ${formData.get(field.name) || ""}`
    );
    const body = encodeURIComponent(
      [
        ...fieldLines,
        "",
        `${formData.get("message") || ""}`
      ].join("\n")
    );

    window.location.href = `mailto:${data.brand.email}?subject=${subject}&body=${body}`;
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
renderPage();
renderFooter();
bindNavigation();
bindContactForm();
initRevealAnimations();

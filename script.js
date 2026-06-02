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
    <a href="mailto:${escapeHtml(data.brand.email)}">${escapeHtml(data.brand.email)}</a>
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

    <section class="section intro-grid">
      <div>
        <p class="section-label">${escapeHtml(home.why.label)}</p>
        <h2>${escapeHtml(home.why.heading)}</h2>
      </div>
      <div class="body-copy">${paragraphs(home.why.paragraphs)}</div>
    </section>

    <section class="cta">
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

    <section class="section service-list">
      ${services.services
        .map((item) => `<article><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.body)}</p></article>`)
        .join("")}
    </section>

    <section class="section">
      <p class="section-label">${escapeHtml(services.process.label)}</p>
      <div class="body-copy process-copy">${paragraphs(services.process.description)}</div>
      <div class="process-list">
        ${services.process.steps
          .map(
            (step) =>
              `<article><span>${escapeHtml(step.number)}</span><h2>${escapeHtml(step.title)}</h2>${
                step.note ? `<p>${escapeHtml(step.note)}</p>` : ""
              }</article>`
          )
          .join("")}
      </div>
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

    <section class="section narrative">
      <h2>${escapeHtml(about.narrative.heading)}</h2>
      ${paragraphs(about.narrative.paragraphs)}
      <a class="text-link" href="${escapeHtml(about.narrative.linkHref)}" target="_blank" rel="noreferrer">
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

    <section class="section contact-grid">
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
              )}"${field.autocomplete ? ` autocomplete="${escapeHtml(field.autocomplete)}"` : ""} /></label>`
          )
          .join("")}
        <label><span>${escapeHtml(contact.form.messageLabel)}</span><textarea name="message" rows="6"></textarea></label>
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
    const body = encodeURIComponent(
      [
        `Name: ${formData.get("name") || ""}`,
        `Email: ${formData.get("email") || ""}`,
        `Project Type: ${formData.get("project") || ""}`,
        "",
        `${formData.get("message") || ""}`
      ].join("\n")
    );

    window.location.href = `mailto:${data.brand.email}?subject=${subject}&body=${body}`;
  });
}

renderHeader();
renderPage();
renderFooter();
bindNavigation();
bindContactForm();

window.ECONSET_DATA = {
  brand: {
    name: "ECONSET Design",
    logoText: "ECONSET<br />DESIGN",
    logoImage: "assets/econset-logo-icon.png",
    email: "Ehsan.ghassemlou@gmail.com",
    phone: "+1 (647) 460-7907",
    phoneHref: "+16474607907",
    address: "17 Anndale Drive, Toronto, ON, Canada"
  },
  navigation: [
    { label: "Home", href: "index.html", page: "home" },
    { label: "Services", href: "services.html", page: "services" },
    { label: "About", href: "about.html", page: "about" },
    { label: "Contact", href: "contact.html", page: "contact" }
  ],
  footer: {
    copyright: "© 2026 ECONSET Design",
    ctaLabel: "Book Consultation",
    ctaHref: "contact.html"
  },
  pages: {
    home: {
      hero: {
        heading: "Designing spaces with clarity, function, and purpose.",
        body:
          "We create residential and commercial architecture ranging from small renovations to complete custom builds. Every project begins with understanding, exploration, and a clear design direction tailored to your needs.",
        note: "Initial concept consultation available",
        ctaLabel: "Start Your Project",
        ctaHref: "contact.html"
      },
      why: {
        label: "Why Work With Us",
        heading: "Clarity, alignment, and confidence before full design.",
        paragraphs: [
          "Every project begins with understanding your needs on site.",
          "We offer an initial site visit and concept design proposal to explore your ideas and translate them into architectural direction. After the first design presentation, which may include sketches or visual concept renderings, you will have the opportunity to decide whether to proceed with the full design service.",
          "There is no obligation to continue beyond this stage.",
          "Our goal is to ensure clarity, alignment, and confidence before moving into detailed design development."
        ]
      },
      cta: {
        label: "Let's Build Something Great",
        heading: "Have a project in mind?",
        body: "We'd love to hear about it. Let's create something meaningful together.",
        ctaLabel: "Contact ECONSET",
        ctaHref: "contact.html"
      }
    },
    services: {
      hero: {
        label: "What We Do for You",
        heading: "Design services across a wide range of project scales.",
        body:
          "At ECONSET Design, we provide design services across residential, commercial, and institutional projects from small renovations to full-scale architectural developments.",
        image: "assets/interior.jpg",
        imageAlt: "Warm modern residential interior"
      },
      services: [
        {
          title: "Home additions and extensions",
          body: "Thoughtful additions that expand living space while respecting the existing home and site."
        },
        {
          title: "Basement renovations and reconfiguration",
          body: "Functional layouts that improve comfort, flow, light, and long-term usability."
        },
        {
          title: "Kitchen and interior redesign",
          body: "Clear interior planning for everyday living, gathering, storage, and movement."
        },
        {
          title: "Garage design and conversions",
          body: "Practical design solutions for new garages, upgrades, and adaptive conversions."
        },
        {
          title: "Custom villa design from concept to completion",
          body: "Complete design direction for custom homes, from early ideas through coordinated documentation."
        },
        {
          title: "Office interior design and workspace planning",
          body: "Work environments planned around efficiency, focus, collaboration, and client experience."
        },
        {
          title: "Larger-scale building and development design",
          body: "Architectural planning and design for broader commercial, institutional, and development projects."
        }
      ],
      process: {
        label: "How We Work",
        description: [
          "We follow a structured and transparent process to ensure smooth collaboration from start to finish. All projects begin with a clear written agreement outlining scope of work, deliverables, timeline, and fees.",
          "Depending on the project type, we offer flexible contract structures tailored to different scales, from concept design agreements to full architectural service contracts. We prioritize clarity, professionalism, and compliance at every stage of the design process."
        ],
        steps: [
          { number: "01", title: "Initial site visit + understanding needs" },
          { number: "02", title: "Concept design proposal" },
          { number: "03", title: "Design development" },
          { number: "04", title: "Permits / coordination", note: "If applicable" },
          { number: "05", title: "Construction Management / Contract Admin", note: "If applicable" }
        ]
      }
    },
    about: {
      hero: {
        label: "ECONSET Design",
        heading: "Founded by Ehsan Ghassemlou, OAA Architect.",
        image: "assets/ehsan-ghassemlou.jpg",
        imageAlt: "Ehsan Ghassemlou, OAA Architect"
      },
      narrative: {
        heading: "Hi, I'm Ehsan Ghassemlou, OAA.",
        paragraphs: [
          "I am a licensed architect in Ontario with over 17 years of experience in architectural design, construction, and project management. My career has taken me from designing villas, housing, commercial, and institutional projects internationally to leading major projects in Canada.",
          "I hold a Master of Architecture from Shahid Beheshti University and a Master of Engineering in Construction Management from Concordia University. I believe good architecture is not only about beautiful spaces, it is about creating practical, thoughtful, and lasting solutions that fit the way people live and work.",
          "Whether you are planning a custom home renovation, an addition, or a new building, I am committed to guiding you through the process with creativity, professionalism, and attention to detail."
        ],
        linkLabel: "OAA Profile: Ehsan Ghassemlou",
        linkHref: "https://oaa.on.ca/oaa-directory/search-architects/search-architects-detail/EhsanGhassemlou"
      }
    },
    contact: {
      hero: {
        heading: "Book a consultation.",
        body: "Share a few details about your project and I will follow up with the next step.",
        image: "assets/contact-exterior.jpg",
        imageAlt: "Modern concrete exterior with warm wood entry"
      },
      form: {
        fields: [
          { label: "Name", name: "name", type: "text", autocomplete: "name", required: true },
          { label: "Email", name: "email", type: "email", autocomplete: "email", required: true },
          { label: "Phone", name: "phone", type: "tel", autocomplete: "tel" }
        ],
        messageLabel: "Message",
        messageRequired: true,
        buttonLabel: "Send Inquiry",
        consultationLabel: "Book a Consultation",
        helperText: "Submitting opens your email app with the inquiry prepared."
      }
    }
  }
};

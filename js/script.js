(function () {
  "use strict";

  var THEME_KEY = "sonderbek-theme";
  var LANG_KEY = "sonderbek-lang";

  var translations = {
    skipLink: { en: "Skip to main content", da: "Gå til hovedindhold" },
    menuSr: { en: "Menu", da: "Menu" },
    logoAria: { en: "Sonderbek IT home", da: "Sonderbek IT forside" },

    navServices: { en: "Services", da: "Ydelser" },
    navWhyUs: { en: "Why Us", da: "Hvorfor os" },
    navProcess: { en: "How It Works", da: "Sådan foregår det" },
    navContact: { en: "Contact", da: "Kontakt" },
    headerCta: { en: "Book a Repair", da: "Book en reparation" },

    heroEyebrow: { en: "Stationary Computer Repair", da: "Reparation af stationære computere" },
    heroTitle: { en: "Computer trouble? We'll fix it — fast, honest, and secure.", da: "Computerproblemer? Vi ordner det — hurtigt, ærligt og sikkert." },
    heroLead: {
      en: "Sonderbek IT helps private individuals solve hardware and software problems on their stationary computer. Drop it off at our address, or we'll come to you by appointment. No jargon, no hidden fees, no snooping through files that aren't ours to see.",
      da: "Sonderbek IT hjælper private med at løse hardware- og softwareproblemer på deres stationære computer. Aflever den hos os, eller vi kommer ud efter aftale. Ingen fagsprog, ingen skjulte gebyrer, og vi roder ikke i filer, der ikke er vores at se."
    },
    heroCtaPrimary: { en: "Get a Free Diagnosis", da: "Få en gratis diagnose" },
    heroCtaCall: { en: "Call Now", da: "Ring nu" },

    trustPricing: { en: "Upfront pricing", da: "Fast pris på forhånd" },
    trustPrivacy: { en: "Privacy-first repairs", da: "Diskretion i højsædet" },
    trustGuarantee: { en: "Satisfaction guarantee", da: "Tilfredshedsgaranti" },

    servicesTitle: { en: "What we fix", da: "Det, vi reparerer" },
    servicesSub: { en: "From hardware hiccups to a computer that just won't behave — we handle it all.", da: "Fra hardwareudfordringer til en computer, der bare ikke vil makke ret — vi klarer det hele." },

    svc1Title: { en: "Hardware Repair", da: "Hardwarereparation" },
    svc1Desc: { en: "Fans, cooling, power issues, and upgrades like more RAM or a faster SSD — for stationary computers.", da: "Blæsere, køling, strømproblemer og opgraderinger som mere RAM eller en hurtigere SSD — til din stationære computer." },
    svc2Title: { en: "Software Troubleshooting", da: "Softwarefejlfinding" },
    svc2Desc: { en: "Crashes, slow startups, update failures, and driver issues — diagnosed and resolved.", da: "Nedbrud, langsom opstart, fejlslagne opdateringer og driverproblemer — diagnosticeret og løst." },
    svc3Title: { en: "Virus & Malware Removal", da: "Fjernelse af virus og malware" },
    svc3Desc: { en: "Full cleanup plus a sensible protection setup so it doesn't come back.", da: "Grundig oprydning samt en fornuftig beskyttelse, så det ikke sker igen." },
    svc4Title: { en: "Data Backup", da: "Backup" },
    svc4Desc: { en: "Keep your photos and files safe with a reliable backup routine you can count on.", da: "Hold dine billeder og filer sikre med en pålidelig backup-rutine, du kan regne med." },
    svc5Title: { en: "Setup & Optimization", da: "Opsætning og optimering" },
    svc5Desc: { en: "New computer setup, tune-ups, cable sleeving, and getting your printer or Wi-Fi to cooperate.", da: "Opsætning af ny computer, gennemgang, kabelsleeving og få styr på printer eller Wi-Fi." },

    whyTitle: { en: "Why people trust Sonderbek IT with their computer", da: "Derfor stoler folk på Sonderbek IT med deres computer" },
    whySub: {
      en: "It's your personal computer — your photos, your documents, your accounts. We treat it that way.",
      da: "Det er din private computer — dine billeder, dine dokumenter, dine konti. Vi behandler den derefter."
    },
    why1: {
      en: "<strong>Privacy-first repairs.</strong> We only access what's needed to fix the reported issue.",
      da: "<strong>Diskretion i højsædet.</strong> Vi tilgår kun det, der er nødvendigt for at løse den anmeldte fejl."
    },
    why2: {
      en: "<strong>Upfront pricing.</strong> You approve the cost before any work begins.",
      da: "<strong>Fast pris på forhånd.</strong> Du godkender prisen, før vi går i gang."
    },
    why3: {
      en: "<strong>Plain-language explanations.</strong> We tell you what was wrong and how to avoid it next time.",
      da: "<strong>Forklaringer uden fagsprog.</strong> Vi fortæller dig, hvad der var galt, og hvordan du undgår det næste gang."
    },
    why4: {
      en: "<strong>Satisfaction guarantee.</strong> If the original issue isn't resolved, we make it right.",
      da: "<strong>Tilfredshedsgaranti.</strong> Er den oprindelige fejl ikke løst, gør vi det godt igen."
    },
    statHiddenFees: { en: "Hidden fees", da: "Skjulte gebyrer" },
    statResponse: { en: "Typical response", da: "Typisk svartid" },

    processTitle: { en: "How it works", da: "Sådan foregår det" },
    step1Title: { en: "Reach out", da: "Kontakt os" },
    step1Desc: { en: "Tell us what's wrong using the form below, or call us directly.", da: "Fortæl os, hvad der er galt, via formularen herunder, eller ring til os direkte." },
    step2Title: { en: "Free diagnosis", da: "Gratis diagnose" },
    step2Desc: { en: "Drop it off with us, or book a home visit — either way, we'll quote a fair, flat price.", da: "Aflever den hos os, eller book et hjemmebesøg — under alle omstændigheder får du en fast, fair pris." },
    step3Title: { en: "We fix it", da: "Vi ordner den" },
    step3Desc: { en: "You approve the price, we do the work, and we test everything before handing it back.", da: "Du godkender prisen, vi udfører arbejdet, og vi tester alt, inden du får den tilbage." },
    step4Title: { en: "Back up and running", da: "Klar til brug igen" },
    step4Desc: { en: "Your computer, working the way it should — with a plain-language summary of what we did.", da: "Din computer, som den skal fungere — med en letforståelig opsummering af, hvad vi har gjort." },

    contactTitle: { en: "Let's fix your computer", da: "Lad os ordne din computer" },
    contactSub: { en: "Send us a few details and we'll get back to you — usually within a day.", da: "Send os et par detaljer, så vender vi tilbage — som regel inden for en dag." },
    labelPhone: { en: "Phone", da: "Telefon" },
    labelEmail: { en: "Email", da: "E-mail" },
    labelServiceArea: { en: "Address", da: "Adresse" },
    serviceAreaValue: { en: "Hasselager, 8361, Denmark — drop-off. House calls by appointment.", da: "Hasselager, 8361 — aflevering. Kørsel ud efter aftale." },
    privacyNote: {
      en: "This form opens your own email app to send us your message directly — nothing is stored or transmitted through this website.",
      da: "Denne formular åbner din egen e-mail-app, så du kan sende beskeden direkte til os — intet gemmes eller sendes via denne hjemmeside."
    },

    formName: { en: "Name", da: "Navn" },
    formEmail: { en: "Email", da: "E-mail" },
    formPhone: { en: "Phone", da: "Telefon" },
    formOptional: { en: "(optional)", da: "(valgfrit)" },
    formMessage: { en: "What's going on with your computer?", da: "Hvad er der galt med din computer?" },
    formSubmit: { en: "Send Message", da: "Send besked" },

    footerText: { en: "Sonderbek IT. All rights reserved.", da: "Sonderbek IT. Alle rettigheder forbeholdes." },
    footerBackToTop: { en: "Back to top", da: "Til toppen" },

    pageTitle: { en: "Sonderbek IT — Home Computer Repair You Can Trust", da: "Sonderbek IT — Computerreparation, du kan stole på" },
    metaDescription: {
      en: "Sonderbek IT fixes hardware and software problems on your stationary home computer — fast, honest, and secure. Book a free diagnosis today.",
      da: "Sonderbek IT løser hardware- og softwareproblemer på din stationære hjemmecomputer — hurtigt, ærligt og sikkert. Book en gratis diagnose i dag."
    },

    errRequired: { en: "Please fill in your name and describe the issue.", da: "Udfyld venligst dit navn og beskriv problemet." },
    errEmail: { en: "Please enter a valid email address.", da: "Indtast venligst en gyldig e-mailadresse." },
    statusOpeningMail: { en: "Opening your email app to send this message…", da: "Åbner din e-mail-app for at sende beskeden…" },
    mailSubjectPrefix: { en: "Repair request from ", da: "Reparationsanmodning fra " },
    mailLabelName: { en: "Name", da: "Navn" },
    mailLabelEmail: { en: "Email", da: "E-mail" },
    mailLabelPhone: { en: "Phone", da: "Telefon" },

    themeToLight: { en: "Switch to light mode", da: "Skift til lys tilstand" },
    themeToDark: { en: "Switch to dark mode", da: "Skift til mørk tilstand" },

    fallbackIntro: {
      en: "Nothing happened? Your device may not have an email app set up. Copy your message and send it to us from wherever you read your email:",
      da: "Skete der ingenting? Din enhed har måske ikke et e-mailprogram sat op. Kopiér din besked, og send den til os derfra, hvor du normalt læser e-mail:"
    },
    copyButton: { en: "Copy message", da: "Kopiér besked" },
    copyDone: { en: "Copied!", da: "Kopieret!" },
    copyFailed: { en: "Couldn't copy — please select the text above and copy it manually.", da: "Kunne ikke kopiere — markér teksten ovenfor, og kopiér den manuelt." }
  };

  var currentLang = "en";
  try {
    var storedLang = localStorage.getItem(LANG_KEY);
    if (storedLang === "da" || storedLang === "en") currentLang = storedLang;
  } catch (e) {}

  var langButtons = document.querySelectorAll(".lang-btn");
  var themeToggle = document.getElementById("themeToggle");

  function t(key) {
    return translations[key] ? translations[key][currentLang] : "";
  }

  function getEffectiveTheme() {
    var stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateThemeButton() {
    if (!themeToggle) return;
    var effective = getEffectiveTheme();
    themeToggle.setAttribute("aria-label", effective === "dark" ? t("themeToLight") : t("themeToDark"));
  }

  function applyThemeAttr() {
    var stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    updateThemeButton();
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = getEffectiveTheme() === "dark" ? "light" : "dark";
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      applyThemeAttr();
    });
  }

  function applyLanguage(lang) {
    currentLang = lang === "da" ? "da" : "en";
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (translations[key]) el.textContent = translations[key][currentLang];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (translations[key]) el.innerHTML = translations[key][currentLang];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var parts = el.getAttribute("data-i18n-attr").split(":");
      var attr = parts[0], key = parts[1];
      if (translations[key]) el.setAttribute(attr, translations[key][currentLang]);
    });

    langButtons.forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    updateThemeButton();
    try { localStorage.setItem(LANG_KEY, currentLang); } catch (e) {}
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  // In-page anchor links: scroll explicitly instead of relying on native
  // hash-jump, which (a) does nothing on a second click to an unchanged
  // hash, and (b) doesn't account for the sticky header's height on its own.
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    if (!id) return;
    link.addEventListener("click", function (e) {
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history.pushState) history.pushState(null, "", "#" + id);
    });
  });

  // Mobile nav toggle
  var navToggle = document.getElementById("navToggle");
  var navList = document.getElementById("navList");
  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navList.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Contact form -> opens the visitor's own email client, no data leaves the browser
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  var fallback = document.getElementById("formFallback");
  var fallbackMessage = document.getElementById("fallbackMessage");
  var copyBtn = document.getElementById("copyBtn");
  var CONTACT_EMAIL = "SonderbekIT@pm.me";
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setStatus(message, state) {
    if (!status) return;
    status.textContent = message;
    status.setAttribute("data-state", state || "");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var phone = form.phone.value.trim();
      var message = form.message.value.trim();

      if (!name || !message) {
        setStatus(t("errRequired"), "error");
        return;
      }
      if (!EMAIL_RE.test(email)) {
        setStatus(t("errEmail"), "error");
        return;
      }

      var bodyLines = [
        t("mailLabelName") + ": " + name,
        t("mailLabelEmail") + ": " + email,
        phone ? t("mailLabelPhone") + ": " + phone : null,
        "",
        message
      ].filter(function (line) { return line !== null; });

      var subject = encodeURIComponent(t("mailSubjectPrefix") + name);
      var body = encodeURIComponent(bodyLines.join("\n"));
      var mailto = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;

      // Always offer a copy/paste route too: plenty of visitors have no mail
      // app registered, and for them the mailto: below does nothing at all.
      if (fallbackMessage && fallback) {
        fallbackMessage.textContent = bodyLines.join("\n");
        fallback.hidden = false;
      }

      setStatus(t("statusOpeningMail"), "success");
      window.location.href = mailto;
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var text = fallbackMessage ? fallbackMessage.textContent : "";
      if (!text) return;

      function done() {
        copyBtn.textContent = t("copyDone");
        setTimeout(function () { copyBtn.textContent = t("copyButton"); }, 2000);
      }
      function failed() {
        setStatus(t("copyFailed"), "error");
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, failed);
      } else {
        failed();
      }
    });
  }

  applyThemeAttr();
  applyLanguage(currentLang);
})();

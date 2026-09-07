(function () {
  "use strict";

  var THEME_KEY = "sonderbek-theme";
  var LANG_KEY = "sonderbek-lang";

  var translations = {
    skipLink: { en: "Skip to main content", da: "Gå til hovedindhold" },
    menuSr: { en: "Menu", da: "Menu" },
    logoAria: { en: "Sonderbek IT home", da: "Sonderbek IT forside" },

    svc6Title: { en: "Remote support", da: "Fjernsupport" },
    svc6Desc: {
      en: "Plenty can be sorted out without the machine leaving your house. I connect to your screen while you watch.",
      da: "Mange ting kan klares uden at maskinen forlader hjemmet. Jeg kobler mig p\u00e5 din sk\u00e6rm, mens du kigger med."
    },
    pricesRemoteLabel: { en: "Remote support", da: "Fjernsupport" },
    pricesRemoteNote: { en: "per hour, incl. VAT", da: "pr. time, inkl. moms" },
    pricesRemoteTitle: { en: "Remote support", da: "Fjernsupport" },
    pricesRemoteBody: {
      en: "A lot can be sorted out without the machine leaving your desk. I connect to your screen, <strong>you can see everything I do</strong>, and you can cut the connection at any moment. Same price as the workshop: 562 kr an hour.",
      da: "Meget kan klares, uden at maskinen forlader dit bord. Jeg kobler mig p\u00e5 din sk\u00e6rm, <strong>du kan se alt hvad jeg laver</strong>, og du kan afbryde forbindelsen n\u00e5r som helst. Samme pris som p\u00e5 v\u00e6rkstedet: 562 kr i timen."
    },
    pricesRemoteGood: {
      en: "<strong>Good for:</strong> mail and passwords playing up, Windows updates that fail, programs that will not start, printers and networks, tidying up and speed.",
      da: "<strong>Godt til:</strong> mail og adgangskoder der driller, Windows-opdateringer der fejler, programmer der ikke vil starte, printer og netv\u00e6rk, oprydning og hastighed."
    },
    pricesRemoteBad: {
      en: "<strong>Not for:</strong> anything needing a screwdriver \u2014 broken hardware, a new drive, dust and cooling. And the machine has to be able to get online; if it will not start, I need it in my hands.",
      da: "<strong>Ikke til:</strong> alt der kr\u00e6ver en skruetr\u00e6kker \u2014 defekt hardware, ny disk, st\u00f8v og k\u00f8ling. Og maskinen skal kunne komme p\u00e5 nettet; kan den ikke starte, skal jeg have fingre i den."
    },
    pricesRemoteTrustTitle: { en: "I never ring you out of the blue.", da: "Jeg ringer aldrig uopfordret." },
    pricesRemoteTrustBody: {
      en: "If somebody calls saying they are from Microsoft or your bank and would like access to your computer, hang up. Remote support with me always starts with <em>you</em> writing to <em>me</em>.",
      da: "F\u00e5r du et opkald fra en, der siger han er fra Microsoft eller din bank og gerne vil ind p\u00e5 din computer, s\u00e5 l\u00e6g p\u00e5. Fjernsupport hos mig starter altid med, at <em>du</em> har skrevet til <em>mig</em>."
    },
    areasRemote: {
      en: "<strong>Remote support covers the whole country.</strong> If the job can be done over the internet, where you live makes no difference. <a href=\"priser.html\">See what it costs</a>.",
      da: "<strong>Fjernsupport g\u00e6lder hele landet.</strong> Kan opgaven klares over nettet, betyder det ikke noget, hvor du bor. <a href=\"priser.html\">Se hvad det koster</a>."
    },

    navPrices: { en: "Prices", da: "Priser" },
    navHours: { en: "Opening hours", da: "\u00c5bningstider" },
    footerTerms: { en: "Terms", da: "Handelsbetingelser" },
    footerPrivacy: { en: "Privacy", da: "Privatlivspolitik" },
    heroCtaPrices: { en: "See prices", da: "Se priser" },

    pricesEyebrow: { en: "Prices", da: "Priser" },
    pricesTitle: { en: "What does it cost?", da: "Hvad koster det?" },
    pricesLead: {
      en: "You always get a fixed price before I start. No hidden fees, and no hours you did not agree to.",
      da: "Du f\u00e5r altid en fast pris, f\u00f8r jeg g\u00e5r i gang. Ingen skjulte gebyrer, og ingen timer du ikke har sagt ja til."
    },
    pricesRateLabel: { en: "At the workshop", da: "P\u00e5 v\u00e6rkstedet" },
    pricesRateNote: { en: "per hour, incl. VAT", da: "pr. time, inkl. moms" },
    pricesVisitLabel: { en: "At your home", da: "Hjemme hos dig" },
    pricesVisitNote: {
      en: "first hour, then 600 kr per hour",
      da: "f\u00f8rste time, derefter 600 kr pr. time"
    },
    pricesTypicalTitle: { en: "What the usual jobs tend to cost", da: "Hvad de almindelige opgaver plejer at koste" },
    pricesTypicalLead: {
      en: "Indicative. The price depends on the machine, and you get a fixed price for yours before anything is touched.",
      da: "Vejledende. Prisen afh\u00e6nger af maskinen, og du f\u00e5r en fast pris p\u00e5 netop din, f\u00f8r der bliver r\u00f8rt ved noget."
    },
    pricesColJob: { en: "Job", da: "Opgave" },
    pricesColTime: { en: "Typical time", da: "Typisk tid" },
    pricesColPrice: { en: "Indicative price", da: "Vejledende pris" },
    jobVirus: { en: "Viruses and unwanted programs removed", da: "Virus og u\u00f8nskede programmer fjernes" },
    jobSlow: { en: "The computer has become slow", da: "Computeren er blevet langsom" },
    jobWindows: { en: "Windows set up from scratch", da: "Windows s\u00e6ttes op forfra" },
    jobSsd: { en: "New SSD fitted, everything moved across", da: "Ny SSD s\u00e6ttes i, og alt flyttes med" },
    jobData: { en: "Data rescued from a failing drive", da: "Data reddes fra en disk p\u00e5 vej ud" },
    jobPrinter: { en: "Printer or network set up again", da: "Printer eller netv\u00e6rk sat op igen" },
    jobMail: { en: "Mail and passwords not working", da: "Mail og adgangskoder virker ikke" },
    jobTest: { en: "Overnight memory or power testing", da: "Test natten over af hukommelse eller str\u00f8m" },
    jobTestTime: { en: "overnight", da: "natten over" },
    plusPart: { en: "+ the drive", da: "+ disken" },
    pricesPartsTitle: { en: "Parts", da: "Reservedele" },
    pricesPartsBody: {
      en: "Parts come on top of the labour. You are told the price before I order anything \u2014 and you decide whether it is worth it. I do not add hidden fees.",
      da: "Dele kommer oven i arbejdet. Du f\u00e5r prisen at vide, f\u00f8r jeg bestiller noget \u2014 og du bestemmer, om det er pengene v\u00e6rd. Jeg l\u00e6gger ikke skjulte gebyrer oveni."
    },
    pricesVisitTitle: { en: "Home visits", da: "Hjemmebes\u00f8g" },
    pricesVisitBody: {
      en: "If the machine should not be moved, or it is simply easiest for you, I come to you. <strong>700 kr for the first hour and 600 kr for each hour after that</strong>, incl. VAT and travel within the service area. There is no separate call-out fee \u2014 the first hour covers the journey.",
      da: "Skal maskinen ikke flyttes, eller er det bare nemmest for dig, kommer jeg ud. <strong>700 kr for den f\u00f8rste time og 600 kr for hver time derefter</strong>, inkl. moms og k\u00f8rsel inden for serviceomr\u00e5det. Der er ingen s\u00e6rskilt udkaldsgebyr \u2014 den f\u00f8rste time d\u00e6kker turen."
    },
    pricesVisitTip: {
      en: "If it is a desktop and not urgent, dropping it off is usually cheaper. Then you pay the workshop rate.",
      da: "Er det en station\u00e6r maskine, og haster det ikke, bliver det som regel billigst at aflevere den. S\u00e5 betaler du v\u00e6rkstedsprisen."
    },
    pricesDiagTitle: { en: "Fault-finding", da: "Fejlfinding" },
    pricesDiagBody: {
      en: "Fault-finding is part of the work and is charged at the hourly rate. In return I do not guess: you are told what I think it is, what it costs to confirm, and what the repair would then come to \u2014 <strong>before I start</strong>. You say yes or no knowing where you stand.",
      da: "Fejlfinding er en del af arbejdet og afregnes efter timeprisen. Til geng\u00e6ld g\u00e6tter jeg ikke: du f\u00e5r at vide, hvad jeg tror det er, hvad det vil koste at f\u00e5 bekr\u00e6ftet, og hvad reparationen s\u00e5 lander p\u00e5 \u2014 <strong>f\u00f8r jeg g\u00e5r i gang</strong>. Du siger ja eller nej p\u00e5 et oplyst grundlag."
    },
    pricesFairTitle: { en: "How you avoid surprises", da: "S\u00e5dan undg\u00e5r du overraskelser" },
    fairQuote: { en: "You get a fixed price before the work starts.", da: "Du f\u00e5r en fast pris, f\u00f8r arbejdet g\u00e5r i gang." },
    fairGrow: {
      en: "If the job grows beyond what we agreed, I stop and ask first. You never pay for hours you did not agree to.",
      da: "Vokser opgaven ud over det aftalte, stopper jeg og sp\u00f8rger f\u00f8rst. Du betaler aldrig for timer, du ikke har sagt ja til."
    },
    fairParts: { en: "Parts are never ordered before you know the price.", da: "Dele bliver aldrig bestilt, f\u00f8r du kender prisen." },
    fairGuarantee: { en: "There is a 3 month guarantee on the work.", da: "Der er 3 m\u00e5neders garanti p\u00e5 arbejdet." },
    pricesMoms: { en: "All prices include 25% Danish VAT and apply to private customers.", da: "Alle priser er inkl. 25% moms og g\u00e6lder private kunder." },
    pricesCta: { en: "Describe your problem \u2014 get a price", da: "Beskriv dit problem \u2014 f\u00e5 en pris" },

    hoursEyebrow: { en: "Opening hours", da: "\u00c5bningstider" },
    hoursTitle: { en: "When can you catch me?", da: "Hvorn\u00e5r kan du fange mig?" },
    hoursLead: {
      en: "I am open late on weekdays so you can make it after work. The form is open around the clock \u2014 I usually reply within a day.",
      da: "Jeg har \u00e5bent sent p\u00e5 hverdage, s\u00e5 du kan n\u00e5 det efter arbejde. Formularen er \u00e5ben d\u00f8gnet rundt \u2014 jeg svarer som regel inden for en dag."
    },
    hoursChecking: { en: "Checking\u2026", da: "Tjekker\u2026" },
    hoursWeekdays: { en: "Monday \u2013 Friday", da: "Mandag \u2013 fredag" },
    hoursEvenWeekend: { en: "Saturday \u2013 Sunday in <em>even</em> weeks", da: "L\u00f8rdag \u2013 s\u00f8ndag i <em>lige</em> uger" },
    hoursOddWeekend: { en: "Saturday \u2013 Sunday in odd weeks", da: "L\u00f8rdag \u2013 s\u00f8ndag i ulige uger" },
    hoursClosed: { en: "Closed", da: "Lukket" },
    hoursWeekNote: { en: "Even weeks means week 2, 4, 6 and so on. This week is week", da: "Lige uger vil sige uge 2, 4, 6 og s\u00e5 videre. Denne uge er uge" },
    hoursWeekNoteEnd: { en: ".", da: "." },
    hoursOpenNow: { en: "Open now \u2014 until", da: "\u00c5bent nu \u2014 til" },
    hoursClosedNow: { en: "Closed now", da: "Lukket nu" },
    hoursOpensAt: { en: "opens at", da: "\u00e5bner kl." },
    hoursOpensMonday: { en: "opens Monday at 09.00", da: "\u00e5bner mandag kl. 09.00" },
    areasTitle: { en: "Where I come out to", da: "Hvor jeg kommer" },
    areasLead: {
      en: "You can drop the machine off in Hasselager, or I can come to you by appointment. I cover Hasselager and the area around it:",
      da: "Du kan aflevere maskinen i Hasselager, eller jeg kan komme ud til dig efter aftale. Jeg d\u00e6kker Hasselager og omr\u00e5det omkring:"
    },
    areasMore: {
      en: "If you live just outside the list, ask anyway. It is usually workable.",
      da: "Bor du lige uden for listen, s\u00e5 sp\u00f8rg alligevel. Det er som regel til at l\u00f8se."
    },
    outsideTitle: { en: "Outside opening hours", da: "Uden for \u00e5bningstiden" },
    outsideBody: {
      en: "Write through the contact form whenever you like. It lands straight in my system and you get an answer as soon as I open again. If it is urgent, say so in the message.",
      da: "Skriv via kontaktformularen n\u00e5r som helst. Den lander direkte i mit system, og du f\u00e5r svar, s\u00e5 snart jeg \u00e5bner igen. Haster det med en maskine, der ikke m\u00e5 st\u00e5 stille, s\u00e5 skriv det i beskeden."
    },
    hoursCta: { en: "Write to me", da: "Skriv til mig" },
    hoursTomorrowish: { en: "next opening day", da: "næste åbningsdag" },

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
    heroCtaPrimary: { en: "Describe your problem", da: "Beskriv dit problem" },

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
    step1Desc: { en: "Tell us what's wrong using the form below — the more detail, the better the estimate.", da: "Fortæl via formularen herunder, hvad der er galt — jo mere du skriver, jo bedre et prisoverslag kan jeg give." },
    step2Title: { en: "A fixed price", da: "Fast pris" },
    step2Desc: { en: "Drop it off with us, or book a home visit — either way, we'll quote a fair, flat price.", da: "Aflever den hos os, eller book et hjemmebesøg — under alle omstændigheder får du en fast, fair pris." },
    step3Title: { en: "We fix it", da: "Vi ordner den" },
    step3Desc: { en: "You approve the price, we do the work, and we test everything before handing it back.", da: "Du godkender prisen, vi udfører arbejdet, og vi tester alt, inden du får den tilbage." },
    step4Title: { en: "Back up and running", da: "Klar til brug igen" },
    step4Desc: { en: "Your computer, working the way it should — with a plain-language summary of what we did.", da: "Din computer, som den skal fungere — med en letforståelig opsummering af, hvad vi har gjort." },

    contactTitle: { en: "Let's fix your computer", da: "Lad os ordne din computer" },
    contactSub: { en: "Send us a few details and we'll get back to you — usually within a day.", da: "Send os et par detaljer, så vender vi tilbage — som regel inden for en dag." },
    labelServiceArea: { en: "Address", da: "Adresse" },
    serviceAreaValue: { en: "Hasselager, 8361, Denmark — drop-off. House calls by appointment.", da: "Hasselager, 8361 — aflevering. Kørsel ud efter aftale." },
    privacyNote: {
      en: "Your message goes straight to our inbox. We use your details only to answer your enquiry — nothing else, and we never pass them on.",
      da: "Din besked går direkte til vores indbakke. Vi bruger kun dine oplysninger til at besvare din henvendelse — intet andet, og vi giver dem aldrig videre."
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
      en: "Sonderbek IT fixes hardware and software problems on your home computer — fast, honest, and secure. Fixed price before the work starts. Open 09-23 on weekdays.",
      da: "Sonderbek IT løser hardware- og softwareproblemer på din computer — hurtigt, ærligt og sikkert. Fast pris, før arbejdet går i gang. Åbent 09-23 på hverdage."
    },

    errRequired: { en: "Please fill in your name and describe the issue.", da: "Udfyld venligst dit navn og beskriv problemet." },
    errEmail: { en: "Please enter a valid email address.", da: "Indtast venligst en gyldig e-mailadresse." },
    statusSending: { en: "Sending…", da: "Sender…" },
    statusSent: { en: "Thanks! Your message is on its way — we'll get back to you soon.", da: "Tak! Din besked er sendt — vi vender tilbage hurtigst muligt." },
    statusFailed: { en: "Couldn't send your message just now.", da: "Din besked kunne ikke sendes lige nu." },
    mailSubjectPrefix: { en: "Repair request from ", da: "Reparationsanmodning fra " },
    mailLabelName: { en: "Name", da: "Navn" },
    mailLabelEmail: { en: "Email", da: "E-mail" },
    mailLabelPhone: { en: "Phone", da: "Telefon" },

    themeToLight: { en: "Switch to light mode", da: "Skift til lys tilstand" },
    themeToDark: { en: "Switch to dark mode", da: "Skift til mørk tilstand" },

    fallbackIntro: {
      en: "Copy your message and email it to us directly instead — we'll get it either way:",
      da: "Kopiér din besked, og send den til os direkte i stedet — så når den frem alligevel:"
    },
    copyButton: { en: "Copy message", da: "Kopiér besked" },
    copyDone: { en: "Copied!", da: "Kopieret!" },
    copyFailed: { en: "Couldn't copy — please select the text above and copy it manually.", da: "Kunne ikke kopiere — markér teksten ovenfor, og kopiér den manuelt." }
  };

  var currentLang = "da";
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
    // The opening-hours badge is built from the clock rather than from a
    // dictionary key, so it has to be redrawn by hand after a language change.
    if (typeof renderOpeningState === "function") renderOpeningState();
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

  // ---- Opening hours ------------------------------------------------------
  // 09-23 Monday to Friday, and 12-19 at weekends in EVEN ISO weeks.
  //
  // Published hours that are wrong are worse than no hours at all - somebody
  // drives to Hasselager on a closed Saturday - so the badge is computed from
  // the same two rules the table states, rather than kept in step by hand.

  function isoWeek(d) {
    // ISO-8601: the week containing the Thursday. Sunday belongs to the week
    // that started on the preceding Monday, which is what makes a whole
    // weekend fall inside one week number.
    var t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    var dayNum = t.getUTCDay() || 7;
    t.setUTCDate(t.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
    return Math.ceil((((t - yearStart) / 86400000) + 1) / 7);
  }

  function openingState(now) {
    var day = now.getDay();                                  // 0 Sun .. 6 Sat
    var mins = now.getHours() * 60 + now.getMinutes();
    if (day >= 1 && day <= 5) {
      return { open: mins >= 540 && mins < 1380, opens: "09.00", closes: "23.00",
               early: mins < 540 };
    }
    if (isoWeek(now) % 2 === 0) {
      return { open: mins >= 720 && mins < 1140, opens: "12.00", closes: "19.00",
               early: mins < 720 };
    }
    return { open: false, closedAllDay: true };
  }

  var openNowEl = document.getElementById("openNow");
  var weekNumberEl = document.getElementById("weekNumber");

  function renderOpeningState() {
    var now = new Date();
    if (weekNumberEl) weekNumberEl.textContent = String(isoWeek(now));
    if (!openNowEl) return;
    var s = openingState(now);
    if (s.open) {
      openNowEl.textContent = t("hoursOpenNow") + " " + s.closes;
      openNowEl.setAttribute("data-state", "open");
    } else if (s.closedAllDay) {
      openNowEl.textContent = t("hoursClosedNow") + " \u2014 " + t("hoursOpensMonday");
      openNowEl.setAttribute("data-state", "closed");
    } else if (s.early) {
      openNowEl.textContent = t("hoursClosedNow") + " \u2014 " + t("hoursOpensAt") + " " + s.opens;
      openNowEl.setAttribute("data-state", "closed");
    } else {
      openNowEl.textContent = t("hoursClosedNow") + " \u2014 " + t("hoursOpensAt") + " "
        + s.opens + " (" + t("hoursTomorrowish") + ")";
      openNowEl.setAttribute("data-state", "closed");
    }
  }

  if (openNowEl || weekNumberEl) {
    renderOpeningState();
    // Cheap insurance against a tab left open across an opening or closing time.
    setInterval(renderOpeningState, 60000);
  }

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
  var FORM_ENDPOINT = "https://formsubmit.co/ajax/" + CONTACT_EMAIL;
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

      // Honeypot: real people never see this field, bots fill it in.
      if (form._honey && form._honey.value) return;

      if (!name || !message) {
        setStatus(t("errRequired"), "error");
        return;
      }
      if (!EMAIL_RE.test(email)) {
        setStatus(t("errEmail"), "error");
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      var bodyLines = [
        t("mailLabelName") + ": " + name,
        t("mailLabelEmail") + ": " + email,
        phone ? t("mailLabelPhone") + ": " + phone : null,
        "",
        message
      ].filter(function (line) { return line !== null; });

      function failed() {
        // Give them the message to copy, so a failed send is never a dead end.
        if (fallbackMessage && fallback) {
          fallbackMessage.textContent = bodyLines.join("\n");
          fallback.hidden = false;
        }
        setStatus(t("statusFailed"), "error");
      }

      if (submitBtn) submitBtn.disabled = true;
      setStatus(t("statusSending"), "");

      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone || "—",
          message: message,
          _subject: t("mailSubjectPrefix") + name,
          _replyto: email,
          _template: "table",
          _captcha: "false"
        })
      }).then(function (res) {
        if (!res.ok) throw new Error("Bad response " + res.status);
        return res.json();
      }).then(function (data) {
        // FormSubmit answers 200 even when it refuses to deliver (an
        // unactivated form, say), reporting the real outcome as the string
        // "true"/"false" in the body. Trusting the status code alone would
        // tell people their message was sent when it never left.
        if (!data || String(data.success) !== "true") {
          throw new Error((data && data.message) || "Send rejected");
        }
        setStatus(t("statusSent"), "success");
        form.reset();
        if (fallback) fallback.hidden = true;
      }).catch(failed).then(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
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

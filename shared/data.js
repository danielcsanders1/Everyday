/* Joy-Full Everyday — shared product data for all three sales-page concepts.
   Formula = SFP label v9. Competitor prices = brand sites, checked Nov 2026.
   PRICING BELOW IS A DEMO PLACEHOLDER — retail price has not been decided. Edit here and every page updates. */
window.JF = {
  brand: "Joy-Full Everyday",
  servings: 30,            // SFP v9: 30 servings, 8 gummies per serving (one daily pack)
  gummiesPerPack: 8,

  // ---- DEMO PRICING (placeholder) ----
  pricing: {
    isPlaceholder: true,
    oneTime: 99,                        // per pouch, one-time
    sub: { 1: 79, 2: 74, 3: 69 },       // per pouch, autoship, by pouches per delivery
    freeShipFrom: 1,                    // placeholder
    guaranteeDays: 30                   // placeholder
  },

  // ---- Buying it separately (30-day supply, list price from brand sites, Nov 2026) ----
  separate: [
    { key: "hair",  need: "Hair growth",             product: "Nutrafol Women",              oneTime: 88.00, sub: 79.00 },
    { key: "long",  need: "Longevity · Urolithin A", product: "Timeline Mitopure Gummies",   oneTime: 99.00, sub: 89.00 },
    { key: "heart", need: "Heart health",            product: "Qunol CoQ10 Gummies",         oneTime: 19.99, sub: 19.99 },
    { key: "gut",   need: "Gut health",              product: "OLLY Probiotic + Prebiotic",  oneTime: 13.99, sub: 11.89 },
    { key: "multi", need: "Daily vitamins",          product: "OLLY Women's Multi",          oneTime: 9.33,  sub: 7.93 }
  ],
  separateNote: "List prices for a 30-day supply from each brand's website, checked Nov 2026. OLLY Multi is $13.99 per 45 days ($9.33 per 30). Subscribe prices use each brand's posted discount; Qunol lists none. Products are not dose-for-dose equivalents (e.g. Mitopure 500 mg Urolithin A vs. our 250 mg).",

  // ---- Effects → hero ingredients (label v9 amounts) ----
  effects: [
    { key: "hair",  icon: "hair",  title: "Hair",       claim: "Supports thicker-looking, healthy hair*",      hero: "Biotin 7,500 mcg · MSM 750 mg · Saw Palmetto 200 mg · Sensoril® Ashwagandha 200 mg" },
    { key: "skin",  icon: "skin",  title: "Skin & Nails", claim: "Supports skin hydration and strong nails*",   hero: "Hyaluronic Acid 100 mg · L-Cysteine 150 mg · Zinc 25 mg · Vitamin C 93 mg" },
    { key: "long",  icon: "long",  title: "Longevity",  claim: "Supports cellular energy and renewal*",        hero: "Urolithin A 250 mg · MitoPrime® L-Ergothioneine 10 mg · Pomegranate" },
    { key: "gut",   icon: "gut",   title: "Gut",        claim: "Supports digestion and a balanced microbiome*", hero: "4 g FiberSmart® prebiotic fiber · 3 probiotic strains · Moringa & Kale" },
    { key: "heart", icon: "heart", title: "Heart",      claim: "Supports healthy circulation and heart function*", hero: "Beet Root 500 mg · CoQ10 150 mg · Lycopene 25 mg" },
    { key: "multi", icon: "multi", title: "Daily Multi", claim: "Fills everyday nutrient gaps*",               hero: "21 vitamins & minerals incl. D3 2,500 IU, methyl-B12, methylfolate" }
  ],

  // ---- Complexes (label v9) ----
  complexes: [
    { key: "beauty", name: "BeautyFull™ Hair & Skin Complex", total: "1,670 mg", color: "#e7a9c4",
      items: [["MSM","750 mg"],["Japanese Knotweed (resveratrol)","200 mg"],["Saw Palmetto","200 mg"],["Sensoril® Ashwagandha","200 mg"],["L-Cysteine","150 mg"],["Hyaluronic Acid","100 mg"],["Inositol","50 mg"],["Betaine","10 mg"],["BioPerine® Black Pepper","5 mg"],["Hesperidin","5 mg"]] },
    { key: "life", name: "Full-Life™ Longevity Complex", total: "≥260 mg", color: "#e4c76b",
      items: [["Urolithin A","250 mg"],["MitoPrime® L-Ergothioneine","10 mg"],["Pomegranate Extract","dose TBD"]] },
    { key: "gut", name: "Green GutFull™ Pre·Pro·Post Microbiome Complex", total: "4,040 mg", color: "#7fd1a4",
      items: [["FiberSmart® Resistant Dextrin (4 g fiber)","4,000 mg"],["L. coagulans L-137","25 mg"],["L. coagulans","10 mg"],["Bacillus subtilis","5 mg"],["Moringa Leaf","dose TBD"],["Kale","dose TBD"]] },
    { key: "heart", name: "HeartFull™ Cardiovascular Complex", total: "675 mg", color: "#f08a8a",
      items: [["Beet Root","500 mg"],["CoQ10","150 mg"],["Lycopene","25 mg"]] }
  ],

  vitamins: [["Vitamin A","1,500 mcg RAE","167%"],["Vitamin C","93 mg","103%"],["Vitamin D3","62.5 mcg (2,500 IU)","313%"],["Vitamin E","18 mg","120%"],["Thiamin","6 mg","500%"],["Riboflavin","6.5 mg","500%"],["Niacin","32 mg","200%"],["Vitamin B6 (P-5-P)","8.5 mg","500%"],["Folate (L-5-MTHF)","510 mcg DFE","128%"],["Vitamin B12 (methyl)","12 mcg","500%"],["Biotin","7,500 mcg","25,000%"],["Pantothenic Acid","10 mg","200%"],["Choline","20 mg","4%"]],
  minerals: [["Iron","4.5 mg","25%"],["Iodine","225 mcg","150%"],["Zinc","25 mg","227%"],["Selenium","200 mcg","364%"],["Copper","2 mg","222%"],["Manganese","0.57 mg","25%"],["Chromium","200 mcg","571%"],["Molybdenum","11 mcg","24%"]],

  faq: [
    ["How do I take it?", "Tear open one daily pack and eat all 8 dome gummies, any time of day. Each pouch holds 30 daily packs, so one pouch is one month."],
    ["What does it replace?", "A hair supplement, a longevity (Urolithin A) supplement, a CoQ10 heart supplement, a probiotic + prebiotic, and a daily multivitamin. Doses differ from each standalone product; see the full Supplement Facts."],
    ["How much fiber and sugar is in it?", "Each pack has 4 g of prebiotic fiber (14% DV) from FiberSmart®. Final sugar and calorie values will be confirmed once the gummy base is locked."],
    ["Are the probiotics shelf-stable?", "Yes. We use spore-forming strains (L. coagulans and Bacillus subtilis), which are built to survive shelf storage and stomach acid. No refrigeration needed."],
    ["Anything I should know before taking it?", "It contains 7,500 mcg of biotin, which can interfere with some lab tests, so tell your doctor before blood work. It also contains iron: keep out of reach of children. If you are pregnant, nursing, or on medication, check with your doctor first."],
    ["Can I pause or cancel?", "Yes. Autoship can be skipped, paused, or cancelled any time from your account."]
  ],

  disclaimer: "*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."
};

/* ---------- helpers shared by all pages ---------- */
JF.money = (v, d = 2) => "$" + Number(v).toFixed(d).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
JF.sepTotal = (plan = "oneTime", keys) => JF.separate.filter(p => !keys || keys.includes(p.key)).reduce((s, p) => s + p[plan], 0);
JF.price = (plan, qty) => plan === "sub" ? JF.pricing.sub[qty] : JF.pricing.oneTime;   // per pouch
JF.perDay = (plan, qty) => JF.price(plan, qty) / JF.servings;

JF.icon = (name, size = 28, stroke = "currentColor") => {
  const p = {
    hair:  '<path d="M7 20c0-6 1-12 5-15 4 3 5 9 5 15"/><path d="M10 20c0-5 .5-9 2-12"/><path d="M14 20c0-5-.5-9-2-12"/>',
    skin:  '<path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>',
    long:  '<path d="M6 3h12M6 21h12"/><path d="M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9"/>',
    gut:   '<path d="M8 3v4c0 2 2 3 4 3s4 1 4 3-2 3-4 3-4 1-4 3v2"/><path d="M16 3v3"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/><path d="M5 12h4l1.5-2 2 4 1.5-2H19"/>',
    multi: '<circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    x:     '<path d="M6 6l12 12M18 6L6 18"/>',
    shield:'<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
    truck: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/>',
    pause: '<circle cx="12" cy="12" r="9"/><path d="M10 9v6M14 9v6"/>',
    star:  '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'
  }[name] || "";
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
};

/* Concept ribbon: lists what is placeholder so nobody mistakes a mockup for launch copy. */
JF.ribbon = () => {
  const r = document.createElement("div");
  r.className = "jf-ribbon";
  r.innerHTML = `<b>Concept mockup</b> · demo pricing, guarantee, shipping, offer timer &amp; reviews are placeholders <button aria-label="Hide">×</button>`;
  r.style.cssText = "position:fixed;left:12px;bottom:12px;z-index:9999;background:#111;color:#fff;font:12px/1.4 system-ui,sans-serif;padding:8px 12px;border-radius:8px;opacity:.9;max-width:340px;box-shadow:0 6px 20px rgba(0,0,0,.3)";
  r.querySelector("button").style.cssText = "margin-left:8px;background:none;border:0;color:#fff;font-size:15px;cursor:pointer";
  if (matchMedia("(max-width:900px)").matches) { r.style.bottom = "auto"; r.style.top = "12px"; }
  r.querySelector("button").onclick = () => r.remove();
  document.body.appendChild(r);
};

/* Accordion: any [data-acc] button toggles its next sibling. */
JF.accordions = (root = document) => root.querySelectorAll("[data-acc]").forEach(b => b.addEventListener("click", () => {
  const open = b.getAttribute("aria-expanded") === "true";
  b.setAttribute("aria-expanded", String(!open));
  b.nextElementSibling.hidden = open;
}));

/* Countdown to a rolling midnight (placeholder offer timer). */
JF.countdown = (els) => {
  const tick = () => {
    const now = new Date(), end = new Date(now); end.setHours(24, 0, 0, 0);
    let s = Math.max(0, Math.floor((end - now) / 1000));
    const h = String(Math.floor(s / 3600)).padStart(2, "0"), m = String(Math.floor(s % 3600 / 60)).padStart(2, "0"), sec = String(s % 60).padStart(2, "0");
    els.forEach(el => el.innerHTML = `<span>${h}<small>h</small></span><span>${m}<small>m</small></span><span>${sec}<small>s</small></span>`);
  };
  tick(); setInterval(tick, 1000);
};

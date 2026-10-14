/* The Free Marketing Path — step data mirrors docs/the-path.md (generated from one source). */
const STEPS = [
  {
    "title": "Website — your home base",
    "goal": "A fast, credible home base on the internet that you own and control.",
    "why": "Everything else — search, social, referrals, outreach — points back to one place. If that place is a rented social profile, you don't own your front door.",
    "tools": "Cloudflare Pages or GitHub Pages (free static hosting); a hand-built static site or a free template; your own domain (optional); a lead-capture form (a hosted form endpoint or a form tool's free tier).",
    "cost": "$0. A domain is optional and runs roughly $10–15/yr if you buy one.",
    "time": "A weekend to launch a solid v1.",
    "checklist": [
      "Pick free hosting (Cloudflare Pages or GitHub Pages) and create the site",
      "Build the core pages: home, about, your offer, contact",
      "Add a lead-capture form so visitors can raise their hand",
      "Connect your own domain (optional, but it looks established)",
      "Check the site on your phone — most of your visitors will be on theirs"
    ],
    "powerties": "powerties.us is a plain static HTML site hosted free on Cloudflare Pages, wired to a GitHub repo — every push redeploys automatically. No page builder, no monthly hosting bill.",
    "n": 1
  },
  {
    "title": "Get found — Google Business Profile & Search Console",
    "goal": "Show up when someone nearby searches for what you do.",
    "why": "Most local buying starts with a search. Your Google Business Profile is the free listing that puts you on the map — literally — and Search Console is how you tell Google your site exists and see what people searched to find you.",
    "tools": "Google Business Profile (free); Google Search Console (free); your site's sitemap.xml.",
    "cost": "$0.",
    "time": "About an hour to set up; Google's verification can take a few days.",
    "checklist": [
      "Claim or create your Google Business Profile and complete every field — hours, services, photos",
      "Verify your site in Google Search Console",
      "Submit your sitemap in Search Console",
      "Write plain page titles and descriptions that say what you do and where",
      "Keep your business name, address, and phone identical everywhere — consistency matters"
    ],
    "powerties": "We verified Search Console ownership, submitted a sitemap with our four public pages, and removed a duplicate Business Profile listing — the surviving profile carries 8 reviews at 5.0 stars. Google asked us for a video re-verification; that's normal, budget the 20 minutes.",
    "n": 2
  },
  {
    "title": "AI-search visibility",
    "goal": "Be findable — and quotable — when people ask AI tools (ChatGPT, Gemini, Perplexity, Google's AI answers) for a recommendation.",
    "why": "Buyers increasingly ask an AI instead of scrolling search results. AI answers are built from pages that state facts plainly. Clear Q&A content plus structured data is what gets cited.",
    "tools": "A FAQ section on your homepage; FAQPage JSON-LD schema (free — it's just markup); the same business facts, kept consistent across your site and profiles.",
    "cost": "$0.",
    "time": "Half a day to write and mark up, once.",
    "checklist": [
      "Write 10–15 questions your buyers actually ask, in the words they use",
      "Answer each one plainly in 2–4 sentences with real facts — prices, areas served, who it's for",
      "Add FAQPage JSON-LD schema that matches the visible Q&As",
      "State one consistent public location (we say Queens, NY — no street address needed)",
      "Keep the same facts — name, services, prices — identical on every profile"
    ],
    "powerties": "Our homepage carries a 14-question FAQ written the way people actually ask AI, with matching FAQPage schema — live and verified on powerties.us.",
    "n": 3
  },
  {
    "title": "Content system",
    "goal": "Publish useful content on a rhythm you can sustain — without it eating your week.",
    "why": "Buyers check you out before they call. A steady drip of genuinely helpful posts builds the familiarity that makes you the obvious call, and every post is another page that search engines and AI tools can find.",
    "tools": "Buffer or Metricool free tiers for scheduling; LinkedIn and Facebook (or wherever your buyers are); a simple content calendar.",
    "cost": "$0 on free tiers.",
    "time": "One short session a week to draft and queue.",
    "checklist": [
      "Pick 3–5 pillar topics you can teach from real experience",
      "Set a weekly rhythm (ours: two pillar posts — Monday pure value, Wednesday with a soft quiz call-to-action)",
      "Draft a week of posts in one sitting and queue them in Buffer or Metricool",
      "Repurpose every idea: post → short video → email → FAQ answer",
      "Every couple of weeks, check what performed and lean the next posts toward the winners"
    ],
    "powerties": "A Sunday automation drafts our Monday and Wednesday pillar posts from the content calendar, checks the last two weeks of performance first so the winners set the treatment, and queues them on Buffer. No price in the posts — the quiz pages do that work.",
    "n": 4
  },
  {
    "title": "Lead magnet + quiz funnel",
    "goal": "Give strangers a free, useful first step that naturally points to your paid offer.",
    "why": "Most visitors aren't ready to buy, but many will trade an email address for a genuinely useful diagnostic. A quiz or assessment holds the qualifying conversation for you, 24/7.",
    "tools": "A free diagnostic or quiz page on your own site (static — no backend needed); Tally's free tier for forms; your CRM (Step 7) to catch the leads.",
    "cost": "$0.",
    "time": "A weekend to build the first version.",
    "checklist": [
      "Design a short quiz or diagnostic that surfaces the customer's real problem",
      "Make the result genuinely useful on its own — a snapshot, not a teaser",
      "Let the result prescribe the next step: your paid offer, with the price visible",
      "Route every completion into your CRM as a lead",
      "Link the quiz from your homepage, your posts, and your profiles"
    ],
    "powerties": "MLOT (Money Left on the Table) is our free diagnostic; two quizzes — AI-readiness and a mini-MLOT — feed it. The quizzes prescribe the $99 AI working session. The offer lands because the visitor just saw their own gaps, in their own numbers. See the live example on this very site: the MLOT page (mlot.html, in the menu above) is our real funnel, not a mockup — free diagnostic first, $99 session second.",
    "n": 5
  },
  {
    "title": "Booking + payment",
    "goal": "Let a ready buyer book and pay without a single back-and-forth email.",
    "why": "Every manual step between “I'm interested” and a paid, booked call leaks buyers. A booking link plus a payment link removes the friction entirely.",
    "tools": "Cal.com (free tier) for booking; Square payment links (no monthly fee — standard card processing applies per sale).",
    "cost": "$0 fixed. Square takes its normal processing cut only when you make a sale.",
    "time": "An afternoon to set up and test.",
    "checklist": [
      "Create a booking page for your intro or paid session, with clear duration and a few smart intake questions",
      "Create a Square payment link for your entry offer",
      "Wire the flow together: payment triggers the booking email, or booking sends the payment link — pick one order and test it",
      "Put the booking link on your site, your quiz results page, and your email signature",
      "Run one end-to-end test booking from your phone before you share the link anywhere"
    ],
    "powerties": "A completed Square payment of exactly $99.00 triggers our booking email (with the calendar link), alerts us, and updates the contact in Zoho — automatically. Our own stack research found Cal.com's free tier stronger than the big-name schedulers' free tiers, which is why it's the recommendation here. Either way, the pattern is the point: pay → book → CRM.",
    "n": 6
  },
  {
    "title": "CRM + automation",
    "goal": "Every lead, reply, and customer tracked in one place — software does the busywork, and a human approves anything that leaves the building.",
    "why": "Leads die in inboxes. A CRM remembers what you won't, and automation handles the filing, summarizing, and reminding. The rule that keeps it safe: AI can draft; a human approves every outward send.",
    "tools": "Zoho CRM (a free tier exists); n8n for workflow automation (self-hosted); your existing email account.",
    "cost": "$0 on the free CRM tier. Honesty note: PowerTies pays about $13.49/mo for a small VPS so n8n runs around the clock — it is the only recurring cost in this entire stack. You can run n8n on your own computer for $0.",
    "time": "A weekend to wire the basics; an hour here and there to improve it.",
    "checklist": [
      "Set up Zoho CRM (free tier) with Leads and Contacts",
      "Connect your lead sources: website form and quiz completions become CRM leads automatically",
      "Add an approval flow: inbound replies get drafted responses, and a human approves before anything sends",
      "Add a daily lead summary so a new lead never sits unseen",
      "Write down your one inviolable rule: no automated outward sends without human approval"
    ],
    "powerties": "n8n runs our email triage (AI-drafted replies that a human approves before sending), CRM lead creation, a morning lead digest, and Square payment handling. It all runs on that one $13.49/mo VPS — everything else in the stack is free.",
    "n": 7
  },
  {
    "title": "Reviews + directories",
    "goal": "A steady trickle of fresh reviews, and your business listed accurately everywhere that's free.",
    "why": "Reviews are the proof strangers trust most, and directory listings are free shelf space. Most small businesses simply never ask. Asking — systematically, every time — is the whole trick.",
    "tools": "Your Google review link; free listings (Bing Places, Apple Maps, Yelp, BBB); a Nextdoor free Business Page; niche directories for your trade (Clutch, for B2B services).",
    "cost": "$0.",
    "time": "A couple of hours to claim listings; after that, the review ask becomes routine.",
    "checklist": [
      "Get your Google review short link from your Business Profile",
      "Build a short post-job review request — ours links Google plus one niche directory — and send it after every finished job",
      "Claim your free listings: Bing Places, Apple Maps, Yelp, BBB",
      "Claim a Nextdoor Business Page and post one useful tip a week",
      "Respond to every review — yes, the awkward ones too — briefly and graciously"
    ],
    "powerties": "Our Google profile carries 8 reviews at 5.0 stars and our Clutch profile is published (Business Consulting, AI Consulting, CRM Consulting). Both were built the same unglamorous way: do the work, then ask — with a direct link — every time.",
    "n": 8
  },
  {
    "title": "Community",
    "goal": "Be a known, helpful regular in the places your buyers already hang out.",
    "why": "Buyers trust people they've watched be useful. Communities are also free market research: you hear the exact words customers use for their problems — the same words your FAQ and your posts should use.",
    "tools": "Reddit subreddits for your trade and town; Facebook groups; Discord servers; Nextdoor; F5Bot (free) for keyword alerts.",
    "cost": "$0.",
    "time": "20–30 minutes, a few times a week.",
    "checklist": [
      "Join 3–5 communities where your buyers ask questions — trade subs, local groups, industry Discords",
      "Spend your first two weeks answering questions genuinely: no links, no pitch",
      "Set up F5Bot keyword alerts for your trade and your town so you never miss a relevant thread",
      "Disclose who you are on the occasions you share your own process or results",
      "Keep a notes file of the best questions you see — they become your posts and FAQs"
    ],
    "powerties": "This step is the one we're launching alongside this repo: powertiesbiz community accounts, sharing our actual process and numbers, and asking other owners what's working for them. Answer first, self-mention last.",
    "n": 9
  },
  {
    "title": "Partnerships & barter",
    "goal": "Trade skill, audience, and trust instead of cash — grow through other people's customers and capabilities.",
    "why": "Cash is the scarcest thing a small business has; skill and audience are not. A complementary business already talks to your next customers, and barter lets you buy what you need — design, bookkeeping, content — with what you already have: your expertise.",
    "tools": "Four mechanisms: (1) Referral partnerships with complementary, non-competing businesses — shared audiences, two-way referrals, a simple referral fee or a reciprocal arrangement. (2) Direct service barters — swap your offer for design, bookkeeping, content, or podcast slots. (3) Co-marketing — joint webinars or sessions, newsletter swaps, guest posts, podcast guesting, bundled offers. (4) Organized barter exchanges (e.g., IMS Barter, ITEX) — trade-dollar networks that widen the pool.",
    "cost": "$0 cash for direct partnerships and barters — your time and your delivered work are the currency. Exchanges charge cash fees on transactions, so run their numbers before you join one.",
    "time": "A few hours to map and pitch your first partners; the relationships compound from there.",
    "checklist": [
      "Map 10 complementary, non-competing businesses that serve the same customers you want",
      "Draft a one-page barter/partnership agreement: scope, the value each side gives, the timeline, and what happens if one side stalls",
      "Pitch 3 partners this week — and lead with what their customers get out of it",
      "Put every arrangement in writing, even between friends — especially between friends",
      "Track who sent you work and who you sent work to; reciprocity you can see stays healthy"
    ],
    "notes": [
      "Barter income is taxable in the US at fair-market value — barter exchanges report it on Form 1099-B. Treat traded work as real revenue, because the IRS does.",
      "Value mismatches and one-sided drift kill barters. Price both sides at your normal rates, and check in early, before resentment does.",
      "Win-win-win or don't: good for your partner, good for their customer, good for you. If any leg of that fails, walk away."
    ],
    "powerties": "Keith's Guild of Honour network and his referral contacts — a business-financing contact, a content and ghostwriting contact — are exactly this channel. The lesson we've learned firsthand: these relationships only pay when they're actively worked, not just collected.",
    "n": 10
  },
  {
    "title": "Outreach + measurement",
    "goal": "A small, honest, measurable flow of new conversations — and the discipline to know whether it's working.",
    "why": "Most outreach fails quietly because nobody measures it. A scored list, verified emails, small daily batches, and a weekly grading loop turn guessing into a system you can actually improve.",
    "tools": "Your own lead research (search, directories, community listening from Step 9); an email verifier before sending; your CRM for tracking; a simple grading routine — a spreadsheet works.",
    "cost": "$0 to near-$0. Verifiers have free tiers; the discipline is free.",
    "time": "About 30 minutes a day for sends; an hour a week to grade.",
    "checklist": [
      "Build a lead list of named decision-makers at businesses that fit — and score each lead's fit before anyone gets emailed",
      "Verify every email address before sending. Never guess an address pattern: guessed addresses bounce, and bounces destroy your deliverability",
      "Send small daily batches (we do about 10 a day, weekdays only) and log every send",
      "Track the funnel honestly: sent → delivered → replied → paid → revenue",
      "Grade weekly: which score bands and sources produced replies? Refine your criteria from the evidence, not from vibes",
      "Set a 30-day checkpoint in advance: if replies are still zero, diagnose the real cause — deliverability, message, targeting, offer, channel — instead of just sending more"
    ],
    "powerties": "Our outreach engine runs exactly this loop: roughly 10 verified emails a day, a fit-scoring model, a Sunday grading report, and a hard 30-day checkpoint. Early lesson, learned the expensive way: guessed email addresses were our biggest source of bounces. Removing guessing was the single biggest deliverability fix we ever made.",
    "n": 11
  }
];

const STORAGE_KEY = "free-marketing-path-progress-v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) { const s = JSON.parse(raw); if (s && s.checked) return s; }
  } catch (e) { /* corrupted state: start fresh */ }
  return { checked: {}, open: null };
}
let state = loadState();

const totalItems = STEPS.reduce((sum, s) => sum + s.checklist.length, 0);

function key(n, i) { return n + "-" + i; }
function stepCheckedCount(step) {
  return step.checklist.filter((_, i) => state.checked[key(step.n, i)]).length;
}
function stepDone(step) { return stepCheckedCount(step) === step.checklist.length; }
function firstIncomplete() { return STEPS.find(s => !stepDone(s)) || null; }
if (state.open === null || state.open === undefined) {
  const f = firstIncomplete();
  state.open = f ? f.n : 1;
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
}

function updateProgress() {
  const doneCount = Object.keys(state.checked).filter(k => state.checked[k]).length;
  const pct = Math.round((doneCount / totalItems) * 100);
  document.getElementById("progress-fill").style.width = pct + "%";
  const current = firstIncomplete();
  const status = document.getElementById("progress-status");
  if (current) {
    status.textContent = "Step " + current.n + " of " + STEPS.length + " \u2014 " + pct + "% of the path complete";
  } else {
    status.textContent = "All " + STEPS.length + " steps complete \u2014 100% of the path complete. Now keep it running.";
  }
  document.getElementById("progress-count").textContent =
    doneCount + " of " + totalItems + " checklist items done";
}

function refreshStep(step) {
  const section = document.getElementById("step-" + step.n);
  if (!section) return;
  section.classList.toggle("is-done", stepDone(step));
  section.querySelector(".step-count").textContent =
    stepCheckedCount(step) + "/" + step.checklist.length;
  section.querySelector(".step-pill").textContent = stepDone(step) ? "Complete" : "In progress";
}

function el(tag, cls, text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
}

function render() {
  const wrap = document.getElementById("steps");
  wrap.innerHTML = "";
  STEPS.forEach(step => {
    const section = el("section", "step" + (stepDone(step) ? " is-done" : ""));
    section.id = "step-" + step.n;

    const head = el("button", "step-head");
    head.type = "button";
    const isOpen = state.open === step.n;
    head.setAttribute("aria-expanded", isOpen ? "true" : "false");
    const num = el("span", "step-num", "Step " + step.n);
    const title = el("span", "step-title", step.title);
    const count = el("span", "step-count", stepCheckedCount(step) + "/" + step.checklist.length);
    const pill = el("span", "step-pill", stepDone(step) ? "Complete" : "In progress");
    const chev = el("span", "step-chev", isOpen ? "\u25B2" : "\u25BC");
    head.append(num, title, count, pill, chev);

    const body = el("div", "step-body");
    body.hidden = !isOpen;
    head.addEventListener("click", () => {
      const nowOpen = body.hidden;
      body.hidden = !nowOpen;
      head.setAttribute("aria-expanded", nowOpen ? "true" : "false");
      chev.textContent = nowOpen ? "\u25B2" : "\u25BC";
      state.open = nowOpen ? step.n : null;
      saveState();
    });

    body.append(el("p", "goal", step.goal));
    const whyP = el("p", null);
    const whyB = el("strong", null, "Why it matters: ");
    whyP.append(whyB, document.createTextNode(step.why));
    body.append(whyP);

    const meta = el("dl", "step-meta");
    [["Tools", step.tools], ["Cost", step.cost], ["Time", step.time]].forEach(pair => {
      const dt = el("dt", null, pair[0]);
      const dd = el("dd", null, pair[1]);
      meta.append(dt, dd);
    });
    body.append(meta);

    const list = el("ul", "checklist");
    step.checklist.forEach((item, i) => {
      const li = el("li", null);
      const label = el("label", null);
      const box = document.createElement("input");
      box.type = "checkbox";
      box.checked = !!state.checked[key(step.n, i)];
      box.addEventListener("change", () => {
        state.checked[key(step.n, i)] = box.checked;
        saveState();
        refreshStep(step);
        updateProgress();
      });
      label.append(box, document.createTextNode(" " + item));
      li.append(label);
      list.append(li);
    });
    body.append(list);

    if (step.notes && step.notes.length) {
      const notes = el("div", "step-notes");
      notes.append(el("strong", null, "Straight talk:"));
      const ul = el("ul", null);
      step.notes.forEach(nt => ul.append(el("li", null, nt)));
      notes.append(ul);
      body.append(notes);
    }

    const pt = el("p", "powerties-note");
    pt.append(el("strong", null, "How PowerTies does it: "), document.createTextNode(step.powerties));
    body.append(pt);

    section.append(head, body);
    wrap.append(section);
  });
  updateProgress();
}

document.getElementById("reset-progress").addEventListener("click", () => {
  if (!confirm("Reset all progress on this device?")) return;
  state = { checked: {}, open: 1 };
  saveState();
  render();
});

render();


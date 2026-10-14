# The Path — the full blueprint

This is the exact system PowerTies (a one-person consulting business in Queens, NY) runs to market itself for $0 — with one honest exception, a ≈$15/mo server for automation, covered at Step 7. Every step is $0 or near-$0, every tool named is the real tool, and every step includes how we actually do it.

**The principles underneath all of it:**

- Own your front door. Build on assets you control (your site, your list, your CRM), not on rented profiles.
- Free beats fancy. A plain tool used every week beats an expensive one used twice.
- A human approves every outward send. Automation files, drafts, and reminds — people talk to people.
- Measure honestly. Small numbers you trust beat big numbers you imagine.
- Win-win-win. Good for you, good for your partners, good for the customer — or don't do it.

### The ring leader

A path like this produces work in every direction: research, verification, publishing, scheduling, follow-up, measurement, and maintenance. Somebody — or something — has to coordinate it, notice what is late, and report what the numbers say.

PowerTies assigns that role to Tank, an AI agent, with Keith as approver. Tank coordinates the research, verification, website and CRM work, automations, outreach, and reporting; Keith approves outward actions. A solo owner can wear the ring-leader hat themselves for $0. The cost is time — which is exactly why PowerTies automated the role.

You can also staff the ring leader for $0 with an open-source agent framework — PowerTies runs a second agent, Jada, on OpenClaw with free model backends (Groq/OpenRouter free tiers) handling its Telegram command interface. Honest caveats: free tiers rate-limit on heavy work, and setup takes some technical comfort — but the role does not require a paid assistant.

## Step 1: Website — your home base

**Goal:** A fast, credible home base on the internet that you own and control.

**Why it matters:** Everything else — search, social, referrals, outreach — points back to one place. If that place is a rented social profile, you don't own your front door.

**Tools:** Cloudflare Pages or GitHub Pages (free static hosting); a hand-built static site or a free template; your own domain (optional); a lead-capture form (a hosted form endpoint or a form tool's free tier).

**Estimated cost:** $0. A domain is optional and runs roughly $10–15/yr if you buy one.

**Estimated time:** A weekend to launch a solid v1.

**Checklist:**

- [ ] Pick free hosting (Cloudflare Pages or GitHub Pages) and create the site
- [ ] Build the core pages: home, about, your offer, contact
- [ ] Add a lead-capture form so visitors can raise their hand
- [ ] Connect your own domain (optional, but it looks established)
- [ ] Check the site on your phone — most of your visitors will be on theirs

**How PowerTies does it:** powerties.us is a plain static HTML site hosted free on Cloudflare Pages, wired to a GitHub repo — every push redeploys automatically. No page builder, no monthly hosting bill.

## Step 2: Get found — Google Business Profile & Search Console

**Goal:** Show up when someone nearby searches for what you do.

**Why it matters:** Most local buying starts with a search. Your Google Business Profile is the free listing that puts you on the map — literally — and Search Console is how you tell Google your site exists and see what people searched to find you.

**Tools:** Google Business Profile (free); Google Search Console (free); your site's sitemap.xml.

**Estimated cost:** $0.

**Estimated time:** About an hour to set up; Google's verification can take a few days.

**Checklist:**

- [ ] Claim or create your Google Business Profile and complete every field — hours, services, photos
- [ ] Verify your site in Google Search Console
- [ ] Submit your sitemap in Search Console
- [ ] Write plain page titles and descriptions that say what you do and where
- [ ] Keep your business name, address, and phone identical everywhere — consistency matters

**How PowerTies does it:** We verified Search Console ownership, submitted a sitemap with our four public pages, and removed a duplicate Business Profile listing — the surviving profile carries 8 reviews at 5.0 stars. Google asked us for a video re-verification; that's normal, budget the 20 minutes.

## Step 3: AI-search visibility

**Goal:** Be findable — and quotable — when people ask AI tools (ChatGPT, Gemini, Perplexity, Google's AI answers) for a recommendation.

**Why it matters:** Buyers increasingly ask an AI instead of scrolling search results. AI answers are built from pages that state facts plainly. Clear Q&A content plus structured data is what gets cited.

**Tools:** A FAQ section on your homepage; FAQPage JSON-LD schema (free — it's just markup); the same business facts, kept consistent across your site and profiles.

**Estimated cost:** $0.

**Estimated time:** Half a day to write and mark up, once.

**Checklist:**

- [ ] Write 10–15 questions your buyers actually ask, in the words they use
- [ ] Answer each one plainly in 2–4 sentences with real facts — prices, areas served, who it's for
- [ ] Add FAQPage JSON-LD schema that matches the visible Q&As
- [ ] State one consistent public location (we say Queens, NY — no street address needed)
- [ ] Keep the same facts — name, services, prices — identical on every profile

**How PowerTies does it:** Our homepage carries a 14-question FAQ written the way people actually ask AI, with matching FAQPage schema — live and verified on powerties.us.

## Step 4: Content system

**Goal:** Publish useful content on a rhythm you can sustain — without it eating your week.

**Why it matters:** Buyers check you out before they call. A steady drip of genuinely helpful posts builds the familiarity that makes you the obvious call, and every post is another page that search engines and AI tools can find.

**Tools:** Buffer or Metricool free tiers for scheduling; LinkedIn and Facebook (or wherever your buyers are); a simple content calendar.

**Estimated cost:** $0 on free tiers.

**Estimated time:** One short session a week to draft and queue.

**Checklist:**

- [ ] Pick 3–5 pillar topics you can teach from real experience
- [ ] Set a weekly rhythm (ours: two pillar posts — Monday pure value, Wednesday with a soft quiz call-to-action)
- [ ] Draft a week of posts in one sitting and queue them in Buffer or Metricool
- [ ] Repurpose every idea: post → short video → email → FAQ answer
- [ ] Every couple of weeks, check what performed and lean the next posts toward the winners

**How PowerTies does it:** A Sunday automation drafts our Monday and Wednesday pillar posts from the content calendar, checks the last two weeks of performance first so the winners set the treatment, and queues them on Buffer. No price in the posts — the quiz pages do that work.

## Step 5: Lead magnet + quiz funnel

**Goal:** Give strangers a free, useful first step that naturally points to your paid offer.

**Why it matters:** Most visitors aren't ready to buy, but many will trade an email address for a genuinely useful diagnostic. A quiz or assessment holds the qualifying conversation for you, 24/7.

**Tools:** A free diagnostic or quiz page on your own site (static — no backend needed); Tally's free tier for forms; your CRM (Step 7) to catch the leads.

**Estimated cost:** $0.

**Estimated time:** A weekend to build the first version.

**Checklist:**

- [ ] Design a short quiz or diagnostic that surfaces the customer's real problem
- [ ] Make the result genuinely useful on its own — a snapshot, not a teaser
- [ ] Let the result prescribe the next step: your paid offer, with the price visible
- [ ] Route every completion into your CRM as a lead
- [ ] Link the quiz from your homepage, your posts, and your profiles

**How PowerTies does it:** MLOT (Money Left on the Table) is our free diagnostic; two quizzes — AI-readiness and a mini-MLOT — feed it. The quizzes prescribe the $99 AI working session. The offer lands because the visitor just saw their own gaps, in their own numbers.

## Step 6: Booking + payment

**Goal:** Let a ready buyer book and pay without a single back-and-forth email.

**Why it matters:** Every manual step between “I'm interested” and a paid, booked call leaks buyers. A booking link plus a payment link removes the friction entirely.

**Tools:** Cal.com (free tier) for booking; Square payment links (no monthly fee — standard card processing applies per sale).

**Estimated cost:** $0 fixed. Square takes its normal processing cut only when you make a sale.

**Estimated time:** An afternoon to set up and test.

**Checklist:**

- [ ] Create a booking page for your intro or paid session, with clear duration and a few smart intake questions
- [ ] Create a Square payment link for your entry offer
- [ ] Wire the flow together: payment triggers the booking email, or booking sends the payment link — pick one order and test it
- [ ] Put the booking link on your site, your quiz results page, and your email signature
- [ ] Run one end-to-end test booking from your phone before you share the link anywhere

**How PowerTies does it:** A completed Square payment of exactly $99.00 triggers our booking email (with the calendar link), alerts us, and updates the contact in Zoho — automatically. Our own stack research found Cal.com's free tier stronger than the big-name schedulers' free tiers, which is why it's the recommendation here. Either way, the pattern is the point: pay → book → CRM.

## Step 7: CRM + automation

**Goal:** Every lead, reply, and customer tracked in one place — software does the busywork, and a human approves anything that leaves the building.

**Why it matters:** Leads die in inboxes. A CRM remembers what you won't, and automation handles the filing, summarizing, and reminding. The rule that keeps it safe: AI can draft; a human approves every outward send.

**Tools:** Zoho CRM (a free tier exists); n8n for workflow automation (self-hosted); your existing email account.

**Estimated cost:** $0 on the free CRM tier. Honesty note: PowerTies pays ≈$15/mo for a small VPS so n8n runs around the clock — it is the only recurring cost in this entire stack. You can run n8n on your own computer for $0.

**Estimated time:** A weekend to wire the basics; an hour here and there to improve it.

**Checklist:**

- [ ] Set up Zoho CRM (free tier) with Leads and Contacts
- [ ] Connect your lead sources: website form and quiz completions become CRM leads automatically
- [ ] Add an approval flow: inbound replies get drafted responses, and a human approves before anything sends
- [ ] Add a daily lead summary so a new lead never sits unseen
- [ ] Write down your one inviolable rule: no automated outward sends without human approval

**How PowerTies does it:** n8n runs our email triage (AI-drafted replies that a human approves before sending), CRM lead creation, a morning lead digest, and Square payment handling. It all runs on that one ≈$15/mo VPS — everything else in the stack is free.

## Step 8: Reviews + directories

**Goal:** A steady trickle of fresh reviews, and your business listed accurately everywhere that's free.

**Why it matters:** Reviews are the proof strangers trust most, and directory listings are free shelf space. Most small businesses simply never ask. Asking — systematically, every time — is the whole trick.

**Tools:** Your Google review link; free listings (Bing Places, Apple Maps, Yelp, BBB); a Nextdoor free Business Page; niche directories for your trade (Clutch, for B2B services).

**Estimated cost:** $0.

**Estimated time:** A couple of hours to claim listings; after that, the review ask becomes routine.

**Checklist:**

- [ ] Get your Google review short link from your Business Profile
- [ ] Build a short post-job review request — ours links Google plus one niche directory — and send it after every finished job
- [ ] Claim your free listings: Bing Places, Apple Maps, Yelp, BBB
- [ ] Claim a Nextdoor Business Page and post one useful tip a week
- [ ] Respond to every review — yes, the awkward ones too — briefly and graciously

**How PowerTies does it:** Our Google profile carries 8 reviews at 5.0 stars and our Clutch profile is published (Business Consulting, AI Consulting, CRM Consulting). Both were built the same unglamorous way: do the work, then ask — with a direct link — every time.

## Step 9: Community

**Goal:** Be a known, helpful regular in the places your buyers already hang out.

**Why it matters:** Buyers trust people they've watched be useful. Communities are also free market research: you hear the exact words customers use for their problems — the same words your FAQ and your posts should use.

**Tools:** Reddit subreddits for your trade and town; Facebook groups; Discord servers; Nextdoor; F5Bot (free) for keyword alerts.

**Estimated cost:** $0.

**Estimated time:** 20–30 minutes, a few times a week.

**Checklist:**

- [ ] Join 3–5 communities where your buyers ask questions — trade subs, local groups, industry Discords
- [ ] Spend your first two weeks answering questions genuinely: no links, no pitch
- [ ] Set up F5Bot keyword alerts for your trade and your town so you never miss a relevant thread
- [ ] Disclose who you are on the occasions you share your own process or results
- [ ] Keep a notes file of the best questions you see — they become your posts and FAQs

**How PowerTies does it:** This step is the one we're launching alongside this repo: powertiesbiz community accounts, sharing our actual process and numbers, and asking other owners what's working for them. Answer first, self-mention last.

## Step 10: Partnerships & barter

**Goal:** Trade skill, audience, and trust instead of cash — grow through other people's customers and capabilities.

**Why it matters:** Cash is the scarcest thing a small business has; skill and audience are not. A complementary business already talks to your next customers, and barter lets you buy what you need — design, bookkeeping, content — with what you already have: your expertise.

**Tools:** Four mechanisms: (1) Referral partnerships with complementary, non-competing businesses — shared audiences, two-way referrals, a simple referral fee or a reciprocal arrangement. (2) Direct service barters — swap your offer for design, bookkeeping, content, or podcast slots. (3) Co-marketing — joint webinars or sessions, newsletter swaps, guest posts, podcast guesting, bundled offers. (4) Organized barter exchanges (e.g., IMS Barter, ITEX) — trade-dollar networks that widen the pool.

**Estimated cost:** $0 cash for direct partnerships and barters — your time and your delivered work are the currency. Exchanges charge cash fees on transactions, so run their numbers before you join one.

**Estimated time:** A few hours to map and pitch your first partners; the relationships compound from there.

**Checklist:**

- [ ] Map 10 complementary, non-competing businesses that serve the same customers you want
- [ ] Draft a one-page barter/partnership agreement: scope, the value each side gives, the timeline, and what happens if one side stalls
- [ ] Pitch 3 partners this week — and lead with what their customers get out of it
- [ ] Put every arrangement in writing, even between friends — especially between friends
- [ ] Track who sent you work and who you sent work to; reciprocity you can see stays healthy

**Straight talk:**

- Barter income is taxable in the US at fair-market value — barter exchanges report it on Form 1099-B. Treat traded work as real revenue, because the IRS does.
- Value mismatches and one-sided drift kill barters. Price both sides at your normal rates, and check in early, before resentment does.
- Win-win-win or don't: good for your partner, good for their customer, good for you. If any leg of that fails, walk away.

**How PowerTies does it:** Keith's Guild of Honour network and his referral contacts — a business-financing contact, a content and ghostwriting contact — are exactly this channel. The lesson we've learned firsthand: these relationships only pay when they're actively worked, not just collected.

## Step 11: Outreach + measurement

**Goal:** A small, honest, measurable flow of new conversations — and the discipline to know whether it's working.

**Why it matters:** Most outreach fails quietly because nobody measures it. A scored list, verified emails, small daily batches, and a weekly grading loop turn guessing into a system you can actually improve.

**Tools — the actual PowerTies setup:** Claude (paid plan) is the lead-research leg: it finds company names, their location/context, and why each company fits. Apollo.io's free tier is an optional lead-data accelerator — PowerTies' Apollo leg is currently paused until its October 24, 2026 credit refresh. Tank coordinates this pooled model, verifies every address, and sends. Zoho CRM holds the records, and a spreadsheet or grading-sheet template is enough for the weekly grade. The generic route still works: do the research yourself with search, directories, and community listening from Step 9 — and never send to an address you have not verified.

**Estimated cost:** $0 to near-$0 for the generic route. PowerTies chooses Claude at ≈$21/mo for research speed; Apollo is optional on its free tier. Verifiers have free tiers; the discipline is free.

**Estimated time:** About 30 minutes a day for sends; an hour a week to grade.

**Checklist:**

- [ ] Build a lead list of named decision-makers at businesses that fit — and score each lead's fit before anyone gets emailed
- [ ] Verify every email address before sending. Never guess an address pattern: guessed addresses bounce, and bounces destroy your deliverability
- [ ] Send small daily batches (we do about 10 a day, weekdays only) and log every send
- [ ] Track the funnel honestly: sent → delivered → replied → paid → revenue
- [ ] Grade weekly: which score bands and sources produced replies? Refine your criteria from the evidence, not from vibes
- [ ] Set a 30-day checkpoint in advance: if replies are still zero, diagnose the real cause — deliverability, message, targeting, offer, channel — instead of just sending more

**How PowerTies does it:** Our outreach engine is pooled: Claude finds companies and makes the fit case, Tank verifies the published addresses and sends roughly 10 a day, and the results run through a fit-scoring model, a Sunday grading report, and a hard 30-day checkpoint. Early lesson, learned the expensive way: guessed email addresses were our biggest source of bounces. Removing guessing was the single biggest deliverability fix we ever made.

## Step 12: Find your niche and research the solution

**Goal:** Aim the whole system at one niche — and get smart about its problems. Research the solution space for a specific audience using three sources: open resources and repos (this one included, and the resource base growing around it), AI (deep research, summarizing, pattern-spotting across many conversations), and the public forums where the niche actually talks — Reddit subs, Discord servers, Facebook groups, industry forums — then participate in those forums, not just read them.

**Why it matters:** Steps 1–11 build the machine; this step aims it. You learn a niche's real pains — in their own words — by listening where they complain, ask, and compare notes. Participation converts research into relationships, and it loops straight back into Step 9 (Community) and Step 10 (Partnerships & barter): the forums are where both live.

**Tools:** This repo and open resources like it; AI chat and deep-research tools; the forums themselves; F5Bot keyword alerts for your niche's terms (the same listening setup as Step 9); a simple pains log — a doc or a spreadsheet is enough.

**Estimated cost:** $0 — time only.

**Estimated time:** Two weeks of listening to start; after that it's a standing habit, not a project.

**Checklist:**

- [ ] Pick one niche candidate: a specific who with a specific, expensive problem
- [ ] Spend two weeks listening in 3–5 forums where they talk before posting anything
- [ ] Keep a pains log — their exact words for their problems, not your paraphrase
- [ ] Use AI to cluster the pains and draft the solution angle they point to
- [ ] Participate genuinely — answer, share your process — and note what resonates
- [ ] Test ONE niche-specific lead magnet or offer, and feed the results back into Step 4 (content) and Step 11 (outreach)

**Straight talk:**

- Some say pick the niche first. In the PowerTies sequence the system came first and the niche sharpened through doing — research lands better when you already have something real to offer.

**How PowerTies does it:** Our niche sharpened through the Guild of Honour and the veteran-trades work — found by participating in those communities, not by desk research alone. The forum listening from Step 9, plus keyword alerts that flag the conversations worth joining, is what surfaces the pains in the first place.

---

Walk it in the interactive UI: open `index.html` in this repo (or the GitHub Pages site) and check items off as you go — progress saves in your own browser. Nothing is uploaded anywhere; there is no database and no account.

# Lead Engine v2 — Combined Discovery Design (Oct 2026)

**Prepared for:** Keith Tully, PowerTies Consulting Group
**Prepared by:** Tank
**Date:** October 15, 2026
**Status:** Design for review. No new leg sends email until the pilot in Section 8 passes and Keith approves moving it into the normal weekday run.

---

## 1. What this is, in one page

PowerTies already has an outreach pipeline that works like an assembly line:

1. **Find** candidate businesses.
2. **Score** each one for fit (Stage 1 scoring, 0–100, cutoff 55).
3. **Verify** the email address. Anything weak is dropped, permanently.
4. **Send** — at most 10 emails on a weekday, never on weekends unless Keith says so.
5. **Grade** the results every Sunday, by score band, so we learn what actually delivered instead of guessing.

That assembly line is the **sacred contract**. Lead Engine v2 does not replace it, does not change the email wording, and does not change who we target (the Ideal Client Profile, or ICP). V2 only adds better ways to **find** candidates and fill the front of the same line.

Today the front of the line depends heavily on web searches run one business at a time. That is slow, the quality is uneven, and on October 15 the old path passed verification for only **2 out of 10** leads. We need more raw candidates, from more places, with the email address and the owner's name *found on the business's own public pages* — not guessed.

V2 does that by combining four free, open-source or public-data tools:

| New piece | Job in plain language | Where its results go |
|---|---|---|
| **Google Maps scraper** (gosom/google-maps-scraper, MIT licence, runs in Docker) | Pulls a list of real businesses in a trade and a city from Google Maps: name, address, phone, website, star rating, and number of reviews. | New rows in the normal Sunday queue, marked `source` starting with `maps:` |
| **Website reader** (Crawl4AI, Apache 2.0 licence) | Visits each business's own homepage, About page, and Contact page and *finds* the owner/founder name and any email address the business itself publishes, plus useful facts (family-owned, years in business, services offered). | Fills the name, email, website, and personalisation fields on those same queue rows |
| **Territory ranker** (U.S. Census Bureau data: American Community Survey and County Business Patterns, both free public APIs) | Ranks which metro areas are worth working for a given trade, based on how many businesses of that kind are there and what the local population and incomes look like. | A short territories file that the Sunday build reads before choosing where to search |
| **Public-footprint brief** (SpiderFoot and/or theHarvester, open source) | On demand only — never part of the daily run — takes one company or domain and produces a short brief on its public footprint, for preparing for a call. | A markdown brief in the call-prep folder. It never adds rows to a queue and never sends anything. |

Nothing else changes:

- Only **published** email addresses are ever used. Guessed or pattern-derived addresses were banned in October 2026 because they bounced at roughly 30% and damage sender reputation.
- Every candidate, from every source, still has to pass the same scoring cutoff (55) and the same verification gate.
- Every queue is still checked against three lists before anything is sent: `sent-log.csv` (already emailed), `suppression.csv` (bounced, opted out, or otherwise do-not-contact), and `verify-dropped.csv` (an address the verifier already dropped once — it is never re-verified and never given a second chance by a different leg).
- The weekly limit and rhythm stay: build on Sunday, send at most 10 per weekday Monday–Friday, check replies on Saturday, grade on Sunday.

The honest limit, stated up front: **v2 fixes the supply and quality of candidates. It does not, by itself, fix replies.** At day 14 the all-time funnel is 85 sent, 28 bounced, and 0 replies. Whether people reply is a question about the message, the offer, and deliverability — that is what the October 31 checkpoint is for. Section 7 says exactly what v2 will and will not prove.

---

## 2. Step-by-step: how the combined engine works end to end

This is the practical walkthrough — what happens, in order, in a normal week once v2 is live (after the pilot).

### Step 0 — Pick the territory and the trade (once a week, before Sunday's build)

1. The territory ranker (`census_rank.py`) asks the Census Bureau's two free data services two questions for each candidate metro:
   - **County Business Patterns (CBP):** how many establishments exist in the trade we care about? Trades are identified by NAICS codes — the government's standard industry codes. Roofing, for example, sits inside construction codes; plumbing, HVAC, electrical, and the other ICP trades each have their own.
   - **American Community Survey (ACS):** how many people live there, what is the typical household income, and how much housing / business activity is there to support that trade?
2. It combines those answers into a ranked list and writes a **territories file**: trade, metro, establishment count, and the data year for each figure, so we always know how old a number is.
3. Keith does not have to pick cities by gut feel any more, and Tank does not have to search the whole country blind. The Sunday build works the top-ranked metros for the week's trades first.

*Guardrail:* Census data chooses **where to look**. It never decides **who gets emailed**. A business still has to be found, scored, and verified individually.

### Step 1 — Discover businesses on Google Maps (Sunday)

1. Tank runs the Maps scraper in Docker with a plain instruction: a trade plus a metro from the territories file — for example, "roofing contractors" in the chosen metro.
2. For each business, the scraper returns what Google Maps publicly shows: business name, street address, phone number, website, star rating, and review count.
3. Obvious non-fits are dropped at this stage: national chains and franchises, businesses with no website (there is nowhere to find a published email), and businesses outside the target metro.
4. What survives becomes queue rows. Two **new columns** are added to the queue format for these rows — and, from now on, for all rows:
   - `rating` — the Google star rating, exactly as listed.
   - `review_count` — the number of Google reviews, exactly as listed.
5. The `source` field on every Maps row starts with `maps:` (for example, `maps:google-maps/roofing/<metro>`), so Sunday grading can later separate Maps leads from every other source. This has been checked against the existing tools: `score_leads.py` carries extra input columns through untouched, and `verify_emails.py` and `send_batch.py` tolerate them. No changes to those tools are needed for the new columns.

*What Maps gives us that web search does not:* breadth and consistency. One run returns a whole metro's worth of a trade in the same shape, with two useful size signals (rating and review count) that ordinary web extraction rarely captures consistently.

### Step 2 — Read each business's own website and find the person and the published email (Sunday)

1. For each Maps row with a website, Crawl4AI visits the homepage first, then follows the site's own links to About, Team, and Contact pages — the pages where small businesses normally name the owner and publish an email.
2. It looks for three things, in this order of value:
   - **A published email address**, copied exactly as the business prints it. If no email is published anywhere on the site, the row is set aside. We do **not** construct one from the owner's name and the domain. That practice is banned, full stop.
   - **The owner or founder's name and title**, as the site states them ("Founded by…", "Owner, …", a named person on the About page).
   - **Personalisation signals** the site itself states: family-owned, years in business, services offered, areas served.
3. The row is updated with what was actually found, and the page each fact came from is recorded in the source/hook notes so a human can check it in one click.
4. Rows where no published email exists are not dead weight — they stay out of the email queue. If Keith wants to reach one of those businesses another way (phone, contact form, in person), that is his call, made case by case. The engine does not make it for him.

This step is the single biggest quality change in v2. The old habit in the industry is "find the owner, then derive the email." V2 reverses it: **find the published email, then attach the owner the site names next to it.** Finding is slower than guessing. It is also why addresses stop bouncing.

### Step 3 — Merge all legs into one Sunday queue (Sunday)

The Maps/Crawl4AI leg does not get its own queue or its own rules. On Sunday it joins the legs that already exist:

| Existing leg | What it contributes | Source label |
|---|---|---|
| Gemini-grounded web extraction (`build_lead_queue.py`) | Researched businesses with a written hook explaining the fit | its existing source values |
| Claude lead batches (via Slack) | Research only — Claude suggests, Tank qualifies. All-time: 12 suggested, 6 qualified | `claude` |
| Instagram discovery (`ig_lead_discovery.py`) | Founder/company pairs found on Instagram | `instagram` |
| Lead Finder Pro | CSVs Keith runs himself and drops into `~/workspace/outreach/` | `leadfinder` |
| **New: Maps + Crawl4AI** | Metro-wide trade lists with found owner names and published emails | `maps:` |

Merging follows fixed rules:

1. **One row per business/email.** If two legs find the same business, the rows are merged, not duplicated. The richer record wins (a found owner name and a published email beat a bare listing), and the source notes keep both origins so grading can still credit the first finder.
2. **Dedupe against history, not just within the file.** The merged queue is checked against `sent-log.csv`, `suppression.csv`, and `verify-dropped.csv`. A hit on any of the three removes the row. This is what stops a business we already emailed — or already decided never to email — from coming back in through a new leg wearing a different label.
3. The merged result is written as the normal dated queue file, `queue-YYYY-MM-DD.csv`, in the normal place, with the two new columns included.

### Step 4 — Score every row the same way (Sunday)

1. `score_leads.py` scores the merged queue 0–100 with the existing Stage 1 fit scoring v2: trade/industry fit, business size (the sweet spot is roughly 1–30 people), decision-maker title, named-person versus role-account email, and live web presence.
2. Rows below the **cutoff of 55** are marked not sendable. No leg gets a bypass — a Maps row has to earn its place exactly like a Claude row does.
3. `rating` and `review_count` are carried in the file from day one, but they **do not change the score yet**. That is deliberate. We first measure whether they predict anything (Section 6 challenges this assumption directly). If Sunday grading shows high-review businesses deliver or reply at a different rate, Tank can propose a scoring weight then — under Keith's existing rule, evidence-based scoring refinements are applied and reported, while email wording and the ICP always come to Keith first.

### Step 5 — Verify every email the same way (before any send)

1. `verify_emails.py` runs on the scored, sendable rows. It performs the checks it already performs — address format, whether the domain really receives mail, whether the address is the one published, and the other confidence signals it uses today.
2. Only rows the verifier passes move forward. Dropped addresses are written to `verify-dropped.csv`, the permanent ledger: **once dropped, never re-verified.** A new leg rediscovering the same address next month changes nothing.
3. This gate is the main protection for sender reputation. V2 increases the number of candidates entering the gate; it does not widen the gate.

### Step 6 — Send, exactly as today (Monday–Friday)

1. `send_batch.py` sends from the verified queue, in score order, **at most 10 per weekday**.
2. No sends on Saturday or Sunday unless Keith explicitly says otherwise.
3. Every send is logged in `sent-log.csv` with its source, so grading can attribute the outcome to the leg that found the lead.
4. Replies and bounces are handled by the existing reply-checking routine: bounces and opt-outs go to `suppression.csv` and are honoured permanently.

### Step 7 — Grade by source every Sunday

1. `grade_week.py` keeps its existing by-score-band table.
2. It gains one new table: **by source** — for each source (`maps`, `gemini-web`, `claude`, `instagram`, `leadfinder`): how many were sent, how many bounced, and how many were delivered (sent minus bounced).
3. Legs now compete on evidence, in public, every week. A leg that produces volume but bounces gets cut back or fixed. A leg that produces fewer, cleaner leads gets more of the week's slots. Section 7 defines the numbers we compare against.

### Step 8 — On-demand only: the public-footprint brief (any time Keith asks)

1. Keith (or Tank, preparing for a booked call) names one company or domain.
2. SpiderFoot and/or theHarvester collects what is **publicly** exposed about it: subdomains and hosted services, public email addresses associated with the domain, technology in use, and other open-source intelligence.
3. Tank turns that raw output into a short markdown brief in plain language — what the business looks like from the outside, where it seems exposed or out of date, and two or three honest talking points for the call — following the pattern already proven by the Fulshear Tree Service assessment.
4. Hard limits: this runs **only when asked, for one named company at a time**. It is never a daily leg, never run across a whole queue, and its output is call preparation — it never creates queue rows, never adds an email to a queue, and never triggers a send.

---

## 3. Legal and compliance review — required at each step

This section is a design review checklist, not legal advice. Where it flags a review, that review should happen **before** the relevant step runs in production, and any item marked "Keith / counsel to confirm" stays open until Keith closes it.

### 3.1 Google Maps data (Step 1)

- **The issue:** Google's Terms of Service restrict automated scraping of Google services, including Maps. The scraper is open-source software, but the licence of the tool does not settle the terms of the service it reads. Those are two different things and this design does not pretend otherwise.
- **How the design limits the risk:**
  - **Public business data only** — name, address, phone, website, rating, review count: information businesses publish to be found by customers. No personal data, no private listings, no login-gated content, no bypassing of access controls or CAPTCHAs.
  - **Modest volumes** — one trade in one metro at a time, sized to fill a 10-per-weekday sending pipeline. This is a small-business prospecting list, not a bulk data harvest, not a database for resale, and never shared or sold.
  - **No storage beyond need** — results land in the working queue and the normal logs. We are not building a standing copy of Google Maps.
- **Review required before production:** Keith to accept the residual terms-of-service risk in writing (in this doc's approval), understanding the realistic worst case is Google throttling or blocking the IP/address doing the scraping — which is an operational problem (see the home-PC note in Section 4), not a customer-data problem. If Keith is not comfortable with that residual risk, the fallback is official sources only (Google Places API on a paid key, or manual Maps browsing), and the rest of v2 still works — Crawl4AI, Census ranking, and by-source grading do not depend on the scraper.
- **Never:** scraping reviews' text for personal data about reviewers, scraping at volumes designed to evade rate limits, or rotating identities/addresses to defeat a block Google has imposed.

### 3.2 Contacting the businesses (Steps 2, 5, and 6) — CAN-SPAM and plain good practice

- **The law that applies:** the U.S. CAN-SPAM Act governs commercial email. The pipeline already operates to it; v2 changes nothing about the message itself.
- **How the design stays inside it:**
  - **Published addresses only.** Every address comes from the business's own public pages. No guessed, derived, purchased, or rented addresses — the October 2026 ban stands and v2 strengthens it by *finding* rather than *deriving*.
  - **The verifier gate (Step 5)** runs before every send, and the suppression list is permanent and honoured across every leg. An opt-out or bounce recorded against any leg blocks all legs.
  - **Honest sending practice** (unchanged, restated here because v2 raises volume at the front of the line): accurate sender identification as PowerTies, a truthful subject line, a real physical business address in the message, a working opt-out, and opt-outs processed promptly. Email wording itself is unchanged by v2 and remains Keith's to approve.
  - **One business, one first contact.** Dedupe (Step 3) is also a compliance control: it is what prevents the same owner receiving near-duplicate first emails from two different legs.
- **Review required:** none new for the message (unchanged), but **Keith / counsel to confirm** if PowerTies ever expands beyond U.S. businesses — other jurisdictions (for example Canada's CASL and the EU/UK rules) require prior consent in many cases and this design is built for the U.S. ICP only. The engine must not be pointed at non-U.S. metros without a fresh review.
- **State and trade-specific rules:** some trades and states regulate solicitation (for example, home-improvement contractor rules). Email about a consulting offer is not the same as door-to-door solicitation, but **Keith to confirm** there is no trade on the ICP list he wants excluded on regulatory or reputational grounds before the pilot trade is finalised.

### 3.3 Website reading (Step 2)

- **The issue:** automatically reading a business's public website is low-risk, but "publicly viewable in a browser" and "free of any terms" are not identical, and aggressive crawling can burden a small business's site.
- **How the design limits it:** Crawl4AI reads only the public pages a customer would read (home, About, Team, Contact), at human-like volumes — a handful of pages per business, once. It identifies itself honestly if the tooling allows a user-agent setting, respects `robots.txt` exclusions where a site states them, does not log in anywhere, does not submit forms, and does not crawl a site repeatedly. If a site blocks automated reading, that business simply stays out of this leg — no workarounds.
- **Data handling:** only business contact facts and the personalisation signals listed in Step 2 are kept. Nothing about a site's visitors, customers, or staff beyond the owner/founder the business itself names publicly.

### 3.4 Census data (Step 0)

- **The position:** American Community Survey and County Business Patterns data are U.S. government publications — **public domain**, free, and provided by the Census Bureau through official APIs precisely for this kind of use. No licence fee, no scraping, no terms problem.
- **The only obligations:** use the official APIs within their (generous) rate limits, and keep the data year attached to every figure the ranker outputs, because the main risk with Census data is not legal — it is acting on old numbers as if they were current (see Section 6).

### 3.5 Public-footprint briefs (Step 8)

- **The issue:** tools like SpiderFoot and theHarvester are dual-use: the same collection that prepares you for a legitimate sales call can, in other hands, prepare an attack. Intent and scope are what keep this on the right side of the line.
- **How the design limits it:**
  - **Passive, public sources only**, run against a company Keith has a legitimate reason to prepare for (normally a booked or upcoming call). No port scanning, no vulnerability probing, no login attempts, no credential testing, nothing that touches the target's systems — collection reads public records and public indexes about the domain.
  - **One named company at a time, on demand.** No bulk runs, no runs against suppression-list businesses, no runs "just in case."
  - **The brief is internal.** It is call preparation for Keith. It is not published, not sent to the business as a scare tactic, and any security observation in it is raised with the business honestly and only if it comes up naturally in a real conversation.
  - Personal data minimisation: the brief is about the **business's** footprint. It does not build dossiers on private individuals, and personal details beyond the publicly named owner are left out.
- **Review required before first production use:** Keith to confirm the passive-only configuration, and the tool configuration must be checked to prove active modules are off — that check is part of the build, not a promise in this document.

### 3.6 What v2 explicitly does not do

- **No LinkedIn scraping.** This is settled precedent, not an open question: automated LinkedIn collection puts Keith's account at risk, and the account is worth more than any list it could produce. No v2 component touches LinkedIn.
- **No purchased or rented lists**, from anyone, ever. Every address traces to the business's own published pages or a leg already approved above.
- **No new database of people.** Consistent with Keith's standing preference, the engine keeps the files the pipeline already keeps (queues, sent log, suppression, verify-dropped) and adds only the territories file and call-prep briefs. Nothing new is kept "just in case it is useful later."

---

## 4. Costs and ROI, with projections

### 4.1 Cash cost: target $0 incremental

| Item | Cost | Why |
|---|---|---|
| gosom/google-maps-scraper | $0 | MIT-licensed open source, self-hosted in Docker |
| Crawl4AI | $0 | Apache 2.0 open source, self-hosted |
| Census ACS + CBP APIs | $0 | Public data, free official APIs |
| SpiderFoot / theHarvester | $0 | Open source, self-hosted, on-demand only |
| Compute | $0 incremental | Runs on the existing VM and/or Keith's existing PC (Docker). No new server, no new subscription |
| Email verification / sending | $0 incremental | The existing verifier and Gmail path are unchanged |
| **Total incremental cash** | **$0 target** | Consistent with Keith's hard rule: minimal cash out, free-first, no new tool above the monthly ceiling |

**One operational note on where scraping runs:** Google throttles datacenter IP addresses faster and harder than residential ones. The same Maps run that completes quietly from a home connection can get rate-limited quickly from a cloud VM. Production Maps scraping may therefore need to run in Docker on **Keith's PC** (residential connection), with the resulting CSV handed to the VM pipeline the same way Lead Finder Pro CSVs already are. That costs nothing, but it is a real design decision, not a detail: the pilot (Section 8) must test throttling from both locations and the production home for the scraper is chosen on that evidence.

### 4.2 The real cost is time and attention

- **Build time (Tank):** wiring four legs into an existing contract, extending `grade_week.py` with the by-source table, and the pilot run. This is agent build work, not Keith's time, except for the reviews flagged in Section 3 and the pilot go/no-go in Section 8.
- **Keith's time:** one decision on the Maps terms risk (Section 3.1), one pilot review, and the normal Sunday/Monday rhythm he already has. V2 is designed to *reduce* his manual leg (Lead Finder Pro runs) over time, not add a new chore.
- **Ongoing running cost:** minutes of compute per Sunday build. Crawl4AI reading a few pages per business is the slowest step; even a few hundred businesses is a batch job, not an all-day one.

### 4.3 ROI — stated as scenarios, not promises

The product being sold is the $99 one-hour AI working session, with the $650 planning session behind it. The engine's job is to put more *verified, well-fitted* candidates in front of that offer at the same sending limit. Note the arithmetic honestly: **the send cap stays 10 per weekday**, so v2 cannot increase revenue by sending more. It can only increase revenue if the leads it feeds the cap are *better* — more of them delivered, and more of the delivered ones worth a reply.

**Costs in the projection:** $0 incremental cash. The investment being judged is build effort and the risk to sender reputation if quality drops — which is why the verifier gate and the pilot's no-send rule exist.

**Baseline the projection starts from (measured, October 15, day 14):**

- All-time funnel: **85 sent / 28 bounced (about 33%) / 0 replies**.
- Old-path verifier pass rate on October 15: **2 of 10 (20%)**.
- Claude research batches: **6 of 12 suggested leads qualified (50%)** — the best qualification rate of any current leg, at very low volume.

**Scenario table — what a better front of the line is worth, per 100 verified sends:**

These are illustrations built from the baselines above, not forecasts. Every assumption in them is challenged in Section 6.

| Scenario | Bounce rate | Delivered per 100 sends | Replies | Paid $99 sessions | Gross from sessions |
|---|---|---|---|---|---|
| Today, extended | ~33% | ~67 | 0 at current rate | 0 | $0 |
| V2 conservative: bounces halve, replies stay near zero | ~15% | ~85 | 0–1 | 0–1 | $0–$99 |
| V2 working as designed: cleaner list + better personalisation | ~10–15% | ~85–90 | 1–3 (1–3% of delivered) | 1–2 | $99–$198, plus $650 upsell potential |
| V2 fails on quality | Above ~33% | Below ~67 | 0 | 0 | $0, and sender reputation is worse — the pilot exists to catch this before a single send |

Read that table the straight way: **even the good scenario is small money per 100 sends.** The real return on v2 is not this month's session revenue. It is (a) a sender reputation that stops being burned by bounces, (b) a weekly evidence table that finally shows *which source of leads is worth anything*, and (c) a repeatable supply of fitted, verified owners that every future offer — $99 session, $650 planning, or anything after — depends on. If the October 31 checkpoint concludes the offer or message is the problem, v2's grading table is what will prove it was not the list.

### 4.4 Cost risks that could break the $0 target

- If Google throttling makes self-hosted Maps scraping impractical even from a residential connection, the fallback (official Places API) is **paid per request**. That decision comes back to Keith with real pilot numbers before a cent is spent — v2 does not silently become a paid tool.
- If Crawl4AI cannot read enough small-business sites (heavy JavaScript, page builders, blocked crawlers), the fallback is more manual research time, not a paid enrichment service. Paid data enrichment (the Apollos of the world) stays paused under existing policy unless Keith reopens it.
- No other line in this design requires a subscription, a per-seat licence, or a usage tier.

---

## 5. How the pieces fit together (technical shape, in plain language)

For the record, so the builders of the other workstreams build the same thing this document describes:

- **Maps leg:** Docker container running gosom/google-maps-scraper. Input: trade + metro (+ search terms). Output: CSV of listings. A thin adapter renames its fields into queue columns, adds `rating` and `review_count`, sets `source` to a `maps:` value, and drops rows with no website.
- **Enrichment leg:** Crawl4AI, run as a batch over the adapter's output. Input: website URL per row. Output per row: owner/founder name and title *if the site states them*, published email *if the site states one*, and signal fields (family-owned, years in business, services). A row with no published email is flagged out of the email queue, never "completed" by derivation.
- **Territory leg:** `census_rank.py`. Input: trade (NAICS) + candidate metros. Data: CBP establishment counts and ACS population/income via the official Census APIs. Output: a territories file (trade, metro, counts, data years, rank) that the Sunday build consults. Refreshed when the Census releases new data, not weekly — the underlying data is annual at best.
- **Queue contract (unchanged, extended by two columns):** `queue-YYYY-MM-DD.csv` with the existing columns plus `rating` and `review_count`. Downstream tools already tolerate the extra columns (verified for `score_leads.py`, `verify_emails.py`, `send_batch.py`).
- **Grading:** `grade_week.py` gains a by-source aggregation joining queue → `sent-log.csv` → `suppression.csv` on email, grouped by normalised source (`maps`, `gemini-web`, `claude`, `instagram`, `leadfinder`). The existing by-band table is untouched.
- **Dossier leg:** SpiderFoot and/or theHarvester, installed but dormant, passive modules only, invoked manually with a single company/domain, output summarised by Tank into a markdown brief in the call-prep folder. No scheduler, no queue connection.

---

## 6. Every assumption, explained and challenged

Keith's standard: an assumption that has not been challenged is a hope. Each assumption below is stated, explained, challenged, and given the test or safeguard that settles it.

### 6.1 "Google Maps listings are fresh and accurate enough to build a queue from"

- **Why we believe it:** Businesses keep their Maps listing current because it drives customer calls; it is usually the most maintained public record a small trade business has — more current than its own website, in many cases.
- **The challenge:** "Usually" hides the failures. Listings include closed businesses, stale phone numbers, duplicate listings, businesses that have moved, and lead-generation shell listings with borrowed names. Review counts and ratings can also be gamed. A scraper cannot tell a real roofing company from a call-centre front with a rented address.
- **How we settle it:** Maps is treated as a *discovery* source, never as proof. Every row still has to survive Crawl4AI finding a real website with a real published email, fit scoring, and email verification. A shell listing fails at the website step. The pilot counts how many Maps rows die at each stage — if most die, the assumption was wrong and we will see exactly where.

### 6.2 "We will find a published email on enough small-business websites to make this worthwhile"

- **Why we believe it:** Trade businesses want quote requests, and many print an email on their Contact page. The verifier's best results today come precisely from addresses that are published.
- **The challenge:** This is the riskiest assumption in the whole design. Many small businesses publish **only a contact form and a phone number** — no email at all. Others publish only a role address (`info@…`), which scores worse than a named person's. If the true find-rate is, say, 1 in 5, the Maps leg has to discover five times as many businesses to fill the same queue, and the "found owner name next to the email" picture gets thinner. Anyone quoting a confident find-rate before measuring it is guessing.
- **How we settle it:** The pilot's headline number **is** the find-rate: published emails found ÷ businesses with websites crawled, split into named-person versus role addresses. No production decision is made until that number exists. If it is too low, the honest conclusions are that Maps becomes a phone/form prospecting source (Keith's call, manual) or that the leg is dropped — not that we quietly go back to deriving addresses. **Deriving is not the fallback. Ever.**

### 6.3 "County Business Patterns counts tell us where a trade is strong"

- **Why we believe it:** CBP is the authoritative count of business establishments by industry and county, from the Census Bureau. For ranking metros against each other, nothing free comes close.
- **The challenge:** CBP data **lags by roughly two years**. It counts the economy of two years ago: businesses that have since closed are in it, businesses founded last year are not, and a fast-growing suburb or a post-storm rebuilding boom will be understated. NAICS codes also do not map perfectly onto how trades describe themselves — a "roofing" count depends on code choices, and multi-trade firms are counted once, under one code.
- **How we settle it:** Use CBP for what it is good at — **relative ranking** of metros, not absolute truth about any one of them — and print the data year in the territories file so nobody mistakes it for current. Rankings get a sanity check against the Maps leg itself: if the top-ranked metro returns thin Maps results, the ranking is wrong for our purposes whatever the Census says, and the Maps yield becomes the working number.

### 6.4 "American Community Survey income and population figures describe today's market"

- **Why we believe it:** ACS is the standard source for local income and demographics, and for choosing between metros its broad picture (size, income level, housing stock) changes slowly.
- **The challenge:** The reliable ACS product for small geographies is the **5-year estimate — a rolling average across five years, not a snapshot of this year**. A metro whose incomes jumped (or fell) in the last eighteen months will look smoother and older than reality. Fine distinctions between similar metros in ACS data are often inside the margin of error.
- **How we settle it:** Same discipline as CBP: rank in broad tiers (strong / workable / skip), never pretend to precision the smoothing does not support, and carry the estimate period in the file. Territory choice is a coarse decision; the data is good enough for a coarse decision and this design asks nothing finer of it.

### 6.5 "Star rating and review count are a useful proxy for business size and quality"

- **Why we believe it:** A roofer with 300 reviews has plainly done more jobs, over more years, than one with 4. Review volume correlates loosely with how established and active a business is — exactly the kind of signal that could separate a real 10-person firm from a one-man listing, which matters for the 1–30 employee fit.
- **The challenge:** Loose correlation is doing a lot of work in that paragraph. Review count also measures **how hard a business asks for reviews**, how consumer-facing it is, and how long its listing has existed. A busy commercial contractor may have few reviews and be a perfect fit; a residential firm with a review-generation service may look bigger than it is. Ratings are worse: nearly every surviving business clusters between 4.3 and 4.9 stars, so rating alone separates almost nothing. Treating either number as a size score on day one would bake an untested hunch into every send decision.
- **How we settle it:** That is why `rating` and `review_count` are **recorded but not scored** at launch (Step 4). After several Sunday grades, we can look at delivered and reply outcomes across review-count ranges and see whether the proxy predicted anything. Only then does it earn a scoring weight — through the normal evidence-based refinement rule, reported to Keith.

### 6.6 "Our dedupe lists catch duplicates across all legs"

- **Why we believe it:** The three lists (`sent-log.csv`, `suppression.csv`, `verify-dropped.csv`) are keyed on email address, every leg feeds the same queue, and the verifier's dropped-ledger is permanent by design.
- **The challenge:** Dedupe by email catches the *same address* perfectly and the *same business* imperfectly. The same owner can appear with two different published addresses (a Gmail on the Maps listing, a domain address on the website), a trade business can list under a slightly different name in two sources, and a multi-location firm can look like two businesses. Each gap is a chance to email the same person twice in a season — a small harm per incident, a reputation harm in aggregate.
- **How we settle it:** The merge step (Step 3) dedupes on **domain and company name as well as email** within the queue, and history checks run on all three keys, not email alone. The by-source grading table will also expose the problem if it happens: the same domain showing up under two sources in one quarter is a visible pattern, and any duplicate-contact complaint is treated as a dedupe bug to fix, not bad luck.

### 6.7 "Self-hosted scraping from our IPs will keep working"

- **Why we believe it:** Volumes are modest — a metro and a trade at a time — and modest, human-paced public lookups are the least likely pattern to be blocked.
- **The challenge:** Google actively detects automated Maps access, datacenter IPs are trusted least, and "it worked in the pilot" is not a promise about month three. A block mid-run could also return partial or silently degraded data, which is worse than an honest failure because the queue would look normal while being thinner.
- **How we settle it:** The pilot tests both the VM and Keith's PC (residential connection) and compares completion and yield. Production runs record how many listings a query *should* roughly return versus how many arrived, so a throttled run looks different from a genuinely small metro. If a location gets blocked, we stop and report it — we do not rotate addresses or otherwise evade the block (Section 3.1).

### 6.8 "Crawl4AI can read small-business websites well enough"

- **Why we believe it:** It is a purpose-built, actively maintained crawler designed to turn messy web pages into clean text an extractor can work on, and most small-business sites are simple pages from a handful of common builders.
- **The challenge:** "Most" is not "all." Some sites are heavy JavaScript applications, some hide the email behind a form or an image, some are a single Facebook page with no website at all, and some block crawlers outright. Extraction can also misread a page — pulling a supplier's or web designer's email from a footer and attributing it to the business.
- **How we settle it:** Every extracted email keeps the **URL it was found on**, and the verifier's published-address confidence check is the backstop: an address that is not genuinely the business's published address does not gain confidence from being scraped. The pilot hand-checks a sample of extractions against the live pages, and the misattribution rate is reported alongside the find-rate. A leg that finds emails but finds the *wrong* emails is worse than a leg that finds none.

### 6.9 "More and cleaner candidates will improve the funnel"

- **Why we believe it:** The measured failures today are at the front of the funnel — a 20% verifier pass rate on the old path and a roughly 33% bounce rate all-time are list-quality numbers, and list quality is what v2 changes.
- **The challenge:** The funnel's other measured number is **0 replies from 85 sends**, and nothing in v2 touches the reasons a delivered email gets no reply: whether the offer lands, whether the message earns attention, whether sending-domain deliverability quietly routes mail to spam even when it does not bounce. It is entirely possible for v2 to succeed at everything it controls — and the reply count to stay at zero.
- **How we settle it:** We do not settle it inside this project, and this document will not pretend otherwise. See Section 7.3.

---

## 7. How success will be measured

### 7.1 The by-source table (the core measurement)

From the first production Sunday, `grade_week.py` reports, alongside the existing by-score-band table:

| Source | Sent | Bounced | Bounce % | Delivered (est.) |
|---|---|---|---|---|
| maps | — | — | — | — |
| gemini-web | — | — | — | — |
| claude | — | — | — | — |
| instagram | — | — | — | — |
| leadfinder | — | — | — | — |

Plus, in the build report each Sunday (before any sending): rows discovered per leg, rows surviving dedupe, rows at or above the 55 cutoff, and verifier pass rate per leg. A leg is judged on the full chain — **discovery is cheap; verified, delivered leads are the product.**

### 7.2 Baselines to beat (all measured, October 15, 2026)

| Baseline | Value | Source of the number |
|---|---|---|
| Old-path verifier pass rate | **2 of 10 (20%)** | October 15 verification run |
| Claude batch qualification | **6 of 12 (50%)** | All-time Claude batches: 12 suggested, 6 qualified |
| All-time sends | **85** | `sent-log.csv` through day 14 |
| All-time bounces | **28 (about 33%)** | Suppression/bounce records through day 14 |
| All-time genuine replies | **0** | Day 14 funnel report |

**What "working" looks like, in numbers Tank will report every Sunday:**

- Maps leg verifier pass rate **above the old path's 20%** within its first two production weeks — the minimum evidence the leg earns its place. Aiming materially higher (toward and past Claude's 50% qualification level) is the goal; 20% is the floor below which the leg is paused and diagnosed.
- Overall bounce rate trending **down from ~33%** as v2 leads become a larger share of sends.
- No leg — including Maps — sending a duplicate to a business already in the sent log or suppression. Zero is the only acceptable number there.
- Every figure reported with its sample size. At 10 sends a weekday, weekly numbers are small; Tank will read direction over several weeks, not decimals off one week — the same discipline the grading report already states.

### 7.3 What v2 does NOT fix — stated plainly

- **Reply rate.** 0 replies in 85 sends is the funnel's biggest problem and v2 does not address its likely causes: the offer, the message, the sender's deliverability reputation, or simple market indifference. Those are the subject of the **October 31 checkpoint**, where thirty days of evidence gets a real diagnosis instead of more of the same.
- **Deliverability beyond bounces.** An email can be "delivered" and still land in spam. Cleaner lists help reputation at the margin; v2 includes no inbox-placement testing and claims none.
- **The $650 upsell, bookings, and closing.** The engine ends at a graded send. Everything after a reply is Keith's sales work and the existing follow-up process.
- **Businesses with no published email.** V2 deliberately leaves them out of email outreach. That is a smaller reachable universe than guessing would give — accepted on purpose, because the guessing era produced the bounce problem this project exists to end.

If v2 hits every target in Section 7.2 and replies are still zero, the correct conclusion — supported by v2's own grading table — is that **the list was never the binding problem**, and October 31 should spend itself on message, offer, and deliverability. That is a valuable outcome too, and this design counts it as the measurement system succeeding even if the discovery legs merely perform adequately.

---

## 8. The pilot: prove it before a single email is sent

The pilot is deliberately small, and it **stops at a verified queue. Nothing is sent.**

### 8.1 Scope

- **One trade:** roofing.
- **One metro:** the top-ranked metro for roofing from `census_rank.py` (CBP roofing/construction establishment counts + ACS population and income), with the data years printed on the ranking so the choice can be argued with.
- **One run** of each leg, in the production order: Census ranking → Maps discovery → Crawl4AI enrichment → merge/dedupe against the three history lists → scoring → verification.

### 8.2 What the pilot produces

A single report, plus the would-be queue file, containing:

1. The Census ranking for roofing and the metro it selected, with figures and data years.
2. Maps yield: listings returned, listings dropped (and why: no website, chain/franchise, outside metro), and a comparison of running the scrape from the VM versus Keith's PC (completion, throttling, yield) to settle where production scraping lives.
3. Crawl4AI yield: sites crawled, **published-email find-rate** (named-person vs role address split), owner-name find-rate, and the hand-checked misattribution rate on a sample.
4. The funnel in one line: discovered → deduped → scored ≥55 → verifier-passed. That last number is what would have been sendable.
5. A side-by-side against the baselines in Section 7.2: pilot verifier pass rate vs the old path's 20%, and pilot qualification shape vs Claude's 6-of-12.
6. The by-source grading table, produced in dry-run form, proving the reporting works before it matters.

### 8.3 Go / no-go criteria (Keith decides, on the pilot report)

**Go** (Maps leg joins the Sunday build) requires all of:

- Published-email find-rate high enough that the leg fills a meaningful share of a week's queue without lowering standards — judged on the actual number, not a threshold invented before we have one.
- Pilot verifier pass rate **above 20%** (the old-path baseline).
- Misattribution rate on the hand-checked sample at or near zero — wrong emails are disqualifying at any find-rate.
- Zero dedupe failures against sent-log, suppression, and verify-dropped.
- Keith's Section 3.1 decision on the Maps terms risk recorded.

**No-go or fix-first** if any criterion fails: the failing stage is diagnosed and re-piloted, or the leg is dropped and the rest of v2 (Census ranking, by-source grading, on-demand briefs) proceeds without it. The pilot's job is to make that call cheap — it costs one roofing metro's worth of compute and no sender reputation at all.

### 8.4 After a successful pilot

1. Maps + Crawl4AI joins the Sunday build for roofing in the pilot metro first; other trades/metros from the territories file are added one at a time, each first run watched the same way.
2. First production sends are ordinary weekday sends under the existing cap — no launch spike, no special batch.
3. The first two Sunday grades with the by-source table get a explicit leg-by-leg verdict in the report to Keith: keep, fix, or cut, per leg.

---

## 9. Risks and open questions for Keith

| # | Item | Needed from Keith |
|---|---|---|
| 1 | Google Maps scraping vs Google's Terms of Service (Section 3.1) | Accept the residual risk (realistic worst case: throttling/blocking), or direct official-API/manual fallback instead |
| 2 | Where production scraping runs — VM vs Keith's PC | Decided on pilot throttling evidence; Keith's PC may mean a small manual hand-off step like Lead Finder Pro |
| 3 | Pilot trade confirmation | Roofing is proposed. Confirm, or name a different first trade |
| 4 | Non-U.S. expansion | None planned. Confirm the engine stays U.S.-only until a fresh compliance review |
| 5 | Dossier tool configuration | Confirm passive-only, on-demand use (Section 3.5) before SpiderFoot/theHarvester is first run |
| 6 | Businesses found with no published email | Left out of email outreach by design. Confirm there is no separate phone/form follow-up wanted for them at this stage |

---

## 10. Summary

Lead Engine v2 keeps the pipeline Keith already trusts — same queue, same scoring cutoff of 55, same verifier gate, same 10-per-weekday cap, same Sunday grading, same permanent suppression and dropped-address ledgers — and gives it a better front end:

- **Census data picks where to look**, in broad, honestly-dated tiers.
- **Google Maps finds the businesses**, with rating and review count recorded (not yet scored) as possible size signals.
- **Crawl4AI finds — never derives — the owner and the published email** on each business's own site.
- **Every leg merges into one deduped queue** and competes in a new **by-source Sunday grade** against hard baselines: 20% old-path verifier pass, 50% Claude qualification, 33% all-time bounce.
- **SpiderFoot/theHarvester stay in the drawer**, pulled out one company at a time for call prep.
- **Cash cost: $0 incremental**, with any paid fallback brought back to Keith with pilot numbers first.
- **The pilot sends nothing.** One trade (roofing), one Census-ranked metro, and a queue that stops at verified — then Keith decides.

And the limit, one more time, because it matters more than any feature in this document: v2 can prove the list got better. If replies are still zero after it does, the October 31 checkpoint has a clean, measured case that the problem is the message, the offer, or deliverability — and that is where the next work should go.

---

*End of design. Companion files: the existing pipeline tools in `~/workspace/outreach/` (`build_lead_queue.py`, `score_leads.py`, `verify_emails.py`, `send_batch.py`, `grade_week.py`, `ig_lead_discovery.py`) are unchanged by this design except for the by-source table added to `grade_week.py` and the two new queue columns (`rating`, `review_count`) it must carry.*

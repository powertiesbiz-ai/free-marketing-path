# Proof log — PowerTies, walking its own path

This is the part most marketing advice leaves out: the numbers.

PowerTies is using the system in this repo to market a real one-person business. Once a month, we will publish the funnel in the same shape, whether the numbers are good, bad, or still zero. A month with no sales is still a data point. So is a high bounce rate. Hiding either would make the path easier to sell and less worth trusting.

Copy the format. Publish your own. Compare the system against reality, not against a screenshot in an advertisement.

This log is the lab notebook for a stated claim. What it's testing — and the research questions other owners are helping answer — lives in **[docs/thesis-and-research.md](thesis-and-research.md)**. If you've walked a step of the path yourself, the way to contribute your data is a **[field report](../templates/field-report.md)**: one real attempt, cash and hours counted, consent chosen by you.

## Monthly entry template

Copy everything below for a new monthly entry.

### [Month Year]

#### The funnel

| Stage | Count |
|---|---:|
| Sent |  |
| Delivered |  |
| Replied |  |
| Real conversations (ICP-fit, two-way) |  |
| Paid |  |
| Revenue | $ |

#### Website

- Traffic source and reporting period:
- Most useful page or funnel:
- Quiz or diagnostic completions:
- What changed on the site:

#### Social

- LinkedIn:
- Facebook:
- Other channels:
- What people actually responded to:

#### What we changed

- 
- 
- 

#### What we learned

- 
- 
- 

---

## Entry #1 — Baseline — October 2026

This is the starting line, recorded on October 13, 2026. The outreach system had been live since October 1, 2026. These are all-time outreach numbers at the baseline, not a claim that October was finished.

### The funnel

| Stage | Count |
|---|---:|
| Sent | 79 |
| Delivered | 55 |
| Bounced | 27 |
| Genuine replies | 0 |
| Paid sessions | 0 |
| Revenue | $0 |

Against the owner's success bar (1–2 real ICP conversations/week): currently 0 — the gap the Oct 31 checkpoint will judge.

### The honest problem

The bounce problem is real, and it came first from sending to addresses that had not been verified well enough — including guessed addresses early on. That practice is stopped. The rule now is simple: **verified addresses only; never guess an email address.**

An honest 30-day checkpoint is set for **October 31, 2026**. If genuine replies are still zero, the next job is not “send more.” It is to diagnose the actual bottleneck — deliverability, message, targeting, offer, or channel — and publish what changed.

### Social baseline

| Channel | Baseline | Context |
|---|---:|---|
| LinkedIn | 9,000 followers | Keith's established personal profile |
| Facebook | 81 followers | PowerTies began posting in early October 2026; this is an early ramp, not a mature channel |

### Assets live at baseline

- **powerties.us** — the public website, with two quiz funnels.
- **MLOT** — the free Money Left on the Table diagnostic.
- **The Free Marketing Path** — this 12-step path and repo, launched October 13, 2026.
- **Website traffic** — baseline being established; the first monthly traffic report is scheduled for November 1, 2026. No traffic number is claimed here because there is not yet a verified monthly baseline to claim.

### What changed before this entry

- Guessed email addresses were removed from the outreach process.
- Every address is verified before sending.
- The funnel and the October 31 checkpoint were written down in advance, so the result cannot be quietly redefined later.

### What we learned already

A system can be busy and still produce zero revenue. Activity is not proof. The funnel is the proof — and at baseline, it says the work has started, the deliverability problem has been identified, and nothing has converted yet.

## What PowerTies actually runs (and pays)

The path in this repo is written so a reader can run it at $0. This table is different: it discloses the actual PowerTies setup, including the places where PowerTies chooses to pay for speed or convenience.

**The path itself is runnable at $0. What PowerTies actually spends, all-in, is ≈$56/mo — and most of it is convenience, not requirement: Tank's platform ≈$20/mo, Claude ≈$21/mo, and the VPS ≈$15/mo. Every paid line below has a $0 route (fill the ring-leader role yourself or with a free open-source agent, do the research manually, run n8n on your own computer). This table is what PowerTies chooses to run — not what a reader must spend.**

| Part of the system | What PowerTies actually runs | What it does | Cost / terms |
|---|---|---|---|
| **Ring leader** | **Tank — AI agent (Muse)** | **Coordinates the whole system: runs outreach end-to-end (verification, sending, grading), maintains the website, CRM, and automations, directs the research leg (Claude) and the workflow layer (n8n), and reports results. Keith approves outward actions.** | $20/mo — Keith's Muse access (October 2026 figure). The ROLE is what the system needs, not this platform: a reader can fill it manually for $0, or with a free open-source agent (see OpenClaw, below). |
| Lead research (optional) | Claude, paid plan | The lead-research leg of outreach: finds company names and why they fit. Tank then verifies every email address and handles sending. **Under review (October 2026): the ring leader can absorb the research leg — Claude is a second, independent researcher, not a dependency.** | About $21/mo |
| Lead data, optional | Apollo.io, free tier | An optional accelerator for lead data. PowerTies' Apollo leg is currently paused until its October 24, 2026 credit refresh. | Free tier: 75 credits/month |
| Workflow automation | n8n, self-hosted on a Hetzner VPS | Runs the workflow layer under Tank's direction: email/CRM automations, lead checks, notifications, and approval-based drafting flows. | ≈$15/mo |
| Workflow AI | Groq, free tier | Powers the AI drafting and summarizing inside the n8n email workflows. | Free tier |
| CRM | Zoho CRM | Holds leads and contacts and receives the CRM automations. A free tier exists and is enough to start. | Free tier available |
| Code and hosting | GitHub, Cloudflare Pages, and Vercel | GitHub holds the code and this repo; Cloudflare Pages and Vercel host sites and apps on free tiers. | Free tiers |
| Social scheduling and measurement | Buffer and Metricool | Weekly social scheduling and measurement. | Free tiers exist; no paid price is claimed here |
| Payments | Square | Takes payments for the paid offer. | Transaction fees only; no subscription |
| Booking | Cal.com | Booking page for the $99 AI working session. | Free tier |

You can also staff the ring leader for $0 with an open-source agent framework — PowerTies runs a second agent, Jada, on OpenClaw with free model backends (Groq/OpenRouter free tiers) handling its Telegram command interface. Honest caveats: free tiers rate-limit on heavy work, and setup takes some technical comfort — but the role does not require a paid assistant.

### How to read this table

Do not copy the spending before you copy the system. Start with the $0 version. Add a paid tool only when it removes a bottleneck you have actually hit, and write down what it bought you. That is the difference between a stack and a pile of subscriptions.

### Time — the other ledger

Cash is only half the ledger. Keith's time on this project runs ≈2 hours a day, spread across the day, and nearly all of it is **discovery** — testing what works, deciding, approving. The execution is forwarded to the ring leader (Tank), so the owner's hours buy judgment, not labor.

So the founding case's honest answer to research question Q3 is: the cash is ≈$56/mo, and the owner's time is ≈2 hours a day of discovery and judgment — not execution.

That discovery time is effectively donated: the published results are how other owners benefit from it.

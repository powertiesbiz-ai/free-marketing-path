# Implementation log

What actually got built, tool by tool, as it happened — including the parts
that are not finished yet. The numbers live in the [proof log](proof-log.md);
this file is the build diary behind them.

## Oct 13, 2026 — Tally lead form: pipeline built and tested

- n8n workflow "Tally Form to Zoho Lead" (id Nq7lVwz1lVH2Y983) built and
  tested end to end: a test submission created a Zoho lead, fired the
  Telegram notification to the owner, and the test lead was deleted after.
- The contact page is live at powerties.us/contact with the form slot in
  place. The form embed itself is pending the owner's Tally setup (in
  progress Oct 14); until it lands, the page carries a plain email link.

## Oct 14, 2026 — Kit: account live, API verified

- Kit account created on the free Newsletter plan (10,000-subscriber cap).
- The v4 API key is stored in our credential vault and verified live: the
  subscribers, tags, and sequences endpoints all answer — API access works
  on the free plan.
- Tags created through the API: `quiz-mlot`, `quiz-ai-readiness`,
  `booked-99`.
- Open questions, recorded honestly:
  - Whether the free plan still runs automated sequences is unconfirmed
    (in-account check pending). The fallback — Plan B1 — is Kit holding the
    list and tags while our n8n workflow sends the four follow-up emails on
    Days 1/3/7/12.
  - A recheck is scheduled for Oct 22, 2026 to confirm the free plan is a
    real free plan and not a trial that lapses.
- The four sequence emails are drafted and waiting on owner approval.
  Nothing sends before that.

## Oct 14, 2026 — Kit sequences: the verdict, Plan B1 chosen

- The owner checked in-account: the free plan does NOT run email
  sequences. Sequences work only during a Creator / Creator Pro trial;
  when a trial ends without a paid plan, sequences stop running — but
  anything built stays saved on the account and becomes available again
  if the account upgrades.
- Decision: Plan B1. Kit holds the subscriber list and the tags
  (`quiz-mlot`, `quiz-ai-readiness`, `booked-99`) through the API; our
  n8n workflow sends the four follow-up emails on Days 1/3/7/12 through
  the existing Gmail path, checking Kit for the `booked-99` tag before
  each send so anyone who has booked stops getting nudged.
- The four follow-up emails are approved by the owner (signed "Best,
  Keith, PowerTies Consulting Group").
- Wiring status: being built and tested on a copy of the Quiz Lead
  Capture workflow; the live swap follows successful tests. Not live
  yet.
- The Oct 22, 2026 recheck still stands — it now confirms the parts B1
  depends on (the API and the tags) still answer on the genuine free
  plan after any trial has fully lapsed.

## Oct 13–14, 2026 — Community infrastructure stood up

- Reddit: u/PowerTiesBiz (six years old, starting from 1 karma) joined
  r/sweatystartup, r/smallbusiness, r/EntrepreneurRideAlong, and
  r/Entrepreneur.
- Discord: account ktull01 (display name PowerTiesBiz). Our own server is
  created — invite: discord.gg/s3KcMgCaQU.
- Joined three founder servers — Coeso, RoundTable, and Mind Miners —
  through direct DISBOARD listing links after DISBOARD name search failed
  to surface them. The direct links are recorded in the
  [community plan](community-plan.md).
- Status: listening phase. The rules of engagement — question-first, no
  self-promotion, the owner approves everything posted — are in the
  community plan.

## Oct 14, 2026 — Plan B1 build: the Nurture Engine

- The sending engine is built: a new n8n workflow, "Quiz Nurture
  Engine," holds each subscriber's send schedule (Days 1/3/7/12) in its
  own static data and runs a daily sender.
- Suppression is checked first: the sender reads Kit's `booked-99` tag
  membership before any send, and the design is fail-closed — if the Kit
  check errors, nothing sends at all.
- The Square Payment Notifications workflow gained a "Kit — Tag
  Booked-99" node, so a completed $99 booking tags the buyer in Kit and
  the nudges stop. Its pre-existing nodes are untouched.
- The quiz branch (add subscriber + tag in Kit, record the schedule) was
  built and tested end to end on a copy of Quiz Lead Capture: Zoho lead
  created, the immediate email sent, the schedule recorded. Every new
  node is continue-on-fail, so a Kit outage can never break the live
  funnel.
- The last blocker fell tonight: the owner created the Kit credential
  inside n8n itself (Header Auth). It sits under n8n's default title,
  "Header Auth Account" — it is identified by its header name
  (X-Kit-Api-Key), not by the title.
- Finish underway, stated honestly: attaching that credential to the
  four Kit nodes, running the two held tests (a real Day-1 send; proof
  that a booked subscriber is suppressed), then swapping the branch into
  the live Quiz Lead Capture workflow. Not live yet.

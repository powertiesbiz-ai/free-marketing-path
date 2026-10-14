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

# Importable n8n workflows — steal the wiring

These are sanitized exports of the real workflows behind Step 7 of the path. They are here so you can install the machinery instead of only reading advice about it.

**Sanitized means sanitized:** credentials have been removed, webhook comparison values and chat IDs are placeholders, personal email addresses have been replaced, and the files contain only the workflow name, nodes, connections, and basic settings. They will not run until you reconnect your own accounts and replace the placeholders.

Do not activate a workflow blindly. Import it, leave it inactive, reconnect one node at a time, and test with fake or low-risk data first.

## The files

| File | What it does | Credentials you will need |
|---|---|---|
| [`gmail-to-zoho-crm-automation.json`](gmail-to-zoho-crm-automation.json) | Watches Gmail, skips messages from your own addresses and notification senders, uses an AI node to extract sender details and decide whether the message belongs in the CRM, sends a Telegram lead alert, and creates or updates Zoho contact and lead records on the qualifying branch. | Gmail OAuth2, Zoho CRM OAuth2, Telegram API, Groq API |
| [`email-draft-assistant.json`](email-draft-assistant.json) | Watches Gmail, skips self-sent and notification mail, loads a `voice-profile.md` file from GitHub, uses Groq through an AI Agent node to classify the message and draft a reply, and sends the draft to Telegram for a human decision. It also stores the draft through an `approve-email` webhook on your own n8n instance. | Gmail OAuth2, GitHub API, Telegram API, Groq API |
| [`daily-crm-lead-check.json`](daily-crm-lead-check.json) | A protected webhook asks Zoho for leads, filters them to the last 24 hours, and returns the result. Tank calls this as the morning CRM lead check; you can call it from a scheduler, a shortcut, or another workflow. | Zoho CRM OAuth2; the caller must know the shared webhook value you choose |
| [`outreach-reply-to-zoho-lead.json`](outreach-reply-to-zoho-lead.json) | A protected webhook receives reply data from your outreach process and creates or updates the corresponding lead in Zoho CRM, then responds to the caller. | Zoho CRM OAuth2; the caller must know the shared webhook value you choose |

## Import checklist

1. In n8n, choose **Import from File** and import one JSON file.
2. Leave the workflow **inactive** while you configure it.
3. Open every node with a credentials warning and select or create your own credential. The exports intentionally contain empty credential slots.
4. Replace every `__replace__` value:
   - Telegram `chatId` values — use your own chat or group ID.
   - The `Check Secret` comparison value in each webhook workflow — choose a long random value, then configure the caller to send the same value in the field the workflow expects.
5. Replace the example identity values:
   - `you@example.com` in the “Skip self-sent emails” filters — use your real sending addresses. If you only use one address, remove the duplicate condition.
   - `Your Name` — use the name that should be skipped or referenced in prompts.
   - `Your Business` in AI prompts — adapt the business description and classification rules to your business.
6. In **Email Draft Assistant**, replace the GitHub owner and repository placeholders and confirm the file path points to your own voice profile. Replace `https://your-n8n.example.com` with your n8n base URL. The `approve-email` endpoint is part of the wider approval setup; point that HTTP node at your own endpoint or disable it until your approval workflow exists.
7. Check every Code node and AI prompt before activation. Sanitized does not mean “correct for your business.” The classification rules, CRM field mappings, and skip rules are examples from a real system and should be adapted deliberately.
8. Test with messages and CRM records you can safely delete. Confirm duplicates do not appear, notifications go only to you, and no message is sent to a customer.
9. Only then activate the workflow.

## Credentials to create

Depending on which workflows you import, you may need:

- Gmail OAuth2
- Zoho CRM OAuth2
- Telegram API (a bot you control)
- Groq API
- GitHub API (Email Draft Assistant only)

Create credentials inside your own n8n instance. Never paste a real credential into the JSON file or commit one to a repo.

## The approval rule

These workflows were designed around one rule: **a human approves every outward send.**

The Email Draft Assistant prepares drafts and approval prompts; it does not remove the human from the decision. The CRM workflows file information and notify the owner. If you modify a workflow so it can send email, post publicly, or contact a customer automatically, you have changed the safety model — do that knowingly, test it separately, and keep an approval step wherever a message leaves the building.

## A note on webhook paths

The webhook paths in the exports are generic examples. You may keep them or change them. If you change a path, update every caller, script, and scheduled job that uses the old address.

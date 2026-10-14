/* Which step are you stuck on? — routing only. No state is stored or sent. */
(function () {
  "use strict";

  var routes = [
    {
      field: "website",
      step: 1,
      title: "Step 1 — Website, your home base",
      why: "Everything else needs one place to point. A social profile is rented ground; a website is the front door you own."
    },
    {
      field: "google",
      step: 2,
      title: "Step 2 — Get found: Google Business Profile & Search Console",
      why: "A website nobody can find is a filing cabinet. Your Google listing and sitemap are how nearby buyers discover that the front door exists."
    },
    {
      field: "content",
      step: 4,
      title: "Step 4 — Content system",
      why: "Buyers check whether you are active and useful before they call. A small weekly rhythm builds familiarity without taking over your week."
    },
    {
      field: "leadMagnet",
      step: 5,
      title: "Step 5 — Lead magnet + quiz funnel",
      why: "Most visitors are not ready to buy today. A genuinely useful free diagnostic gives them a reason to raise a hand instead of disappearing."
    },
    {
      field: "crm",
      step: 7,
      title: "Step 7 — CRM + automation",
      why: "Leads die in inboxes. A CRM remembers the person, the source, and the next follow-up when you cannot."
    }
  ];

  var form = document.getElementById("stuck-quiz");
  var error = document.getElementById("quiz-error");
  var result = document.getElementById("quiz-result");
  var resultTitle = document.getElementById("result-title");
  var resultWhy = document.getElementById("result-why");
  var resultLink = document.getElementById("result-link");
  var resultNote = document.getElementById("result-note");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var answers = {};
    var complete = true;
    routes.forEach(function (route) {
      var selected = form.querySelector('input[name="' + route.field + '"]:checked');
      if (!selected) {
        complete = false;
      } else {
        answers[route.field] = selected.value;
      }
    });

    if (!complete) {
      error.hidden = false;
      result.hidden = true;
      return;
    }
    error.hidden = true;

    var firstNo = null;
    for (var i = 0; i < routes.length; i += 1) {
      if (answers[routes[i].field] === "no") {
        firstNo = routes[i];
        break;
      }
    }

    if (firstNo) {
      resultTitle.textContent = firstNo.title;
      resultWhy.textContent = firstNo.why;
      resultLink.href = "index.html#step-" + firstNo.step;
      resultLink.textContent = "Go to Step " + firstNo.step + " on the path";
      resultNote.textContent = "That is the earliest “no,” so it comes before later polish. Open the step, work its checklist, then come back and re-check the route.";
    } else {
      resultTitle.textContent = "Your basics are in place — now measure and aim them";
      resultWhy.textContent = "You have the home base, discovery, content, a lead magnet, and follow-up covered. The next leverage is Step 11: outreach + measurement — grade what is working instead of adding more machinery.";
      resultLink.href = "index.html#step-11";
      resultLink.textContent = "Go to Step 11 on the path";
      resultNote.textContent = "Then use Step 12 to aim the whole system at one niche and research the solution in the places that niche actually talks.";
    }

    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}());

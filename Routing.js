const domain = window.location.hostname;

const pages = {
  "terminationkitpro.com": {
    title: "Termination Kit Pro",
    body: "Get compliant offboarding docs in minutes."
  },
  "exitreadykit.com": {
    title: "Exit Ready Kit",
    body: "Avoid lawsuits. Offboard the right way."
  }
};

const content = pages[domain] || {
  title: "Coming Soon",
  body: "This landing page is under construction."
};

document.title = content.title;
document.getElementById("headline").textContent = content.title;
document.getElementById("bodycopy").textContent = content.body;

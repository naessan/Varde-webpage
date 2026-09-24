// Fyll inn egne kontaktopplysninger mellom anfoerselstegnene.
const contact = {
   email: "kjetil@vardemanagement.no",
  phoneDisplay: "+47 98 26 93 18",
  phoneLink: "",
  linkedin: "https://www.linkedin.com/in/kjetiln/",
  orgNumber: "937802757"
};

function setLink(id, label, href) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = label;
  el.href = href || "#kontakt";
}

setLink("emailLink", contact.email, contact.email.includes("@") ? `mailto:${contact.email}` : "#kontakt");
setLink("phoneLink", contact.phoneDisplay, contact.phoneLink ? `tel:${contact.phoneLink}` : "#kontakt");
setLink("linkedinLink", contact.linkedin ? "LinkedIn-profile" : "LEGG-INN-LINKEDIN", contact.linkedin || "#kontakt");

const org = document.getElementById("orgNumber");
if (org) org.textContent = `Org.nr.: ${contact.orgNumber}`;
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const button = document.querySelector(".menu");
const nav = document.getElementById("nav");
if (button && nav) {
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  }));
}

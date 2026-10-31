const header = document.getElementById("siteHeader");
const nav = document.getElementById("siteNav");
const navToggle = document.getElementById("navToggle");
const navLinks = nav.querySelectorAll("a");

// Header border once the page scrolls
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile menu
const setMenu = (open) => {
    nav.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
navToggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// Reveal sections as they enter the viewport
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 3) * 70}ms`;
        revealObserver.observe(el);
    });

    // Highlight the nav link for the section in view
    const sections = [...navLinks].map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => navObserver.observe(s));
} else {
    reveals.forEach((el) => el.classList.add("visible"));
}

// Copy email to clipboard
const copyBtn = document.getElementById("copyEmail");
copyBtn.addEventListener("click", async () => {
    const label = copyBtn.querySelector(".copy-label");
    try {
        await navigator.clipboard.writeText(copyBtn.dataset.email);
        label.textContent = "Copied ✓";
    } catch {
        label.textContent = copyBtn.dataset.email;
    }
    setTimeout(() => { label.textContent = "Copy email"; }, 2200);
});

document.getElementById("year").textContent = new Date().getFullYear();

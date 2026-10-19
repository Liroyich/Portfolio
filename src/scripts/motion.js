import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const reduce =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- copy email ---- */
const copyBtn = document.getElementById("copy");
const mail = document.getElementById("mail");

function selectMail() {
  try {
    const r = document.createRange();
    r.selectNodeContents(mail);
    const s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
    copyBtn.textContent = "Select & copy";
    setTimeout(() => (copyBtn.textContent = "Copy"), 2400);
  } catch (e) {
    /* nothing to do */
  }
}

if (copyBtn && mail) {
  copyBtn.addEventListener("click", () => {
    const text = mail.textContent.trim();
    const done = () => {
      copyBtn.textContent = "Copied";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, selectMail);
    } else {
      selectMail();
    }
  });
}

if (!reduce) {
  gsap.registerPlugin(ScrollTrigger);

  /* ---- smooth scroll ---- */
  const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  /* ---- hero: lines rise out of their mask ---- */
  const lines = document.querySelectorAll("h1 .line i");
  if (lines.length) {
    gsap.from(lines, {
      yPercent: 108,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.07,
    });
  }
  gsap.from(".eyebrow, .hero .lede, .hero-meta", {
    opacity: 0,
    y: 14,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.09,
    delay: 0.22,
  });

  /* ---- capability ticker ---- */
  const track = document.getElementById("ticker");
  if (track) {
    track.innerHTML += track.innerHTML;
    const half = track.scrollWidth / 2;
    gsap.to(track, { x: -half, duration: 26, ease: "none", repeat: -1 });
  }

  /* Only animate what starts below the fold, so the first screen is
     complete at rest (and link previews capture a readable page). */
  const belowFold = (el) =>
    el.getBoundingClientRect().top > window.innerHeight * 0.95;

  document.querySelectorAll(".sec-head").forEach((head) => {
    if (!belowFold(head)) return;
    gsap.from(head.children, {
      opacity: 0,
      x: -18,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: { trigger: head, start: "top 90%", once: true },
    });
  });

  function reveal(selector, opts = {}) {
    document.querySelectorAll(selector).forEach((el) => {
      if (!belowFold(el)) return;
      gsap.from(el, {
        opacity: 0,
        y: 26,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        ...opts,
      });
    });
  }

  reveal(".case");
  reveal(".cap", { y: 18, duration: 0.6 });
  reveal(".step", { y: 18, duration: 0.6 });
  reveal(".about-grid > *");
  reveal(".contact > *", { y: 20 });

  /* ---- margin readout: sheet reference + progress ---- */
  const roRef = document.getElementById("ro-ref");
  const roPct = document.getElementById("ro-pct");
  const roBar = document.getElementById("ro-bar");

  const marks = [
    ["work", "A-01"],
    ["caps", "A-02"],
    ["process", "A-03"],
    ["about", "A-04"],
    ["contact", "A-05"],
  ]
    .map(([id, ref]) => ({ el: document.getElementById(id), ref }))
    .filter((m) => m.el);

  if (roBar && roPct && roRef) {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate(self) {
        const p = self.progress;
        gsap.set(roBar, { scaleY: p });
        roPct.textContent =
          String(Math.round(p * 100)).padStart(3, "0") + "%";

        let current = "A-00";
        for (const m of marks) {
          if (m.el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
            current = m.ref;
          }
        }
        if (roRef.textContent !== current) roRef.textContent = current;
      },
    });
  }
}

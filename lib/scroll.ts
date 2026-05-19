export function scrollToSection(targetId: string) {
  if (typeof window === "undefined") return;

  const element = document.getElementById(targetId);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#hero`);
}

export function normalizeLandingToHero() {
  if (typeof window === "undefined") return;

  const hash = window.location.hash;
  if (!hash || hash === "#hero") return;

  const hero = document.getElementById("hero");
  if (!hero) return;

  hero.scrollIntoView({ behavior: "auto", block: "start" });
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#hero`);
}

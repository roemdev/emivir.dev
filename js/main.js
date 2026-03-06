const theme = (() => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
})();
if (theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

document.addEventListener("DOMContentLoaded", () => {
  const i = document.getElementById("menu-btn"),
    e = document.getElementById("mobile-menu"),
    n = document.getElementById("menu-icon"),
    s = document.getElementById("close-icon"),
    o = document.body;

  function c() {
    if(e?.classList.contains("opacity-100")) {
      e?.classList.add("opacity-0", "pointer-events-none", "translate-y-[-10px]");
      e?.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
      n?.classList.replace("hidden", "block");
      s?.classList.replace("block", "hidden");
      o.classList.remove("menu-open");
    } else {
      e?.classList.remove("opacity-0", "pointer-events-none", "translate-y-[-10px]");
      e?.classList.add("opacity-100", "pointer-events-auto", "translate-y-0");
      n?.classList.replace("block", "hidden");
      s?.classList.replace("hidden", "block");
      o.classList.add("menu-open");
    }
  }

  i?.addEventListener("click", c);
  document.querySelectorAll(".mobile-link").forEach((t) => {
    t.addEventListener("click", () => {
      e?.classList.contains("opacity-100") && c();
    });
  });

  const a = [
    document.getElementById("theme-toggle"),
    document.getElementById("theme-toggle-mobile"),
    document.getElementById("theme-toggle-links")
  ];
  a.forEach((t) => {
    t?.addEventListener("click", () => {
      const l = document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", l ? "dark" : "light");
    });
  });
});

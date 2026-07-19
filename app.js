// Astro-Engine Single Screen Background Interactivity

document.addEventListener("DOMContentLoaded", () => {
  // Generate 60 Twinkling Star Background Particles
  const bg = document.querySelector(".space-bg");
  if (bg) {
    for (let i = 0; i < 60; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = Math.random() * 2 + 1 + "px";
      star.style.height = star.style.width;
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      star.style.setProperty("--duration", Math.random() * 4 + 2 + "s");
      star.style.setProperty("--delay", Math.random() * 3 + "s");
      bg.appendChild(star);
    }
  }
});

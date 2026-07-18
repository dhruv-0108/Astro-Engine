// Astro-Engine Apple Product-Style Parallax Interactivity Logic

document.addEventListener("DOMContentLoaded", () => {
  // 1. Generate 60 Twinkling Background Stars
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

  // 2. Apple-Style 3D Scroll Parallax Observer
  const parallaxObserverOptions = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1
  };

  const parallaxObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, parallaxObserverOptions);

  document.querySelectorAll(".parallax-box").forEach(el => {
    parallaxObserver.observe(el);
  });

  // 3. Interactive Destination Flight Path Map Nodes
  const mapNodes = document.querySelectorAll(".map-node");
  const destName = document.getElementById("dest-name");
  const valCareer = document.getElementById("val-career");
  const valWealth = document.getElementById("val-wealth");
  const valMarriage = document.getElementById("val-marriage");
  const valPeace = document.getElementById("val-peace");

  const locationData = {
    Germany: { career: "92%", wealth: "84%", marriage: "73%", peace: "81%" },
    USA: { career: "89%", wealth: "91%", marriage: "60%", peace: "65%" },
    Canada: { career: "82%", wealth: "78%", marriage: "68%", peace: "72%" },
    Australia: { career: "78%", wealth: "80%", marriage: "82%", peace: "79%" },
    India: { career: "75%", wealth: "70%", marriage: "85%", peace: "90%" }
  };

  mapNodes.forEach(node => {
    node.addEventListener("click", () => {
      const city = node.dataset.city;
      const data = locationData[city];
      if (data) {
        destName.textContent = `Target: ${city}`;
        valCareer.textContent = data.career;
        valWealth.textContent = data.wealth;
        valMarriage.textContent = data.marriage;
        valPeace.textContent = data.peace;
      }
    });
  });

  // 4. Interactive Life Line Graph Points
  const pointNodes = document.querySelectorAll(".point-node");
  const pointAge = document.getElementById("point-age");
  const pointDasha = document.getElementById("point-dasha");
  const pointStatus = document.getElementById("point-status");
  const pointDesc = document.getElementById("point-desc");

  const timelineData = {
    20: { dasha: "Venus-Rahu", status: "Transition Phase", desc: "Foundational period of academic learning and shifting identity.", color: "#F59E0B" },
    25: { dasha: "Venus-Jupiter", status: "Growth Peak", desc: "First major career breakthrough under Jupiter's trine aspect.", color: "#10B981" },
    29: { dasha: "Sun-Sun", status: "Authority Shift", desc: "Significant career status restructuring and 10th house activation.", color: "#3B82F6" },
    35: { dasha: "Sun-Saturn", status: "Consolidation", desc: "Saturn test phase requiring structured effort and patience.", color: "#F43F5E" },
    45: { dasha: "Moon-Jupiter", status: "High Growth", desc: "Gajakesari Yoga peak activation. Excellent financial stability & mentorship.", color: "#10B981" },
    60: { dasha: "Mars-Saturn", status: "Balanced Harvest", desc: "Spiritual fulfillment and harmonious life balance.", color: "#8B5CF6" }
  };

  pointNodes.forEach(pt => {
    pt.addEventListener("click", () => {
      const age = pt.dataset.age;
      const data = timelineData[age];
      if (data) {
        pointAge.textContent = `Age ${age}`;
        pointDasha.textContent = data.dasha;
        pointStatus.textContent = data.status;
        pointStatus.style.color = data.color;
        pointDesc.textContent = data.desc;
      }
    });
  });
});

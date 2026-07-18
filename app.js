// Astro-Engine VP of UX Interactivity Logic

document.addEventListener("DOMContentLoaded", () => {
  // 1. Generate Twinkling Star Background Particles
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

  // 2. Mouse 3D Tilt Effect on Cards
  const cards = document.querySelectorAll(".card-3d");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 10;
      const rotateY = (x / rect.width) * 10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });

  // 3. Interactive World Map Pins & Stats
  const mapPins = document.querySelectorAll(".pin-node");
  const destTitle = document.getElementById("dest-title");
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

  mapPins.forEach(pin => {
    pin.addEventListener("click", () => {
      const city = pin.dataset.city;
      const data = locationData[city];
      if (data) {
        destTitle.textContent = `Target: ${city}`;
        valCareer.textContent = data.career;
        valWealth.textContent = data.wealth;
        valMarriage.textContent = data.marriage;
        valPeace.textContent = data.peace;
      }
    });
  });

  // 4. Interactive Line Graph Nodes
  const graphPoints = document.querySelectorAll(".graph-point");
  const gAge = document.getElementById("g-age");
  const gDasha = document.getElementById("g-dasha");
  const gStatus = document.getElementById("g-status");
  const gDesc = document.getElementById("g-desc");

  const timelineData = {
    20: { dasha: "Venus-Rahu", status: "Transition", desc: "Foundational phase of learning and shifting identity.", color: "#F59E0B" },
    25: { dasha: "Venus-Jupiter", status: "Growth Peak", desc: "First major career breakthrough under Jupiter aspect.", color: "#10B981" },
    29: { dasha: "Sun-Sun", status: "Authority Shift", desc: "Significant restructuring of career status and 10th house activation.", color: "#3B82F6" },
    35: { dasha: "Sun-Saturn", status: "Consolidation", desc: "Saturn test phase. Demands structured effort and patience.", color: "#F43F5E" },
    45: { dasha: "Moon-Jupiter", status: "High Growth", desc: "Gajakesari Yoga peak activation. Excellent financial stability.", color: "#10B981" },
    60: { dasha: "Mars-Saturn", status: "Balanced Harvest", desc: "Spiritual fulfillment and harmonious life balance.", color: "#8B5CF6" }
  };

  graphPoints.forEach(pt => {
    pt.addEventListener("click", () => {
      const age = pt.dataset.age;
      const data = timelineData[age];
      if (data) {
        gAge.textContent = `Age ${age}`;
        gDasha.textContent = data.dasha;
        gStatus.textContent = data.status;
        gStatus.style.color = data.color;
        gDesc.textContent = data.desc;
      }
    });
  });
});

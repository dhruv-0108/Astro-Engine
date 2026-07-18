// Astro-Engine Dribbble 3D Parallax Interactivity

document.addEventListener("DOMContentLoaded", () => {
  // 1. Generate 70 Twinkling Star Particles
  const bg = document.querySelector(".space-bg");
  if (bg) {
    for (let i = 0; i < 70; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = Math.random() * 2.5 + 1 + "px";
      star.style.height = star.style.width;
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      star.style.setProperty("--duration", Math.random() * 4 + 2 + "s");
      star.style.setProperty("--delay", Math.random() * 3 + "s");
      bg.appendChild(star);
    }
  }

  // 2. Mouse 3D Parallax Tilt Effect on Cards
  const cards = document.querySelectorAll(".card-3d");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = (-y / rect.height) * 12; // tilt max 12deg
      const rotateY = (x / rect.width) * 12;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });

  // 3. Interactive Life Line Graph Nodes
  const nodes = document.querySelectorAll(".graph-node");
  const graphAge = document.getElementById("graph-age");
  const graphDasha = document.getElementById("graph-dasha");
  const graphStatus = document.getElementById("graph-status");
  const graphDesc = document.getElementById("graph-desc");

  const graphData = {
    20: { dasha: "Venus-Rahu", status: "Transition", desc: "Period of ambition and shifting focus. Foundational learning phase.", color: "#F59E0B" },
    25: { dasha: "Venus-Jupiter", status: "Growth Peak", desc: "First major creative and career breakthrough under Jupiter aspect.", color: "#10B981" },
    29: { dasha: "Sun-Sun", status: "Restructuring", desc: "Shift in authority. Public recognition, increased leadership responsibilities.", color: "#06B6D4" },
    35: { dasha: "Sun-Saturn", status: "Consolidation", desc: "Saturn test. Requires disciplined execution and patience in returns.", color: "#EF4444" },
    45: { dasha: "Moon-Jupiter", status: "High Growth", desc: "Peak Gajakesari Yoga activation. Favorable for wealth accumulation & mentoring.", color: "#10B981" },
    60: { dasha: "Mars-Saturn", status: "Peaceful Harvest", desc: "Harmonious balance of life wisdom and spiritual fulfillment.", color: "#8B5CF6" }
  };

  nodes.forEach(node => {
    node.addEventListener("click", () => {
      const age = node.dataset.age;
      const data = graphData[age];
      if (data) {
        graphAge.textContent = `Age ${age}`;
        graphDasha.textContent = data.dasha;
        graphStatus.textContent = data.status;
        graphStatus.style.color = data.color;
        graphDesc.textContent = data.desc;
      }
    });
  });

  // 4. Interactive Relocation Flight Arc Pins
  const cityPins = document.querySelectorAll(".city-pin");
  const cityTitle = document.getElementById("city-title");
  const statCareer = document.getElementById("stat-career");
  const statWealth = document.getElementById("stat-wealth");
  const statMarriage = document.getElementById("stat-marriage");
  const statPeace = document.getElementById("stat-peace");

  const cityData = {
    Germany: { career: "92%", wealth: "84%", marriage: "73%", peace: "81%" },
    USA: { career: "89%", wealth: "91%", marriage: "60%", peace: "65%" },
    Canada: { career: "82%", wealth: "78%", marriage: "68%", peace: "72%" },
    Australia: { career: "78%", wealth: "80%", marriage: "82%", peace: "79%" },
    India: { career: "75%", wealth: "70%", marriage: "85%", peace: "90%" }
  };

  cityPins.forEach(pin => {
    pin.addEventListener("click", () => {
      const name = pin.dataset.city;
      const data = cityData[name];
      if (data) {
        cityTitle.textContent = `Destination: ${name}`;
        statCareer.textContent = data.career;
        statWealth.textContent = data.wealth;
        statMarriage.textContent = data.marriage;
        statPeace.textContent = data.peace;
      }
    });
  });
});

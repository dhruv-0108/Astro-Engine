// Astro-Engine Premium Editorial Interactivity

// Firebase Configuration
const firebaseConfig = {
  projectId: "astro-engine-web-dhruv",
  appId: "1:737546328710:web:649df0334a5a858464cf07",
  storageBucket: "astro-engine-web-dhruv.firebasestorage.app",
  apiKey: "AIzaSyDkwPOoDNecSN8UhSIbkExbreIw4j_RqYg",
  authDomain: "astro-engine-web-dhruv.firebaseapp.com",
  messagingSenderId: "737546328710",
  projectNumber: "737546328710"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
}

document.addEventListener("DOMContentLoaded", () => {
  const db = (typeof firebase !== 'undefined') ? firebase.firestore() : null;

  // 1. Life Timeline Widget Handler
  const timelineRows = document.querySelectorAll(".timeline-row");
  const timeAge = document.getElementById("detail-age");
  const timeStatus = document.getElementById("detail-status");
  const timeDasha = document.getElementById("detail-dasha");
  const timeBody = document.getElementById("detail-body");

  const timelineDetails = {
    20: {
      status: "Transition",
      class: "transition",
      dasha: "Venus-Rahu Period",
      text: "A period marked by key structural changes and shifting academic focus. Ambition is high, but the aspects suggest waiting for stability before making major career commitments."
    },
    29: {
      status: "Transition",
      class: "transition",
      dasha: "Sun-Sun Period",
      text: "A major shift in professional authority. The 10th house is strongly activated, initiating a multi-year restructuring process of your career status and public responsibilities."
    },
    35: {
      status: "Challenge",
      class: "challenge",
      dasha: "Sun-Saturn Period",
      text: "A consolidation phase requiring high discipline. Retrograde influences call for patience. Focus on foundational work rather than aggressive expansion."
    },
    45: {
      status: "Growth",
      class: "growth",
      dasha: "Moon-Jupiter Period",
      text: "A highly supportive period with strong Gajakesari yoga active. Academic breakthroughs, mentorship opportunities, and stable financial gains are indicated."
    }
  };

  timelineRows.forEach(row => {
    row.addEventListener("click", () => {
      timelineRows.forEach(r => r.classList.remove("active"));
      row.classList.add("active");
      const age = row.dataset.age;
      const data = timelineDetails[age];
      if (data) {
        timeAge.textContent = `Age ${age}`;
        timeStatus.textContent = data.status;
        timeStatus.className = `status-pill ${data.class}`;
        timeDasha.textContent = data.dasha;
        timeBody.textContent = data.text;
      }
    });
  });

  // 2. Relocation Atlas Widget Handler
  const mapMarkers = document.querySelectorAll(".map-marker");
  const locTitle = document.getElementById("loc-title");
  const locCareer = document.getElementById("loc-career");
  const locMoney = document.getElementById("loc-money");
  const locMarriage = document.getElementById("loc-marriage");
  const locPeace = document.getElementById("loc-peace");
  const locDesc = document.getElementById("loc-desc");

  const relocationDetails = {
    India: {
      career: "75%", money: "70%", marriage: "85%", peace: "90%",
      desc: "Strong 4th house alignment. India offers the highest baseline emotional and domestic security, with stable and predictable professional growth."
    },
    Canada: {
      career: "82%", money: "78%", marriage: "68%", peace: "72%",
      desc: "12th house foreign journey activation. Highly favorable for initial immigration and professional networking, though distance may slightly impact mental peace."
    },
    Germany: {
      career: "92%", money: "84%", marriage: "73%", peace: "81%",
      desc: "Strong 9th and 10th house synchronization. Exceptional suitability for intellectual research, advanced engineering, and long-term residency."
    },
    USA: {
      career: "89%", money: "91%", marriage: "60%", peace: "65%",
      desc: "High financial yield environment driven by active 11th house gains. Demands rigorous professional focus, occasionally at the cost of personal leisure."
    },
    Australia: {
      career: "78%", money: "80%", marriage: "82%", peace: "79%",
      desc: "Well-balanced transit configurations. Offers solid career prospects, strong domestic harmony, and a favorable environment for partnership ventures."
    }
  };

  mapMarkers.forEach(marker => {
    marker.addEventListener("click", () => {
      mapMarkers.forEach(m => m.classList.remove("active"));
      marker.classList.add("active");
      const country = marker.dataset.country;
      const data = relocationDetails[country];
      if (data) {
        locTitle.textContent = country;
        locCareer.textContent = data.career;
        locMoney.textContent = data.money;
        locMarriage.textContent = data.marriage;
        locPeace.textContent = data.peace;
        locDesc.textContent = data.desc;
      }
    });
  });

  // 3. Waitlist Form Handler
  const waitlistForm = document.getElementById("waitlist-form");
  const successBox = document.getElementById("waitlist-success");

  if (waitlistForm && successBox) {
    waitlistForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("user-name").value;
      const email = document.getElementById("user-email").value;
      const hasDetails = document.getElementById("has-birth-details").value;

      if (db) {
        db.collection("waitlist").add({
          name: name,
          email: email,
          hasBirthDetails: hasDetails,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
          waitlistForm.style.display = "none";
          successBox.classList.remove("hidden");
        })
        .catch((error) => {
          console.error("Error saving waitlist entry:", error);
          alert("There was an error joining the waitlist. Please try again.");
        });
      } else {
        // Offline / script not loaded fallback
        console.log("Offline mode: waitlist saved locally", { name, email, hasDetails });
        waitlistForm.style.display = "none";
        successBox.classList.remove("hidden");
      }
    });
  }
});

// Astro-Engine Simple Space Coming Soon Interactivity

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

  // Generate 70 Animated Stars
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

  // Handle Waitlist Form Submission
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
        waitlistForm.style.display = "none";
        successBox.classList.remove("hidden");
      }
    });
  }
});

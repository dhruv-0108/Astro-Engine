// Astro-Engine Apple-Style Landing Page Interactivity

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

  // 1. Apple-Style Scroll Reveal Observer
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });

  // 2. Waitlist Form Handler
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

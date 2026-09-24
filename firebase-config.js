// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  getDocs, 
  onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdNEoXqDncYpI_5CFYHZb7UsMe2zGUn-Y",
  authDomain: "beekeeper-4e31e.firebaseapp.com",
  projectId: "beekeeper-4e31e",
  storageBucket: "beekeeper-4e31e.firebasestorage.app",
  messagingSenderId: "105182647772",
  appId: "1:105182647772:web:02d113d9aa6aac20516b19",
  measurementId: "G-Y5M8272G16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics = null;
let db = null;

// Initialize Analytics if supported in this environment
isSupported().then(supported => {
  if (supported) {
    analytics = getAnalytics(app);
    console.log("🔥 Firebase Analytics initialized (beekeeper-4e31e)");
  }
}).catch(err => {
  console.warn("Analytics initialization notice:", err);
});

// Initialize Firestore
try {
  db = getFirestore(app);
  console.log("🔥 Firebase Firestore initialized (beekeeper-4e31e)");
} catch (err) {
  console.warn("Firestore initialization notice:", err);
}

function updateCloudStatus(text, isGood = true) {
  const badgeText = document.getElementById('firebaseStatusText');
  const badgeDot = document.querySelector('.cloud-dot');
  if (badgeText) badgeText.textContent = text;
  if (badgeDot && !isGood) {
    badgeDot.style.background = '#F59E0B';
  }
}

// Global Firebase Bridge for Beekeeper App
window.FirebaseBridge = {
  app,
  analytics,
  db,
  isOnline: true,

  // Save/Update single hive in Firestore
  async saveHive(hive) {
    if (!db || !hive) return;
    try {
      const docRef = doc(db, "hives", `hive_${hive.id}`);
      const plainHive = JSON.parse(JSON.stringify(hive));
      await setDoc(docRef, plainHive, { merge: true });
      console.log(`Cloud: Hive ${hive.id} saved to Firestore`);
      updateCloudStatus("Firebase Synced");
    } catch (err) {
      console.warn("Firestore sync notice (check Rules):", err.message);
      updateCloudStatus("Firebase Connected");
    }
  },

  // Delete hive from Firestore
  async deleteHive(hiveId) {
    if (!db || !hiveId) return;
    try {
      const docRef = doc(db, "hives", `hive_${hiveId}`);
      await deleteDoc(docRef);
      console.log(`Cloud: Hive ${hiveId} removed from Firestore`);
      updateCloudStatus("Firebase Synced");
    } catch (err) {
      console.warn("Firestore delete notice:", err.message);
    }
  },

  // Sync initial hives
  async syncAllHives(hives) {
    if (!db || !Array.isArray(hives)) return;
    for (const h of hives) {
      this.saveHive(h);
    }
  }
};

// Initial badge update
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    updateCloudStatus("Firebase Connected");
  });
} else {
  updateCloudStatus("Firebase Connected");
}

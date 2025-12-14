import { atom } from 'nanostores';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { firebaseConfig } from './firebase';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app, firebaseConfig.databaseURL);
const statusRef = ref(db, 'salon/status');

// Create an atom to hold the salon's status
export const isSalonOpen = atom(true); // Default to true

// Listen for changes in the database and update the store
onValue(statusRef, (snapshot) => {
  const data = snapshot.val();
  if (data !== null) {
    isSalonOpen.set(data.isOpen);
  }
});

// Function to update the salon status in Firebase
export function updateSalonStatus(isOpen) {
  set(statusRef, { isOpen });
}

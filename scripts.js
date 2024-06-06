import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

document.getElementById('guest-form').addEventListener('submit', addGuest);

async function addGuest(e) {
    e.preventDefault();

    try {
        const guest = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            arrivalDate: document.getElementById('arrivalDate').value,
            departureDate: document.getElementById('departureDate').value,
            numNights: document.getElementById('numNights').value,
            roomNumber: document.getElementById('roomNumber').value,
            reservationNumber: document.getElementById('reservationNumber').value,
            notes: document.getElementById('notes').value
        };

        const docRef = await addDoc(collection(db, "guests"), guest);
        console.log("Document written with ID: ", docRef.id);

        document.getElementById('guest-form').reset();
        displayGuests(); // Refresh the guests list
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function displayGuests() {
    const querySnapshot = await getDocs(collection(db, "guests"));
    const guestsList = document.getElementById('guest-list');
    guestsList.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const guest = doc.data();
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${guest.firstName} ${guest.lastName}</strong><br>
            Arrival: ${guest.arrivalDate}, Departure: ${guest.departureDate}, Nights: ${guest.numNights}<br>
            Room: ${guest.roomNumber}, Reservation: ${guest.reservationNumber}<br>
            Notes: ${guest.notes}<br>
            <button onclick="deleteGuest('${doc.id}')">Delete</button>
        `;
        guestsList.appendChild(li);
    });
}

async function deleteGuest(guestId) {
    await deleteDoc(doc(db, "guests", guestId));
    displayGuests(); // Refresh the guests list
}

// Initially display the guests
displayGuests();
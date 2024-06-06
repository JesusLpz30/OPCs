import { database } from './firebase-config.js';
import { ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

document.getElementById('guest-form').addEventListener('submit', addGuest);

function addGuest(e) {
    e.preventDefault();

    const guestRef = ref(database, 'guests');
    const newGuestRef = push(guestRef);

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

    set(newGuestRef, guest);

    document.getElementById('guest-form').reset();
}

function displayGuests() {
    const guestsRef = ref(database, 'guests');
    onValue(guestsRef, (snapshot) => {
        const guestsList = document.getElementById('guest-list');
        guestsList.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const guest = childSnapshot.val();
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${guest.firstName} ${guest.lastName}</strong><br>
                Arrival: ${guest.arrivalDate}, Departure: ${guest.departureDate}, Nights: ${guest.numNights}<br>
                Room: ${guest.roomNumber}, Reservation: ${guest.reservationNumber}<br>
                Notes: ${guest.notes}<br>
                <button onclick="deleteGuest('${childSnapshot.key}')">Delete</button>
            `;
            guestsList.appendChild(li);
        });
    });
}

function deleteGuest(guestId) {
    const guestRef = ref(database, `guests/${guestId}`);
    remove(guestRef);
}

displayGuests();
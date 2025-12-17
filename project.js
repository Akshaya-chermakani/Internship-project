function openBookingForm(eventName) {
  document.getElementById("bookingModal").style.display = "block";
  document.getElementById("eventTitle").innerText = `Book: ${eventName}`;
}

function closeBookingForm() {
  document.getElementById("bookingModal").style.display = "none";
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const event = document.getElementById("eventTitle").innerText;

  alert(`✅ ${name}, your booking for "${event}" is confirmed!\nConfirmation sent to: ${email}`);
  closeBookingForm();
});
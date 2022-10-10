'use strict';
/* global window, VANTA, alert, console, document */
window.addEventListener('DOMContentLoaded', () => {
  VANTA.NET({
    el: '#animation',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x3fddff,
  });
});
function messageSent() {
  alert('Invoice Sent');
}
const invoiceTo = document.getElementById('invoice_to').value;
const contactNumber = document.getElementById('contact_number').value;
const date = document.getElementById('date').value;
const lightMode = document.getElementById('light-mode').checked;
const body = document.querySelector('header');
// console.log([invoiceTo, contactNumber]);

if (!lightMode.checked) {
  body.classList = '.light-mode';
}

let invoice = {
  name: invoiceTo,
  number: contactNumber,
  date: date,
};

console.log(
  `name: ${invoice.name}, phone number: ${invoice.number}, date: ${invoice.date}`
);

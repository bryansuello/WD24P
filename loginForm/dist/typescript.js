"use strict";
/* global VANTA */
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
let submitButton = document.querySelector('.submit');
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', () => {
    alert('Login Successful');
});

const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// ------

document.addEventListener("DOMContentLoaded", function() {
    // Load data from local storage if available
    const patientID = localStorage.getItem("patientID");
    const name = localStorage.getItem("name");
    const dob = localStorage.getItem("dob");
    const address = localStorage.getItem("address");
    const gender = localStorage.getItem("gender");
    const phone = localStorage.getItem("phone");
    const email = localStorage.getItem("email");

    if (patientID) document.getElementById("patientID").innerText = patientID;
    if (name) document.getElementById("name").innerText = name;
    if (dob) document.getElementById("dob").innerText = dob;
    if (address) document.getElementById("address").innerText = address;
    if (gender) document.getElementById("gender").innerText = gender;
    if (phone) document.getElementById("phone").innerText = phone;
    if (email) document.getElementById("email").innerText = email;
});

function updateProfile() {
    window.location.href = "UpdateProfile.html";
}

// -----------loin--------------
function validateLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation (replace this with actual validation logic)
    if (username === "user" && password === "password") {
        window.location.href = "Dashboard.html";
    } else {
        alert("Invalid login. Please try again.");
    }
}

// --------------register-----------------

function registerUser(event) {
    event.preventDefault();
    
    const name = document.getElementById('regName').value;
    const dob = document.getElementById('regDob').value;
    const address = document.getElementById('regAddress').value;
    const gender = document.getElementById('regGender').value;
    const phone = document.getElementById('regPhone').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    // Simulate user registration (replace this with actual registration logic)
    if (name && dob && address && gender && phone && email && password) {
        // Redirect to dashboard after registration
        window.location.href = "Dashboard.html";
    } else {
        alert("Please fill in all the fields.");
    }
}

function updateProfile() {
    const name = prompt("Enter new name:");
    const dob = prompt("Enter new date of birth:");
    const address = prompt("Enter new address:");
    const gender = prompt("Enter new gender:");
    const phone = prompt("Enter new phone number:");
    const email = prompt("Enter new email address:");

    if (name) document.getElementById('name').innerText = name;
    if (dob) document.getElementById('dob').innerText = dob;
    if (address) document.getElementById('address').innerText = address;
    if (gender) document.getElementById('gender').innerText = gender;
    if (phone) document.getElementById('phone').innerText = phone;
    if (email) document.getElementById('email').innerText = email;
}


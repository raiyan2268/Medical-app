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

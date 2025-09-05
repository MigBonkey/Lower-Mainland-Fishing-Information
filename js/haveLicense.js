
function handleLicenseCheck() {
    const licenseValue = document.querySelector('input[name="license"]:checked');
    if (!licenseValue) {
        alert("Please select an option.");
        return;
    }
    if (licenseValue.value === "no") {
        window.location.href = "Licensing.html";
    } else {
        alert("Great! You're ready to fish!");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const licenseButton = document.getElementById("licenseButton");
    if (licenseButton) {
        licenseButton.addEventListener("click", handleLicenseCheck);
    }
});

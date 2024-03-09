document.getElementById('phone').addEventListener('input', function (e) {
	var input = e.target;
	input.value = input.value.replace(/[^\d]/g, ''); // Remove non-numeric characters
	if (input.value.length > 10) {
		input.value = input.value.slice(0, 10); // Limit to 10 digits
	}
});


function sendOTP() {
	// Implement OTP sending logic here
	alert("OTP Sent!");
}

function validatePhoneOrEmail(input) {
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex
	var phoneRegex = /^[0-9]{10}$/; // Phone number regex (10 digits)

	// Check if input matches either phone or email regex
	if (input.match(emailRegex) || input.match(phoneRegex)) {
		return true;
	} else {
		return false;
	}
}

// Function to enable/disable submit button based on input validity
document.getElementById("phone_or_email").addEventListener("input", function() {
	var input = document.getElementById("phone_or_email").value;
	var submitButton = document.getElementById("submit");

	if (validatePhoneOrEmail(input)) {
		submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
	}
});

function validateOTP(otp) {
	var submitButton = document.getElementById("submit");
	if (otp.length > 0) {
		submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
	}
}
function verifyOTP() {
	// Perform your OTP verification logic here
	// if(validateOTP(otp)==true) {
	// 	submitButton.disabled = false;}
	// 	else {
    //     submitButton.disabled = true;
    // }

	// Redirect to another page
	window.location.href = "../set_password/password.html"; // Change "profile.php" to your desired destination
	return false; // Prevent the default form submission
}

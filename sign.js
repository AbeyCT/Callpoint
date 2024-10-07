// signup js

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const firstName = document.getElementById("firstName").value;
  const middleName = document.getElementById("middleName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const password = document.getElementById("password").value;

  // Add your sign-up logic here (e.g., send data to your server)
  console.log("Sign Up Data:", {
      firstName,
      middleName,
      lastName,
      email,
      phoneNumber,
      password,
  });

  alert("Sign Up Successful!"); // Example alert
});






// Signin js

document.getElementById("signinForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Add your sign-in logic here (e.g., send data to your server)
  console.log("Sign In Data:", {
      email,
      password,
  });

  alert("Sign In Successful!"); // Example alert
});

// Forgot Password functionality
document.getElementById("forgotPassword").addEventListener("click", function () {
  const email = prompt("Please enter your email address:");

  if (email) {
      // Logic to generate and send a new password to the user's email
      alert("A password reset link has been sent to " + email);
  }
});

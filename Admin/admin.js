let storedUsername = "admin"; // Default username
let storedPassword = "123456"; // Default initial password

// Show Login Form
function showLoginForm() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('forgotPasswordForm').style.display = 'none';
  document.getElementById('resetError').innerText = '';
  document.getElementById('loginError').innerText = '';
}

// Show Forgot Password Form
function showForgotPassword() {
  document.getElementById('forgotPasswordForm').style.display = 'block';
  document.getElementById('loginForm').style.display = 'none';
}

// Login Function
function login() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (username === storedUsername && password === storedPassword) {
    window.location.href = "adminDash.html"; 
    // Redirect to another page or dashboard here
  } else {
    document.getElementById('loginError').innerText = 'Invalid username or password';
  }
}

// Reset Password Function
function resetPassword() {
  let newPassword = document.getElementById('newPassword').value;

  if (newPassword.trim() === "") {
    document.getElementById('resetError').innerText = 'Password cannot be empty!';
  } else {
    storedPassword = newPassword;
    alert('Password reset successful! You can now log in with the new password.');
    showLoginForm(); // Go back to login screen
  }
}

// Initially show login form
showLoginForm();

const loginForm = document.getElementById("login-form");
const message = document.getElementById("message");

const usernames = ["user1", "user2"];
const passwords = ["password1", "password2"];

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let isValid = false;

  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === username && passwords[i] === password) {
      isValid = true;
      break;
    }
  }

  if (isValid) {
    // Successful login
    message.textContent = "Login successful!";
    // Redirect to a different page or perform other actions
  } else {
    // Invalid credentials
    message.textContent = "Invalid username or password.";
  }
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("message");
  message.innerHTML = "Username: " + username + "<br>Email: " + email + "<br>Password: " + password;
});
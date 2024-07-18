<!doctype html>
<html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title>ICCT Complaints Management System</title> 
  <link rel="stylesheet" href="style.css"> 
  <script src="https://kit.fontawesome.com/3fea454cc6.js" crossorigin="anonymous"></script> 
 <style type="text/css" id="dcoder_stylesheet">@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.body{
  background: #6c93ffcc;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #e61452cc;
}
.box{
  background: #fdfdfd;
  display: flex;
  flex-direction: column;
  padding: 25px 25px;
  border-radius: 20px;
  box-shadow: 0 0 128px 0 rgba(0,0,0,0.1), 0 32px 64px -48px rgba(0,0,0,0.5);
}
.form-box{
  width: 450px;
  margin: 0px 10px;
}
.form-box header{
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 10px;
  color: #e61452cc;
  text-align: center;
}
 
.form-box form .field{
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
}
.form-box form .input input{
  height: 40px;
  width: 100%;
  font-size: 16px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
}
.btn{
  height: 35px;
  background: rgba(230, 20, 82, 0.8);
  border: 0;
  border-radius: 7px;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  transition: all .3s;
  margin-top: 10px;
  padding: 0px 10px;
}
.btn:hover{
  opacity: 0.82;
}
.links{
  margin-bottom: 15px;
}
.links a{
  color: #007bff;
  text-decoration: none; 
}
.links a:hover{
  text-decoration: underline;
}</style></head> 
 <body> 
  <div class="container"> 
   <div class="box form-box"> 
    <header>
      Signup 
    </header> 
    <form action="" method="post"> 
     <div class="field input"> <label for="username">Student ID/Username</label> <i class="fas fa-user"></i> 
      <input type="text" name="username" id="username" placeholder="Enter your username" required> 
     </div> 
     <div class="field input"> <label for="email">Email</label> <i class="fas fa-envelope"></i> 
      <input type="email" name="email" id="email" placeholder="Enter your email" required> 
     </div> 
     <div class="field input"> <label for="number">Number</label> <i class="fas fa-phone"></i> 
      <input type="number" name="number" id="numbeer" placeholder="Enter your number" required> 
     </div> 
     <div class="field input"> <label for="password">Password</label> <i class="fas fa-lock"></i> 
      <input type="password" name="password" id="password" placeholder="Enter your password" required> 
     </div> 
     <div class="field"> 
      <input type="submit" class="btn" name="submit" value="Signup" " required> 
     </div> 
     <div class="links">
       Alreday have an account? <a href="Management System.html">Sign in</a> 
     </div> 
    </form> 
   </div> 
  </div> 
 
<script type="text/javascript" id="dcoder_script">var users = [];

    function showSignupForm() {
      document.querySelector('.form.login').style.display = 'none';
      document.querySelector('.form.signup').style.display = 'block';
    }

    function showLoginForm() {
      document.querySelector('.form.signup').style.display = 'none';
      document.querySelector('.form.login').style.display = 'block';
    }

    function togglePasswordVisibility() {
      var passwordField = document.getElementById('signupPassword');
      var showPasswordCheckbox = document.getElementById('showPassword');
      if (showPasswordCheckbox.checked) {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }
    }

    function signup() {
      var username = document.getElementById('signupUsername').value;
      var number = document.getElementById('signupNumber').value;
      var email = document.getElementById('signupEmail').value;
      var password = document.getElementById('signupPassword').value;

      // Check if username already exists
      if (users.find(user => user.username === username)) {
        alert('Username already exists. Please choose a different username.');
        return;
      }

      users.push({ username: username, number: number, email: email, password: password });
      alert('Signup successful! Please log in.');
      showLoginForm();
    }

    function login() {
      var username = document.getElementById('loginUsername').value;
      var password = document.getElementById('loginPassword').value;

      var user = users.find(user => user.username === username && user.password === password);

      if (user) {
        document.querySelector('.forms').style.display = 'none';
        document.getElementById('complaintForm').style.display = 'block';
        document.getElementById('studentId').value = user.number;
        document.getElementById('fullName').value = user.username;
        document.getElementById('email').value = user.email;
      } else {
        alert('Invalid username or password!');
      }
    }

    function logout() {
      document.getElementById('complaintForm').reset(); // Reset the complaint form
      document.getElementById('submittedComplaint').style.display = 'none'; // Hide the submitted complaint section
      document.getElementById('complaintForm').style.display = 'none'; // Hide the complaint form
      document.querySelector('.forms').style.display = 'block'; // Show the forms container
      showLoginForm(); // Show the login form explicitly
    }

    document.getElementById('complaintForm').addEventListener('submit', function(event) {
      event.preventDefault();
      // Get form values
      var studentId = document.getElementById('studentId').value;
      var fullName = document.getElementById('fullName').value;
      var email = document.getElementById('email').value;
      var date = document.getElementById('date').value;
      var complaintText = document.getElementById('complaintText').value;

      // Display submitted information
      document.getElementById('submittedStudentId').textContent = studentId;
      document.getElementById('submittedFullName').textContent = fullName;
      document.getElementById('submittedEmail').textContent = email;
      document.getElementById('submittedDate').textContent = date;
      document.getElementById('submittedComplaintText').textContent = complaintText;

      // Show the submitted complaint section
      document.getElementById('submittedComplaint').style.display = 'block';

      // Simulate sending email to user (display alert)
      var userMessage = `Dear ${fullName},\n\nThank you for submitting your complaint to ICCT. Below is the summary of your complaint:\n\nStudent ID: ${studentId}\nFull Name: ${fullName}\nEmail Address: ${email}\nDate: ${date}\nComplaint: ${complaintText}\n\nWe will review your complaint and respond shortly. Make sure that your email address is correct.\n\nBest regards,\nICCT Complaint Management Team`;
      alert(userMessage);

      // Simulate notifying staff (display alert)
      var staffMessage = `New Complaint Submitted:\n\nStudent ID: ${studentId}\nFull Name: ${fullName}\nEmail Address: ${email}\nDate: ${date}\nComplaint: ${complaintText}`;
      alert(staffMessage);

      // Reset the form after submission (optional)
      document.getElementById('complaintForm').reset();
    });</script></body></html>
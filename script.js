 var users = [];

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
    });

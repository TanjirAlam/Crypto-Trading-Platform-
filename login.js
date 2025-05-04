function handleLogin() {
    // Basic validation (you can expand this)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password.length >= 6) {
      window.location.href = "index.html"; // Redirect
    } else {
      alert("Please enter a valid email and password (min 6 characters).");
    }
  }

  function openSignupModal() {
    document.getElementById('signup-modal').style.display = 'block';
  }
  
  function closeSignupModal() {
    document.getElementById('signup-modal').style.display = 'none';
  }
  
  function handleSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    if (name && email && password.length >= 6) {
      alert(`Welcome, ${name}! Your account has been created.`);
      closeSignupModal();
    } else {
      alert('Please complete all fields with valid data.');
    }
  }
  
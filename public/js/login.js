
// LOGIN
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email:email, password:password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // If successful, redirect the browser to the profile page
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // SIGNUP
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#name-signup');
    const email = document.querySelector('#email-signup');
    const password = document.querySelector('#password-signup');
  
    if (username && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username: username.value.trim(), email: email.value.trim(), password: password.value.trim() }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        console.log(response);
        alert("Failed to sign up");
      }
    }
  };
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);  
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with your authentication logic
    if (username === 'yourUsername' && password === 'yourPassword') {
        // Successful login
        alert('Login successful!');
        // You can redirect the user to another page here
    } else {
        // Login failed
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});

var users = [
    { username: "ahmed", password: "ahmed" },
    { username: "ammar", password: "ammar" },
    { username: "admin", password: "admin" },
    { username: "a", password: "a" }
];

function Login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const check = users.find(user => user.username === username && user.password === password);

    if (check) {
        alert("Login successful!");
        window.location.href = "../index.html";
    } else {
        alert("Invalid username or password.");
    }
}

function Register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (users.some(user => user.username === username)) {
        alert("Username already exists.");
        return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
    users.push({ username, password });
    alert("Registration successful!");
    // Basic password validation (you can enhance this)
}
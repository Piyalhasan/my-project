// Simple demo login
function login(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "admin@hostel.com" && password === "12345") {
    localStorage.setItem("loggedIn", true);
    window.location.href = "dashboard.html";
  } else {
    alert("❌ Invalid login! Try admin@hostel.com / 12345");
  }
}

function checkLogin() {
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// Auto-check for restricted pages
if (window.location.pathname.includes("dashboard") ||
    window.location.pathname.includes("student") ||
    window.location.pathname.includes("room") ||
    window.location.pathname.includes("payment") ||
    window.location.pathname.includes("mess")) {
  checkLogin();
}

// যখন Admin বাটনে ক্লিক করা হবে
document.getElementById("adminBtn").addEventListener("click", function() {
  // Login page এ নিয়ে যাবে
  window.location.href = "login.html";
});


function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if (user && pass) {
    localStorage.setItem("login", "true");
    window.location.href = "dashboard.html";
  }
}

if (window.location.pathname.includes("dashboard")) {
  if (!localStorage.getItem("login")) {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("login");
  window.location.href = "login.html";
}

function toggleDark() {
  document.body.classList.toggle("light");
}

let data = { users: 120, sales: 450, visits: 1200 };

function load() {
  if (document.getElementById("users")) {
    document.getElementById("users").innerText = data.users;
    document.getElementById("sales").innerText = data.sales;
    document.getElementById("visits").innerText = data.visits;
  }
}

function chart() {
  let ctx = document.getElementById("chart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon","Tue","Wed","Thu","Fri"],
      datasets: [{
        label: "Users",
        data: [10,20,15,30,25],
        borderColor: "#3b82f6"
      }]
    }
  });
}

load();
chart();

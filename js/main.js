const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebar-close");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.add("open");
});

sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("open");
});
document.getElementById("menu-toggle").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
});

// Close sidebar when mouse leaves it
document.getElementById("sidebar").addEventListener("mouseleave", function() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
    }
});

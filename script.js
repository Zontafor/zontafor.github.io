document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("active");
});

document.getElementById("sidebar").addEventListener("mouseleave", function() {
    document.getElementById("sidebar").classList.remove("active");
});

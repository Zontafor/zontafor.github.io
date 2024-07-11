document.getElementById("menu-toggle").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
});

// No need to close sidebar on mouse leave since it is now fixed
// You can remove the below code if it is not needed
// document.getElementById("sidebar").addEventListener("mouseleave", function() {
//     var sidebar = document.getElementById("sidebar");
//     if (sidebar.classList.contains("active")) {
//         sidebar.classList.remove("active");
//     }
// });

// Show footer when scrolled to the bottom
window.addEventListener("scroll", function() {
    var footer = document.querySelector("footer");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.classList.add("visible");
    } else {
        footer.classList.remove("visible");
    }
});

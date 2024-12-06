window.onload = function () {
    // Hide the loader after the page has fully loaded
    document.getElementById("loader").style.display = "none";
};
function handleCategoryChange(event) {
    const selectedCategory = event.target.value;
    const url = new URL(window.location.href);
    url.searchParams.set("category", selectedCategory);
    window.location.href = url.href;
}

document
    .getElementById("categories-desktop")
    .addEventListener("change", handleCategoryChange);
document
    .getElementById("categories-mobile")
    .addEventListener("change", handleCategoryChange);

document.getElementById("nav-toggle").addEventListener("click", function () {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("hidden");
});

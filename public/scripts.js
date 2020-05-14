const currentPage = window.location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentPage == item.getAttribute("href")) {
        item.classList.add("active")
    }
}
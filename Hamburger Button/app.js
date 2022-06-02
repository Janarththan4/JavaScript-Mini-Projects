const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('close-btn');
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
})

closeBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
})


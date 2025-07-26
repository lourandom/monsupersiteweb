let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* side navigation width 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* side navigation width 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
const menuOpen = document.getElementById("menu-open");
const menuExit = document.getElementById("menu-exit");
const menuView = document.getElementById("menu-container");

menuOpen.addEventListener("click", () =>{
    menuView.className = "";
    menuView.style.zIndex = "3";
});

menuExit.addEventListener("click", () =>{
    menuView.className = "hidden";
});

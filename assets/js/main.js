const menu = document.querySelector("header img:nth-child(2)");

menu.addEventListener("click", () => {
    closeSidebar();
    openSidebar();
})

function closeSidebar() {
    const p = document.getElementsByTagName("p");
    if(p){
        for(let x = 0; x < p.length; x++){
            p[x].style.visibility = "hidden";
        }
    }

    const logo = document.querySelector("header img:first-child");
    logo.setAttribute("src", "assets/img/menu.svg");
    logo.style.cursor = "pointer";

    menu.style.visibility = "hidden";

    const avatar = document.querySelector("nav div img:first-child");
    avatar.setAttribute("src", "assets/img/log-out.svg");
    avatar.style.width = "24px";
    avatar.style.marginLeft = "25px";

    const logOut = document.querySelector("nav div img:nth-child(3)");
    logOut.style.visibility = "hidden"

    const aside = document.querySelector("aside");
    aside.style.width = "76px"

    const div = document.querySelector("nav div");
    div.style.width = "76px"

}

function openSidebar(){

}
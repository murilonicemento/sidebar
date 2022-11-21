const menu = document.querySelector("header img:nth-child(2)");

menu.addEventListener("click", () => {
    closeSidebar();
})

function closeSidebar() {
    document.body.classList.toggle("open");
    document.body.classList.toggle("close");

    if (document.body.classList.contains("close")) {
        const logo = document.querySelector("header img:first-child");
        logo.style.visibility = "hidden";
        menu.style.marginLeft = "-80px";
        menu.style.marginRight = "10px";

        const logOut = document.querySelector("nav div img:nth-child(3)");
        logOut.style.marginLeft = "-95px";
    }else {
        const logo = document.querySelector("header img:first-child");
        logo.style.visibility = "inherit";

        const logOut = document.querySelector("nav div img:nth-child(3)");
        logOut.style.marginLeft = "";
    }


}

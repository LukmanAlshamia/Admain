let notification = document.querySelector(".notification i");
let infonoti = document.querySelector(".infonoti");
notification.onclick = ()=>{
    infonoti.classList.toggle("active");
    notification.parentNode.classList.remove("active")
}
window.document.addEventListener("click", (e)=> {
    if(infonoti.classList.contains("active") && !e.target.parentElement.classList.contains("notification"))
    infonoti.classList.remove("active");
});
//Title Write
let title = document.querySelector(".title");
let titleText = title.innerHTML;
let i = 0;
title.innerHTML = "";
let timer = setInterval(()=> {
    title.innerHTML += titleText[i];
    i++;
    i == titleText.length  ? clearInterval(timer) : "";
}, 150);
//Scale boxes
let sect = document.querySelectorAll(".scale");
let secArr = Array.from(sect);
window.onscroll = ()=> {
    secArr.forEach(e=> {

        if (window.pageYOffset >= e.offsetTop + 80) {
            e.style.transform = "scale(0)";
        } else {
            e.style.transform = "scale(0.9)";
            e.onmouseover = ()=> {
                e.style.transform = "scale(1)";
            }
            e.onmouseout = ()=> {
                e.style.transform = "scale(0.9)";
            }
        }
    })
}
//Sidebar
let bergar = document.querySelector(".bergar");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
bergar.onclick = ()=> {
    if (sidebar.style.position == "absolute") {
        sidebar.style.left = "0px"
        content.style.left = `+${sidebar.offsetWidth}px`;
        let ad = setTimeout(()=>{
            content.style.left = ``;
            clearInterval(ad)
        }, 400)
        sidebar.style.position = "relative";
    } else {
        sidebar.style.left = "-250px";
        content.style.left = `-${sidebar.offsetWidth}px`;
        let ad = setTimeout(()=>{
            content.style.left = ``;
            clearInterval(ad)
        }, 500)
        sidebar.style.position = "absolute";
    }
}
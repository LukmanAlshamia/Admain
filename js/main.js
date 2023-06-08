// Dashbord Page

//Finish Tassk
window.document.addEventListener("click", (e)=> {
    if(e.target.id == "delete") {
        e.path[1].classList.toggle("finish")
    }
})
//Yearly Progres
let progres = document.querySelectorAll(".progres span");
let yearly = document.querySelector(".yearly")
let progresArr = [...progres];
yearly.onmouseover = ()=> {
    progresArr.forEach(e=>{
        e.style.transition = "1s";
        e.style.width = "var(--i)"
    })
}
yearly.onmouseout = ()=> {
    progresArr.forEach(e=>{
        e.style.transition = "1s";
        e.style.width = "0"
    })
}
//Notification
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
        if (window.pageYOffset >= e.offsetTop + 280) {
            e.style.transform = "scale(0)";
            if(e.classList.contains("yearly")) {
                progresArr.forEach(e=>{
                    e.style.transition = "1s";
                    e.style.width = "0"
                })
            }
        } else {
            e.style.transform = "scale(0.9)";
            e.onmouseover = ()=> {
                e.style.transform = "scale(1)";
                if(e.classList.contains("yearly")) {
                    progresArr.forEach(e=>{
                        e.style.transition = "1s";
                        e.style.width = "var(--i)"
                    })
                }
            }
            e.onmouseout = ()=> {
                e.style.transform = "scale(0.9)";
                if(e.classList.contains("yearly")) {
                    progresArr.forEach(e=>{
                        e.style.transition = "1s";
                        e.style.width = "0"
                    })
                }
            }
        }
    })
}
//Sidebar
let bergar = document.querySelector(".bergar");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
console.log(sidebar.style.position == "absolute")
bergar.onclick = ()=> {
    /*if (sidebar.style.left == "-250px") {
        sidebar.style.left = "0"
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
    }*/
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

/*******************************************************************/


export {notification};
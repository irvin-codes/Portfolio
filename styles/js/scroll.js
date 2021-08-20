const header = document.getElementById("main-header");

function scrollHeaderTop(){
    if (window.scrollY === 0){
        
        header.classList.remove("scroll-js")
    }
    else if(window.scrollY > 1){
        header.classList.add("scroll-js")
    }
}

document.onscroll = scrollHeaderTop;




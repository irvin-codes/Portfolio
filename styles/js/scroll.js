const header = document.getElementById("main-header");
const linkHome = document.getElementById("link-home");
const linkAbout = document.getElementById("link-about");
const linkSkills = document.getElementById("link-skills");
const linkContact = document.getElementById("link-contact");

function scrollHeaderTop(){
    if (window.scrollY === 0){
        
        header.classList.remove("scroll-js")
        linkHome.classList.remove("color-change")
        linkAbout.classList.remove("color-change")
        linkSkills.classList.remove("color-change")
        linkContact.classList.remove("color-change")
    }
    else if(window.scrollY > 1){
        header.classList.add("scroll-js")
        linkHome.classList.add("color-change")
        linkAbout.classList.add("color-change")
        linkSkills.classList.add("color-change")
        linkContact.classList.add("color-change")
       
    }
}

document.onscroll = scrollHeaderTop;




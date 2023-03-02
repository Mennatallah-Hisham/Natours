
const navbtn = document.querySelector(".nav__button");

const html = document.querySelector("html");
const nav = document.querySelector(".nav-wrapper");
const allLinks =document.querySelectorAll('a:link');

function toggleNav(){

    nav.classList.toggle("open-nav");
    html.classList.toggle("overflowHide");
}
navbtn.addEventListener("click",toggleNav);

allLinks.forEach( function(link){
    link.addEventListener('click',(e)=>{

        e.preventDefault();
        const href=link.getAttribute("href");

        //scroll back to top
        if(href==="#"){
            window.scrollTo({
                top:0,
                behavior:"smooth",

            })
        }

        //scroll to other links
        if(href !=="#" && href.startsWith("#")){
          const sectionEl=  document.querySelector(href);
          sectionEl.scrollIntoView(
            {
                behavior:"smooth",
            }
          )
        }

        if(nav.classList.contains("open-nav")){

              toggleNav();


        }
       
    });
})
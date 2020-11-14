// hamburger active
const nav = ()=> {
    const hamburger = document.querySelector('.hamburger');
    const navlinks = document.querySelector('.nav_links');
    hamburger.addEventListener('click', ()=> {
    navlinks.classList.toggle('navlink_active');
    hamburger.classList.toggle('close_menu');
    })
}
nav();

window.addEventListener('scroll',function(){
    var navbar = document.querySelector('nav');
    navbar.classList.toggle('navbarScroll',window.scrollY>0);
})
// scroll animation
ScrollOut({
   
    targets : 'section,div,button,a',
    once:true,
    threshold:0.5
})
ScrollOut({
    targets : 'nav',
    once:false,
    threshold:0.5
})


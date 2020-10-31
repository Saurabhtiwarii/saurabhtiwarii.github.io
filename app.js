const nav = ()=> {
    const hamburger = document.querySelector('.hamburger');
    const navlinks = document.querySelector('.nav_links');
    hamburger.addEventListener('click', ()=> {
        navlinks.classList.toggle('navlink_active');
    })
}
nav();

window.addEventListener('scroll',function(){
    var navbar = document.querySelector('nav');
    navbar.classList.toggle('navbarScroll',window.scrollY>0);
})

ScrollOut({
    targets : 'section,div,#skill-bar1'
})
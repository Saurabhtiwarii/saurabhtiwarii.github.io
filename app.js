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
    targets : 'section,div,button,a,nav'
})
// project1 open
const sec1 = ()=> {
    const project1 = document.querySelector('.project1');
    project1.addEventListener('click', ()=> {
        project1.classList.toggle('open_sec1');
        })
}
sec1();
// project1 close
const pr1_close = ()=>{
    const close_btn1 =  document.querySelector(".close_btn1");
    const project1 = document.querySelector('.project1');
    close_btn1.addEventListener('click', ()=> {
        project1.classList.remove('open_sec1');
        })
}

const nav = ()=> {
    const hamburger = document.querySelector('.hamburger');
    const navlinks = document.querySelector('.nav_links');
    hamburger.addEventListener('click', ()=> {
        navlinks.classList.toggle('navlink_active');
    })
}
nav();


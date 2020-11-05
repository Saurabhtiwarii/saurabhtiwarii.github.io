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
    targets : 'section,div,button,a,nav'
})
// project1 active
const sec1 = ()=> {
    const project = document.querySelector('.projects');
    const project1= document.querySelector('.project1');
    project1.addEventListener('click', ()=> {
        project.classList.toggle('pr1_active');
        })
}
sec1();
// project1 close
// const pr1_close = ()=>{
//     const close_btn1 =  document.querySelector(".close_btn1");
//     const project = document.querySelector('.projects');
//     close_btn1.addEventListener('click', ()=> {
//         project.classList.remove('pr1_active');
//         })
// }
// pr1_close();

// project 2 active
const pr2 = ()=> {
    const project = document.querySelector('.projects');
    const project2= document.querySelector('.project2');
    project2.addEventListener('click', ()=> {
        project.classList.toggle('pr2_active');
        })
}
pr2();

//**  Project3 active //
const pr3 = ()=> {
    const project = document.querySelector('.projects');
    const project3= document.querySelector('.project3');
    project3.addEventListener('click', ()=> {
        project.classList.toggle('pr3_active');
        })
}
pr3();

//**  Project4 active //
const pr4 = ()=> {
    const project = document.querySelector('.projects');
    const project4= document.querySelector('.project4');
    project4.addEventListener('click', ()=> {
        project.classList.toggle('pr4_active');
        })
}
pr4();

//**  Project5 active //
const pr5 = ()=> {
    const project = document.querySelector('.projects');
    const project5= document.querySelector('.project5');
    project5.addEventListener('click', ()=> {
        project.classList.toggle('pr5_active');
        })
}
pr5();
//**  Project6 active //
const pr6 = ()=> {
    const project = document.querySelector('.projects');
    const project5= document.querySelector('.project6');
    project5.addEventListener('click', ()=> {
        project.classList.toggle('pr6_active');
        })
}
pr6();


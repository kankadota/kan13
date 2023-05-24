'use strict';

{
    const btn = document.querySelector('.toggle_btn')
    const navi = document.getElementById('navi')
    const mask = document.getElementById('mask')

    btn.addEventListener('click', () => {

        btn.classList.toggle('open')
        navi.classList.toggle('open')
        mask.classList.toggle('open')
    })
}


{
    const list = document.querySelector('#navi' )
    const btn = document.querySelector('.toggle_btn')
    const navi = document.getElementById('navi')
    const mask = document.getElementById('mask')

    list.addEventListener('click', () => {

        btn.classList.remove('open')
        navi.classList.remove('open')
        mask.classList.remove('open')
    })
}


{
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        freeMode: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

if(window.matchMedia("(max-width: 600px)").matches){
    const swiper = new Swiper('.swiper', {
        loop: true,
        
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}


{
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', e => {
           
            e.preventDefault();

            const target = document.querySelector(link.hash)

            const offsetTop = window.pageYOffset + target.getBoundingClientRect().top;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            })

        })
    })

}

// {
// const target = document.querySelectorAll('.fadein');

// window.addEventListener('scroll',()=>{
//  for (let i = 0 ; i < target.length ; i++) {
    
//     const dis = target[i];

//     const newdis = dis.getBoundingClientRect().top + dis.clientHeight*0.2


//     if(window.innerHeight > newdis){
//         dis.style.opacity='1'
//         dis.style.transform = 'translateY(0)'
//     } } } ) }

{
const targets = document.querySelectorAll('.fadein')

window.addEventListener('scroll', ()=>{

targets.forEach(target => {

    const dis = target.getBoundingClientRect().top + target.clientHeight*0.2
    
    if(window.innerHeight > dis){
        target.style.opacity ='1'
        target.style.transform = 'translateY(0)'
    }
})
})}
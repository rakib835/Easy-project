let lastScrollTop='0';
navbar=document.getElementById('navbar');
window.addEventListener('scroll',function(){
    let scrollTop=window.pageYOffset||document
    .documentElement.window;
    if(scrollTop>lastScrollTop){
        navbar.style.top='-80px';
    }
    else{
        navbar.style.top='0px'
    }
    lastScrollTop=scrollTop;
})













const icon=document.getElementById('icon');
const menu=document.getElementById('menu');
icon.onclick=function(){
    menu.classList.toggle('active');
    icon.classList.toggle('active');
}
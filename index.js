const iconoMenu = document.querySelector('#icono-menu');
const iconoClose = document.querySelector('#icono_close');
const menu = document.querySelector('#menu');
iconoMenu.addEventListener('click',function(){
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        document.body.classList.add('opacity');
        
        return;
    }
    menu.classList.add('active');
    document.body.classList.remove('opacity');

})

iconoClose.addEventListener('click',function(){
    menu.classList.add('active');
    document.body.classList.remove('opacity');
})
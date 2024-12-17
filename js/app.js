const search= document.querySelector('.search');
const input=document.querySelector('.input');
const btn= document.querySelector('.btn');


// click and add classlist
btn.addEventListener('click', function(){
    input.classList.toggle('active');
    input.focus()
    
})




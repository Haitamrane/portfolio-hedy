var menu = document.querySelector('.burg');
var list = document.querySelector('.burger-close');
var burg = document.querySelector('.burg');

menu.addEventListener('click', function(){
    list.classList.toggle("burger-close_active")
    burg.classList.toggle("burg_active")
});

list.addEventListener('click', function(){
  list.classList.toggle("burger-close_active")
  burg.classList.toggle("burg_active")
});
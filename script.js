/* menu list */
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}

/* play btn & pause btn */
let vid=document.getElementById("MyVideo");
    function playVid(){
    vid.play();
    }
    function pauseVid(){
    vid.pause();
    }
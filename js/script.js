

let cursor = document.querySelector('.cursor');


// mouse tracking
window.onmousemove = (e) =>{
       cursor.style.top = e.pageY + 'px';
       cursor.style.left = e.pageX + 'px';
}

let homeImg = document.querySelector('.home .home-img');

// home Img tracking 
document.querySelector('.home').onmousemove = (e) =>{
       homeImg.style.top = e.pageY + 'px';
       homeImg.style.left = e.pageX + 'px';
}


//change the nav images based on the nav item
document.querySelectorAll('.navbar a ').forEach( link => {
       link.onmouseenter = () =>{
              document.querySelector('.navbar-img img').src = link.getAttribute('data-src');
       };
       link.onmouseleave = () =>{
              document.querySelector('.navbar-img img').src = "imges/home.png";
       };
});

//show nav bar and image when click the burger menu
let navbar = document.querySelector('.navbar');
let navbarImg = document.querySelector('.navbar-img');

document.querySelector('#menu-btn').onclick = () => {
       navbar.classList.toggle('active');
       navbarImg.classList.toggle('active');
};


//remove nav bar and image (and use media queries in CSS to show them agin)
// for testing 
window.onscroll = () => {
       navbar.classList.remove('active');
       navbarImg.classList.remove('active');
};

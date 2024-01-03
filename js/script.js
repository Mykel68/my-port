



// (function($){

//     $('#menu').click(function(){
//         $(this).toggleClass('fas fa-times');
//         $('header').toggleClass('toggle');
//     });

//     $(window).on('scroll load',function(){

//         $('#menu').removeClass('fas fa-times');
//         $('header').removeClass('toggle');

//     });
// if($(window).scrollTop() > 0){
//   $('.top').show();
// }
// else{
//   $('.top').hide();
// }


// smooth scrolling

// $('a[href*="#"]').on('click',fuction(e){

//   e.preventDefault();
//   $('html,body').animate({
//     scrollTop :$($(this).after('href')).offset().top,
//   },
//   500,
//   'linear'
//   );
//   });
// });





const menu = document.querySelector('#menu');
const header = document.querySelector('header');
    menu.onclick = function(){
      // header = document.getElementsByTagName(header);
          this.classList.toggle('fa-times');
          header.classList.toggle('toggle');
    };
    document.onscroll = function(){
          menu.removeClass('fa-times');
          header.removeClass('toggle'); 
    };



// let menu = document.querySelector('.checkbtn');
// let navbar = document.querySelector('ul'); 

// menu.onclick = () => {
//    menu.classList.toggle('fas fa-bars');
//    navbar.classList.toggle('ul')
// }
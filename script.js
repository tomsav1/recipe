$(document).ready(function() {
   $('div.img').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div.img').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div.img').click(function() {
       $(this).toggle(1000);
   }); 
});
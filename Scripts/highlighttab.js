$(document).ready(function(){
   $('#tab li').mouseover(function(){
      $(this).addClass('hover');
   });
         
   $('#tab li').mouseout(function(){
      $(this).removeClass('hover');
   });
});

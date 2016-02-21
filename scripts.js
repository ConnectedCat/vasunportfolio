$(document).ready(function(){
  $(window).load(function(){
    adjProjectText();
  });
  $(window).resize(function(){
    adjProjectText();
  });
});

var adjProjectText = function(){
  if($('body').has('.project-text')){
    if($(window).width() > 992){
      $('.project-text').width(($('.row').width()-30)/4);
    }
    else {
      $('.project-text').width('100%');
    }
  }
}

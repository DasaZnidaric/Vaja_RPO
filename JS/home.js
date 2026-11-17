//MENI gumb porine stran dol
$('.navbar-toggler').click(function(){

    if($('header').height() == 0){
        $('header').animate({height: '450px'}, 200);
    }
        else $('header').animate({height: '0px'}, 'slow');

});

//Cooldown za dropdown meni
var button = document.querySelector('.navbar-toggler');

$(button).click(function() {

  button.disabled = true;

  setTimeout(function() {
    button.disabled = false;
  }, 500);
});

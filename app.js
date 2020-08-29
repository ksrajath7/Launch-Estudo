var animateButton = function(e) {

    //reset animation
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },1000);

    setTimeout(function(){
      window.location.assign("https://www.estudo.in/");
      
    },50);
    

  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
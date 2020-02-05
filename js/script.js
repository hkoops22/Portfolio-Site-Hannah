function menuToggle() {
  var x = document.getElementById('myNavtoggle')
  //searches the doc for the ID myNavtoggle in the div
  //assigned nav object new variable x
  if (x. className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle'; 
  }
  //we want to show the menu if it isn't shown or viceversa so if/then statement added
  // browser checks classname of x to see if it's navtoggle or not, if it is then adds responsive if not it will change className back aka hide the menu


}

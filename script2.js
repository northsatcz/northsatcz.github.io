// console.clear();
// var turn = 30;
// var turnCount = 8;
// TweenMax.set(".master, .parentCircle", {yPercent:-50, xPercent:-50});
// TweenMax.set(".box", {transformOrigin:"-300px center"});
// TweenMax.set("#box1", {rotation:-(2*turn)});
// TweenMax.set("#box2", {rotation:-turn});
// TweenMax.set("#box4", {rotation:turn});
// TweenMax.set("#box5", {rotation:turn*2});
// TweenMax.set("#box6", {rotation:turn*4});
// TweenMax.set("#box7", {rotation:turn*6});
// TweenMax.set("#box8", {rotation:turn*8});

// function boxTurn() {
//   turnCount--;
//   TweenMax.set("#box" + turnCount, {rotation:-(3*turn)});
//   TweenMax.to(".box", 1.6, {rotation:"+=" + turn, delay:1, ease:Power2.easeInOut, onComplete:boxTurn});
//     if (turnCount === 1) {
//     turnCount = 6;
//   } 
// }

// boxTurn();

// jquery code

var x = 0,
    container = $('.container'),
    items = container.find('li'),
    containerHeight = 0,
    numberVisible = 9,
    intervalSec = 2000;

if(!container.find('li:first').hasClass("first")){
  container.find('li:first').addClass("first");
}

items.each(function(){
  if(x < numberVisible){
    containerHeight = containerHeight + $(this).outerHeight();
    x++;
  }
});

container.css({ height: containerHeight, overflow: "hidden" });
  
function vertCycle() {
  var firstItem = container.find('li.first').html();
    
  container.append('<li>'+firstItem+'</li>');
  firstItem = '';
  container.find('li.first').animate({ marginTop: "-50px", opacity: '0' }, 400, function(){  $(this).remove(); container.find('li:first').addClass("first"); });
}

if(intervalSec < 700){
  intervalSec = 700;
}

var init = setInterval("vertCycle()",intervalSec);

container.hover(function(){
  clearInterval(init);
}, function(){
  init = setInterval("vertCycle()",intervalSec);
});

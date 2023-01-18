function roundedSliderInverval(){
  var box = document.getElementsByClassName("box");
  for(let i = 1;i < box.length;i++){
    let cc = i.toString();
    let cc2 = i.toString();
    let check = 'p'+ cc;
    let check2  = 'p'+ cc2;


    console.log(check)
    
    box[0].classList.add('pNone');
    box[0].classList.remove('p1');
    box[i].classList.add(check)
    box1.classList.remove(check2);
  }
  console.log("interval is working")
}

setInterval(roundedSliderInverval, 1000);
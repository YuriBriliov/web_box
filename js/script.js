// 'use strict'
// background_animation_1

// function boxes(){
//   const count = 30;
//   const main = document.querySelector('body');
//   let i = 0;
//   while(i < count){
//     let box = document.createElement('i');
//     let x = Math.floor(Math.random() * window.innerWidth);
//     let y = Math.floor(Math.random() * window.innerHeight);
//     let size = Math.random() * 10;
//     box.style.left = x + 'px'
//     box.style.top = y + 'px'
//     box.style.width = 20+ 'px'
//     box.style.height = 20+ 'px'
//     box.style.zIndex = "2";

//     box.style.animationDuration = 10 + size + 's'
//     box.style.AnimationDelay = -size + 's'

//     main.appendChild(box)
//     i++
//   }
// }
// boxes()

function calculate(){
  let price = document.querySelector('.total');
  let count = 0;
  const checks = document.querySelectorAll('input[type="checkbox"]');
  // console.log(checks)
  checks.forEach(item=>{
    if (item.id == "one" && item.checked == true) {
      count+=100
    }
    if (item.id == "two" && item.checked == true) {
      count+=200
    }
    if (item.id == "three" && item.checked == true) {
      count+=300
    }
    if (item.id == "four" && item.checked == true) {
      count+=400
    }
    if (item.id == "five" && item.checked == true) {
      count+=500
    }
  })
  price.textContent = count;
  // console.log(price)
}
calculate()

window.addEventListener('scroll', (event)=>{
  event.preventDefault();
  let sub_men = document.querySelector('.main-menu');
  if (window.pageYOffset >= 110 && window.innerWidth < 490) {
    sub_men.style.display = 'block'
  }else{
    sub_men.style.display = 'none'
  }
})

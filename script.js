var btns = document.getElementsByTagName('button')
 







function calc(e) {
var clicked = e.target 
var block = clicked.parentElement 
var p = block.querySelector('p')
var value = Number(p.innerHTML)
// let price = document.getElementsByClassName('price')
// let unit_price = document.getElementsByClassName('unitPrice')
// console.log(price)
let td = block.parentElement
let tr = td.parentElement
let unit_price = tr.querySelector('.unitPrice')
let up = Number(unit_price.innerHTML)
let price = tr.querySelector('.price')
let final_price = Number(price.innerHTML)
let total = document.getElementById('total')


if ((clicked.innerHTML) === '+')
 {
    value ++
}
else if ((clicked.innerHTML) === '-' && value > 0)
 {
  value --   
}

p.innerHTML = value; 
let subtotal = price.innerHTML = value * up;
total.innerHTML = subtotal
}
  



let like_btns = document.querySelectorAll('.like');


function red(e) {
  let target = e.target 
  if (target.style.color!=="red"){
    target.style.color = "red";
  }else target.style.color = "black";
  
}



let del = document.querySelectorAll(".delete");


function del(e) {
  let target = e.target
  let row = target.parentElement.parentElement.parentElement.parentElement
  // console.log(row)
}







for (let i = 0; i < del.length; i++) {
del[i].addEventListener('click', del)  
}




























for (let i = 0; i < like_btns.length; i++) {
like_btns[i].addEventListener('click', red)  
}















for (let i = 0; i < btns.length; i++) {
btns[i].addEventListener('click' ,calc ,) 
// btns[i].addEventListener('click' ,like ,)    

 }




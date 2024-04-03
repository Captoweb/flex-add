let btn1 = document.querySelector('.btn-1')
let btn2 = document.querySelector('.btn-2')
let btn3 = document.querySelector('.btn-3')
let btn4 = document.querySelector('.btn-4')
let parent = document.querySelector('.parent')
let textOut1 = document.querySelector('.text1')

function addReverse() {
    parent.style.flexDirection = 'row-reverse'
    textOut1.innerHTML = 'row-reverse'
    textOut1.style.color = 'Yellow'
}

function delReverse() {
    // parent.classList.remove('reverse')
    parent.style.flexDirection = 'row'
    textOut1.innerHTML = 'row'
    textOut1.style.color = 'Green'
}

function setColumn() {
    parent.style.flexDirection = 'column'
    textOut1.innerHTML = 'column' 
    textOut1.style.color = 'Aqua'
}

function setColumnReverse() {
    parent.style.flexDirection = 'column-reverse'
    textOut1.innerHTML = 'column-reverse'
    textOut1.style.color = 'OrangeRed'
}


btn1.addEventListener('click', delReverse)
btn2.addEventListener('click', addReverse)

btn3.addEventListener('click', setColumn)
btn4.addEventListener('click', setColumnReverse)



// вторая картинка

let btn5 = document.querySelector('.btn-5')
let btn6 = document.querySelector('.btn-6')
let btn7 = document.querySelector('.btn-7')
let btn8 = document.querySelector('.btn-8')
let btn9 = document.querySelector('.btn-9')
let btn10 = document.querySelector('.btn-10')

let parent2 = document.querySelector('.parent2')
let textOut2 = document.querySelector('.text2')


function flexStart() {
    parent2.style.justifyContent = 'flex-start'
    textOut2.innerHTML = 'flex-start'
}

function flexEnd() {
    parent2.style.justifyContent = 'flex-end'
    textOut2.innerHTML = 'flex-end'
}

function center() {
    parent2.style.justifyContent = 'center'
    textOut2.innerHTML = 'center'
}

function spaceBetween() {
    parent2.style.justifyContent = 'space-between'
    textOut2.innerHTML = 'space-between'
}

function spaceAround() {
    parent2.style.justifyContent = 'space-around'
    textOut2.innerHTML = 'space-around'
}

function spaceEvenly() {
    parent2.style.justifyContent ='space-evenly'
    textOut2.innerHTML = 'space-evenly'
}

btn5.addEventListener('click', flexStart)
btn6.addEventListener('click', flexEnd)
btn7.addEventListener('click', center)
btn8.addEventListener('click', spaceBetween)
btn9.addEventListener('click', spaceAround)
btn10.addEventListener('click', spaceEvenly)



// третья картинка

let btn11 = document.querySelector('.btn-11')
let btn12 = document.querySelector('.btn-12')
let btn13 = document.querySelector('.btn-13')
let btn14 = document.querySelector('.btn-14')
let btn15 = document.querySelector('.btn-15')

let parent3 = document.querySelector('.parent3')
let textOut3 = document.querySelector('.text3')



function alignItemsStart() {
    parent3.style.alignItems = 'flex-start'
    textOut3.innerHTML = 'flex-start'
}

function alignItemsEnd() {
    parent3.style.alignItems = 'flex-end'
    textOut3.innerHTML = 'flex-end'
}

function alignItemsCenter() {
    parent3.style.alignItems = 'center'
    textOut3.innerHTML = 'center'
}

function alignItemsBaseline() {
    parent3.style.alignItems = 'baseline'
    textOut3.innerHTML = 'baseline'
}

function alignItemsStretch() {
    parent3.style.alignItems = 'stretch'
    textOut3.innerHTML = 'stretch'
}



btn11.addEventListener('click', alignItemsStart)
btn12.addEventListener('click', alignItemsEnd)
btn13.addEventListener('click', alignItemsCenter)
btn14.addEventListener('click', alignItemsBaseline)
btn15.addEventListener('click', alignItemsStretch)





// четвертая картинка

let btn16 = document.querySelector('.btn-16')
let btn17 = document.querySelector('.btn-17')
let btn18 = document.querySelector('.btn-18')

let btn19 = document.querySelector('.btn-19')
let btn20 = document.querySelector('.btn-20')

let order = document.querySelector('.order')
let textOut4 = document.querySelector('.text4')
let textOut41 = document.querySelector('.text4-span')
let parent4 = document.querySelector('.parent4')



function orderMinus1() {
    order.style.order = '-1'
    textOut4.innerHTML = '-1'
}

function order0() {
    order.style.order = '0'
    textOut4.innerHTML = '0'
}

function order1() {
    order.style.order = '1'
    textOut4.innerHTML = '1'
}

function setColumn2() {
    parent4.style.flexDirection = 'column'
    textOut41.innerHTML = 'column' 
}

function setRow2() {
    parent4.style.flexDirection = 'row'
    textOut41.innerHTML = 'row' 
}


btn16.addEventListener('click', orderMinus1)
btn17.addEventListener('click', order0)
btn18.addEventListener('click', order1)

btn19.addEventListener('click', setColumn2)
btn20.addEventListener('click', setRow2)




let btn21 = document.querySelector('.btn-21')
let parent5 = document.querySelector('.parent5')

function setGap() {
    let g1 = document.querySelector('.gap1').value
    let g2 = document.querySelector('.gap2').value
    console.log(g1, g2)
    parent5.style.gap = g1 + 'px' + ' ' + g2 + 'px'
//    console.log(g1 + 'px' + ' ' + g2 + 'px')
}

btn21.addEventListener('click', setGap)



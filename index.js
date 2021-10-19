

var nextBtn = document.querySelector('.slider-control-btn.next-btn')
var preBtn = document.querySelector('.slider-control-btn.previous-btn')
var slider = document.querySelector('.slider')

nextBtn.onclick = () => {
    console.log('Slider')
    document.querySelector('.slider').scrollLeft += 1000
    document.querySelector('.slide-img').style = 'transform: scale(1.2)'
}

preBtn.onclick = () => {
    console.log('Slider')
    document.querySelector('.slider').scrollLeft -= 1000
}
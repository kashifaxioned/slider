/* Author: 

*/

let slides = $(".slides")
$(".left-btn").click(backward)
$(".right-btn").click(forward)

let counter = 0

function backward() {
  counter--;
  slides.map((index, slide) => $(slide).addClass("backward"))
  showSlide()
}

function forward() {
  counter++;
  slides.map((index, slide) => $(slide).addClass("forward"))
  showSlide()
}

function showSlide() {
  if(counter < 0) counter = slides.length - 1
  else if(counter >= slides.length) counter = 0 
  slides.map((index, slide) => {
    if(index === counter) $(slide).addClass("show")
    else $(slide).removeClass("show")
  })
}




















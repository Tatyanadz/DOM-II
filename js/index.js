// Your code goes here
let navLink = document.querySelectorAll(".nav-link");
let introArea = document.querySelector('.intro');
let introH2 = document.querySelector('.intro h2');
let container = document.querySelector('body');
let img1 = document.querySelector('.content-section img');
let img2 = document.querySelector('.inverse-content img');
const text = document.querySelector('.home');
const contentSection = document.querySelector('.content-section');
  
for (var i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click', function(event) {
       event.preventDefault()
       event.stopPropagation();
       event.target.style.color = "red"
       function revertColor(){
         event.target.style.color = "black"
       }
       setTimeout(revertColor, 500);
    });
  }

  
introArea.addEventListener('mouseenter', function(){
  introH2.style.fontSize="4rem";
  introH2.style.color = 'red'
})

introArea.addEventListener('mouseleave', function(){
  introH2.style.fontSize="3.2rem";
  introH2.style.color = "black"
})

container.addEventListener('click',function(){
  console.log('Shhh, no one else knows about that function!');
});

container.addEventListener('keydown',function(){
  img1.src = 'img/fun.jpg';
  img2.src = 'img/adventure.jpg'; 
});

container.addEventListener('keyup', function(){
  img1.src = 'img/adventure.jpg'; 
  img2.src = 'img/fun.jpg';
});

text.addEventListener('copy', function(){
  window.alert("STEALING?");
})

text.addEventListener('cut', function(){
  window.alert("STEALING?");
})

document.addEventListener('scroll', function(){
  contentSection.style.flexDirection = "row-reverse";
})

contentSection.addEventListener('dblclick', function(){
  contentSection.style.flexDirection = "row";
})
'use strict';

{
const door = document.getElementById('door');
const overlayDoor = document.querySelector('.overlay-door');
const overlayDoor2 = document.querySelector('.overlay-door2');
const mirrorImg = document.querySelectorAll('img, .mirror-img');


door.addEventListener('click', () => {
  overlayDoor.classList.add('show');
  door.classList.add('hide');
  overlayDoor.addEventListener('transitionend',() => {
    overlayDoor2.classList.add('show');
    door.remove();
  })
});

console.log(mirrorImg[1]);


overlayDoor2.addEventListener('transitionend',() => {
  mirrorImg[1].classList.add('show');
});

mirrorImg[1].addEventListener('transitionend', () => {
  mirrorImg[1].classList.add('hide');
  mirrorImg[2].classList.add('show');
});

mirrorImg[2].addEventListener('transitionend',() => {
  mirrorImg[1].remove();
  mirrorImg[3].classList.add('show')
});

mirrorImg[2].addEventListener('transitionend',() => {
  for(let i = 2; i <= 7; i++){
    mirrorImg[i].addEventListener('transitionend',() => {
      mirrorImg[i + 1].classList.add('show')
    });
  };
});
}
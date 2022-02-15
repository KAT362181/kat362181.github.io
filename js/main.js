'use strict';

{

// door

const door = document.getElementById('door');
const overlayDoor = document.querySelector('.overlay-door');
const overlayDoor2 = document.querySelector('.overlay-door2');
const mirror = document.getElementById('mirror');
const mirrorImg = mirror.children;  //ここに子要素以下が格納される


door.addEventListener('click', () => {
  overlayDoor.classList.add('show');
  door.classList.add('hide');
  overlayDoor.addEventListener('transitionend',() => {
    overlayDoor2.classList.add('show');
    door.remove();
  })
});

overlayDoor2.addEventListener('transitionend',() => {
  mirrorImg[0].classList.add('show')
});

// このパートを解説すると、
// ①いすが左側を向いていて、お客さんが座る（イメージ）
// ②椅子が向こう側に向く
// ③鏡を構成するパーツが時間差で集まってくる
// （④鏡の中にはdivがあり、ランダムでimgが出てくる（未実装））
// （⑤鏡のimgをマウスホバーorタップすると椅子が回転する（未実装））
// というものです。
// もともとアニメーションはうまくいっていたけど、消えるべき要素が消えない、
// タイミングが早すぎるなどの不具合があって、修正しているうちにうまく動かなくなりましたorz
// それでsetInterbalにてアニメーションのタイミングを管理しつつ、
// document.addEventListener('transitionend',() => {})
// で消すパートを書いていくこととしたのですが
// ここのsetintervalがうまく動いてくれず、そこまでたどり着けません…
// setIntervalは他のパートでも使いたいと思っていて、
// その制御はマスターしたいと思うので、どうしたらうまくいくのかご教授いただきたいです。
// そもそも要素の取得も不安定で、試行錯誤してmirrorImgの形に落ち着いています。
// 他に良い書き方があればご教授いただきたいです。
// 無作法な質問で申し訳ありません。
// お手数をおかけしますがよろしくお願いいたします。

// const fn = function() {
//   mirrorImg[i].addEventListener('transitionend', () => {
//     mirrorImg[i + 1].classList.add('show');
//     if(i > 9) clearInterval(id);
//     i++;
//   });
//   let i = 0;
//   const tm = 1000;
//   const id = setInterval(fn,tm);

// menu

const open = document.getElementById('open');
console.log(open);
const close = document.getElementById('close');
const menuOverlay = document.querySelector('.menu-overlay');


open.addEventListener('click', () => {
  console.log(menuOverlay);
  menuOverlay.classList.add('show');
  open.classList.add('hide');
});

close.addEventListener('click', () => {
  menuOverlay.classList.remove('show');
  open.classList.remove('hide');
});


};
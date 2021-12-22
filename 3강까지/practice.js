
//2.8 funtions part two

// function sayHello (name, age) {
//   console.log(`hello my name is ${name} and ${age}`);
// }

// sayHello("nico", 23);
// sayHello("dal", 31);
// sayHello("jeongeun", 32);


//2.8 funtions part two

// const player = {
//   name: 'moondee',
//   age: 32,
//   address: 'dongdaemun',
//   sayHello: function (otherPerson) {
//     console.log(`안녕하세요 ${otherPerson}님 반가워요.`);
// },
// }

// player.sayHello('nick');
// player.sayHello('john');

//2.10 

// const calculator = {
//   add: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   divide: function (a, b) {
//     console.log(a / b);
//   },
//   powerOf: function (a, b) {
//     console.log(a ** b);
//   },
// }

// calculator.add(5, 2);
// calculator.minus(5, 2);
// calculator.divide(5, 2);
// calculator.powerOf(5, 2);


//2.11

// const age = prompt('please write here international age');

// function calculateKrAge(age) {
//   return parseInt(age) + 2;
// }
// const koreanAge = calculateKrAge(age);
// console.log(koreanAge);
// console.log('한국 나이를 출력했습니다.');

//3.4

// const title = document.querySelector(".hello h1");

// console.dir(title);

// function clickThis() {
//   title.style.color = "blue";
// }
// function mouseOver() {
//   title.innerText = "mouse is here"
// }
// function mouseLeave() {
//   title.innerText = "mouse is gone"
// }

// title.addEventListener('click', clickThis);
// title.addEventListener('mouseenter', mouseOver);
// title.addEventListener('mouseleave', mouseLeave);
//('click', ooo ) -> ooo 자리에 호출할 function을 전달 해 주면되는데,
// 이 자리에는 함수() 이렇게 쓰지 말고, 함수이름만 전달하면 됨.
//유저가 click할 경우에 JS가 실행버튼을 대신 눌러준다.


//3.5
// const h1 = document.querySelector(".hello h1");

// console.dir(h1);

// function clickThis() {
//   h1.style.color = "blue";
// }
// function mouseOver() {
//   h1.innerText = "mouse is here";
// }
// function mouseLeave() {
//   h1.innerText = "mouse is gone";
// }
// function handleWindowResize() {
//   document.body.style.backgroundColor = "pink";
// }
// function handleWindowCopy() {
//   alert("copier!");
// }
// function handleWindowOnline(){
//   alert('it works!')
// }
// function handleWindowOffline(){
//   alert('sos! no wifi')
// }

// h1.addEventListener('click', clickThis);
// h1.addEventListener('mouseenter', mouseOver);
// h1.addEventListener('mouseleave', mouseLeave);

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener('copy', handleWindowCopy);

// window.addEventListener('online', handleWindowOnline);
// window.addEventListener('offline', handleWindowOffline);

// 3.6 클릭하면 색깔 바뀌는것
//근데 이방법은 별로 좋지않다. JS에 CSS속성을 넣는거니깐

// const h1 = document.querySelector('div.hello h1');

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if(currentColor === "blue"){
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;  
// }

// h1.addEventListener("click", handleTitleClick);

//4일차 제출과제의 JS

// const h1 = document.querySelector("#hello h1");

// function mouseHere() {
//   h1.style.color = "lightseagreen";
//   h1.innerText = "The mouse is here";
// }
// function mouseGone() {
//   h1.style.color = "tomato";
//   h1.innerText = "The mouse is gone";
// }
// function handleResize() {
//   h1.innerText = "You just resized!";
//   h1.style.color = "lightsalmon";
// }
// function contextMenu() {
//   h1.innerText = "That was right click!"
//   h1.style.color = "lightblue";
// }

// window.addEventListener('resize', handleResize);
// h1.addEventListener('mouseenter', mouseHere);
// h1.addEventListener('mouseleave', mouseGone);
// window.addEventListener('contextmenu', contextMenu);


// 3.7

// const h1 = document.querySelector('.hello h1');

// function handleTitleClick() {
//   const clickedClass = "clicked"
//   if (h1.className === clickedClass){
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// }

// h1.addEventListener("click", handleTitleClick)

//3.8
//classList는 class의 목록으로 작업할 수 있게끔 허용해준다.
//className은 모든걸 교체해버린다. classList가 더 유용

// const h1 = document.querySelector('.hello h1');

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)){
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }
//contains는 들어있는지 안들어있는지 확인해줌
//remove는 제거해줌
//add는 추가해줌
//toggle은 존재를 확인해주고 없으면 추가해주고 있으면 제거해줌

//toggle을 사용한 더 깔끔한 코드
// const h1 = document.querySelector('.hello h1');

// function handleTitleClick() {
//   h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTitleClick)


//4.0


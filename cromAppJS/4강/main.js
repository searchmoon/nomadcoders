//4.1, 4.2 Events

// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
//-> 이걸 더 간단하게 바꾸려면


// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit(event) {
//   event.preventDefault();
//   console.log(loginInput.value);
// };

// loginForm.addEventListener("submit", onLoginSubmit);

//input 태그를 form으로 감싸주어 input태그에 값을 입력하였을 때,
// 기본값인submit이 되면서 화면이 새로고침이 된다. 그러면서 value값으로
// 입력한 것이 사라지는데 이런것을 방지하기 위한 event 코드이다.

// 4.3

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//   event.preventDefault();
//   console.log(loginInput.value);
// };
// function handleLinkClick(event) {
//   event.preventDefault();
// };
// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

//4.4, 4.5, 4.6, 4.7
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//hidden이 두개 이상의 매개변수로 쓰였기 때문에 변수로 할당해줌(실수를 방지하기 위해)
const USERNAME_KEY = "username"
function onLoginSubmit(event) {
  event.preventDefault();
  //브라우저가 submit 할 때 원래 하는 동작을 안하게 됨.
  //그리고 이 아래꺼가 실행이됨.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //이 함수가 적용이 되고 나면 classList에 class="hidden"이 생성되어
  //display: none이 적용된다. 
  const username = loginInput.value; 
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = `Hello ${username}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  //이 함수가 적용이 되고 나면 classList에 class="hidden"이 제거되어
  //display: none이 적용되었던게 사라진다.
  paintGreetings(username);
};

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  //이 두줄의 코드가 겹치는 부분이 있어서 함수로 만들어주었다.
} 

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(username);
}
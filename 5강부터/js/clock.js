const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
//이걸 호출하지 않고 바로 밑에 있는 setInterval 만 출력하게 되면
// 처음에 00:00:00으로 뜨고 1초뒤에 시간이 간다.
//그래서 시작 하자마자 시간이 뜨게 하려면 getClock()을 미리 호출하자
setInterval(getClock, 1000); 
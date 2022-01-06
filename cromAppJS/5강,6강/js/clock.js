const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//이걸 호출하지 않고 바로 밑에 있는 setInterval 만 출력하게 되면
// 처음에 00:00:00으로 뜨고 1초뒤에 시간이 간다.
//그래서 시작 하자마자 시간이 뜨게 하려면 getClock()을 미리 호출하자
setInterval(getClock, 1000);   

// 백그라운드, 클락, 그리팅, 웨더, 투두 순서대로 
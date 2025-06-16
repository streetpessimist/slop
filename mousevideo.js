const video = document.getElementById("bgVideo");
let pauseTimeout;

document.addEventListener("mousemove", function () {
  // 마우스가 움직일 때마다 비디오 재생
  video.play();

  // 이전 타이머가 있으면 제거
  clearTimeout(pauseTimeout);

  // 일정 시간(예: 500ms) 마우스가 멈추면 비디오 일시정지
  pauseTimeout = setTimeout(() => {
    video.pause();
  }, 100);
});

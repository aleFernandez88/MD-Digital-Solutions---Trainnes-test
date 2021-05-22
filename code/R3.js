function toggle() {
  let trailer = document.querySelector(".trailer");
  let video = document.querySelector("video");
  trailer.classList.toggle("active");
  video.pause();
  video.currentTime = 0;
}

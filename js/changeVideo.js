// Cambiar el video principal al hacer clic en un video pequeño
function changeVideo(videoSrc) {
    const mainVideo = document.getElementById('mainVideo');
    mainVideo.src = videoSrc;
    mainVideo.play();
  }
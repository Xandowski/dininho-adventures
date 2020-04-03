const $wrapperVideoDino = document.querySelector('.wrapper-video-dino');
const $videoDino = document.querySelector('.video-dino');

$wrapperVideoDino.addEventListener('click', () => {
  if ($wrapperVideoDino.parentNode.classList.contains('-center')) {
    if ($videoDino.paused) {
      $videoDino.play();
    } else {
      $videoDino.pause();
    }
    $wrapperVideoDino.classList.toggle('-play');
  }
});

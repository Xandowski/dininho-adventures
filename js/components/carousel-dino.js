(() => {
  const $carouselDino = document.querySelector('.carousel-dino');

  function leftClick() {
    let $left = $carouselDino.querySelector('.-left');
    let $right = $carouselDino.querySelector('.-right');
    let $center = $carouselDino.querySelector('.-center');

    const id = parseInt($left.getAttribute('data-id'), 10);
    const nextId = id === 0 ? 14 : id - 1;

    $left.classList.remove('-left');
    $center.classList.remove('-center');
    $right.classList.remove('-right');

    $left.classList.add('-center');
    $center.classList.add('-right');


    $right = $center;
    $center = $left;
    $left = $carouselDino.querySelector(`[data-id="${nextId}"]`);
    $left.classList.add('-left');
  }

  $carouselDino.addEventListener('click', ({ target }) => {
    if (target.parentNode.classList.contains('-left')) {
      leftClick();
    }
  });
})();

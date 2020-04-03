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

  function rightClick() {
    let $left = $carouselDino.querySelector('.-left');
    let $right = $carouselDino.querySelector('.-right');
    let $center = $carouselDino.querySelector('.-center');

    const id = parseInt($left.getAttribute('data-id'), 10);
    const nextId = id === 0 ? 15 : id - 1;

    $right.classList.remove('-right');
    $center.classList.remove('-center');
    $left.classList.remove('-left');

    $right.classList.add('-center');
    $center.classList.add('-left');

    $left = $center;
    $center = $right;
    $right = $carouselDino.querySelector(`[data-id="${nextId}"]`);
    $right.classList.add('-right');
  }

  $carouselDino.addEventListener('click', ({ target }) => {
    if (target.parentNode.classList.contains('-left')) {
      leftClick();
    } else if (target.parentNode.classList.contains('-right')) {
      rightClick();
    }
  });
})();

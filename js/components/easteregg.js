(() => {
  const $separators = document.querySelectorAll('.separator-dino');
  const $keyGif = document.querySelector('.key-gif');
  let counter = 0;
  const goalShowKey = $separators.length;

  function showKey() {
    $keyGif.classList.add('-active');
  }

  $separators.forEach(($separator) => {
    $separator.addEventListener('click', function handleAnimation() {
      if (!this.classList.contains('-clicked')) {
        counter += 1;
      }
      this.classList.add('-clicked');
      if (counter === goalShowKey) {
        showKey();
      }
    });
  });
})();

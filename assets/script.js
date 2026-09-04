/*
 * がん保険比較ページの補助スクリプト
 * JavaScript が無効でもページの内容はすべて読めます（表示の補助のみ）。
 */
(function () {
  'use strict';

  /* --- 1. 比較表の「横にスクロールできます」表示 --- */
  var scroller = document.querySelector('.table-scroll');
  var hint = document.getElementById('scrollHint');

  function updateHint() {
    if (!scroller || !hint) return;
    var scrollable = scroller.scrollWidth - scroller.clientWidth > 8;
    var isCardView = window.matchMedia('(max-width: 860px)').matches;
    hint.hidden = !scrollable || isCardView || scroller.scrollLeft > 24;
  }

  if (scroller && hint) {
    updateHint();
    window.addEventListener('resize', updateHint);
    scroller.addEventListener('scroll', updateHint, { passive: true });
  }

  /* --- 2. ページの先頭へ戻るボタン --- */
  var backToTop = document.getElementById('backToTop');

  if (backToTop) {
    var toggleBackToTop = function () {
      backToTop.hidden = window.pageYOffset < 600;
    };
    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop, { passive: true });

    backToTop.addEventListener('click', function () {
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      var main = document.getElementById('main');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus({ preventScroll: true });
      }
    });
  }
})();

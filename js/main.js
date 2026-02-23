/* ============================================
   main.js — Core Utilities
   אתר הנצחה — עורב נוב 21
   ============================================ */

(function () {
  'use strict';

  /* ---------- Gallery touch/drag scroll ---------- */
  function initGalleryDrag() {
    const galleries = document.querySelectorAll('.gallery');

    galleries.forEach(function (gallery) {
      let isDown = false;
      let startX;
      let scrollLeft;

      gallery.addEventListener('pointerdown', function (e) {
        // Only handle primary pointer (finger or left mouse)
        if (e.button !== 0) return;
        isDown = true;
        gallery.style.cursor = 'grabbing';
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
        gallery.setPointerCapture(e.pointerId);
      });

      gallery.addEventListener('pointerup', function (e) {
        isDown = false;
        gallery.style.cursor = '';
        gallery.releasePointerCapture(e.pointerId);
      });

      gallery.addEventListener('pointercancel', function (e) {
        isDown = false;
        gallery.style.cursor = '';
      });

      gallery.addEventListener('pointermove', function (e) {
        if (!isDown) return;
        e.preventDefault();
        var x = e.pageX - gallery.offsetLeft;
        // RTL: scroll direction is inverted
        var walk = (x - startX) * 1.2;
        gallery.scrollLeft = scrollLeft - walk;
      });
    });
  }

  /* ---------- Keyboard navigation for galleries ---------- */
  function initGalleryKeyboard() {
    var galleries = document.querySelectorAll('.gallery');

    galleries.forEach(function (gallery) {
      gallery.addEventListener('keydown', function (e) {
        var scrollAmount = 300;
        if (e.key === 'ArrowLeft') {
          gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          e.preventDefault();
        } else if (e.key === 'ArrowRight') {
          gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          e.preventDefault();
        }
      });
    });
  }

  /* ---------- Soldier card zoom-on-click ---------- */
  function initCardZoom() {
    var cards = document.querySelectorAll('.soldier-card');

    cards.forEach(function (card) {
      card.addEventListener('click', function (e) {
        e.preventDefault();
        var href = card.getAttribute('href');
        if (!href) return;

        card.classList.add('is-zooming');

        setTimeout(function () {
          window.location.href = href;
        }, 400);
      });
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initGalleryDrag();
    initGalleryKeyboard();
    initCardZoom();
  });

})();

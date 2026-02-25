/* ============================================
   main.js — Core Utilities
   אתר הנצחה — צוות 40
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

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initGalleryDrag();
    initGalleryKeyboard();

    const heroVideo = document.querySelector('.hero__bg-video');
    if (heroVideo) {
      heroVideo.addEventListener('ended', () => {
        heroVideo.pause();
      });
    }
  });

})();

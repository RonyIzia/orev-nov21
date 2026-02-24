/* ============================================
   animations.js — GSAP ScrollTrigger Animations
   אתר הנצחה — עורב נוב 21
   ============================================ */

(function () {
    'use strict';

    /* ---------- Guard: skip if reduced motion preferred ---------- */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    /* ---------- Wait for GSAP to load ---------- */
    function onReady(fn) {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            fn();
        } else {
            window.addEventListener('load', function () {
                if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                    fn();
                }
            });
        }
    }

    onReady(function () {
        gsap.registerPlugin(ScrollTrigger);

        /* ---------- Homepage Animations ---------- */

        // Hero scroll-driven zoom
        var heroBg = document.querySelector('.hero__bg');
        if (heroBg) {
            gsap.to(heroBg, {
                scale: 1.3,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2
                }
            });
        }

        // Hero content fade out on scroll
        var heroContent = document.querySelector('.hero__content');
        if (heroContent) {
            gsap.to(heroContent, {
                opacity: 0,
                y: -40,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'center center',
                    end: 'bottom top',
                    scrub: 2
                }
            });
        }

        // Scroll indicator fade
        var scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            gsap.to(scrollIndicator, {
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: '10% top',
                    end: '25% top',
                    scrub: true
                }
            });
        }

        // Soldier cards — fade + slide up staggered
        var cards = document.querySelectorAll('.soldier-card');
        if (cards.length > 0) {
            gsap.set(cards, { opacity: 0, y: 60 });
            ScrollTrigger.batch(cards, {
                onEnter: function (batch) {
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: 'power2.out',
                        stagger: 0.2
                    });
                },
                start: 'top 85%'
            });
        }

        /* ---------- Soldier Page Animations ---------- */

        // Soldier hero parallax (portrait image)
        var soldierHeroImg = document.querySelector('.soldier-hero__img');
        if (soldierHeroImg) {
            gsap.to(soldierHeroImg, {
                yPercent: 15,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.soldier-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2
                }
            });
        }

        // Soldier name fade in
        var soldierHeader = document.querySelector('.soldier-header');
        if (soldierHeader) {
            gsap.from(soldierHeader, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: soldierHeader,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        }

        // Biography paragraphs — gentle fade in staggered
        var bioParagraphs = document.querySelectorAll('.biography p');
        if (bioParagraphs.length > 0) {
            gsap.set(bioParagraphs, { opacity: 0, y: 30 });

            bioParagraphs.forEach(function (p) {
                gsap.to(p, {
                    opacity: 1,
                    y: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: p,
                        start: 'top 88%',
                        end: 'top 60%',
                        scrub: 2
                    }
                });
            });
        }

        // Quote block fade in
        var quotes = document.querySelectorAll('.quote-block');
        quotes.forEach(function (quote) {
            gsap.from(quote, {
                opacity: 0,
                x: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: quote,
                    start: 'top 85%',
                    end: 'top 60%',
                    scrub: 2
                }
            });
        });

        // Fell together section fade in
        var fellTogether = document.querySelector('.fell-together');
        if (fellTogether) {
            gsap.from(fellTogether, {
                opacity: 0,
                y: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: fellTogether,
                    start: 'top 85%',
                    end: 'top 65%',
                    scrub: 2
                }
            });
        }

        // Gallery section title fade
        var galleryTitle = document.querySelector('.gallery-section__title');
        if (galleryTitle) {
            gsap.from(galleryTitle, {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: galleryTitle,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        }
    });

})();

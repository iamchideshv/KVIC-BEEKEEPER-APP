/**
 * Lottie Animation Engine for KVIC Bee Mitra
 * Powers ultra-smooth, lightweight vector animations across the app.
 */

(function () {
  'use strict';

  // Vector Lottie Animation Data: Flying Bee Hover
  const beeLottieData = {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 120,
    w: 100,
    h: 100,
    nm: "BeeAnimation",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "LeftWing",
        sr: 1,
        ks: {
          o: { a: 0, k: 85 },
          r: {
            a: 1,
            k: [
              { t: 0, s: [-25], e: [35] },
              { t: 15, s: [35], e: [-25] },
              { t: 30, s: [-25], e: [35] },
              { t: 45, s: [35], e: [-25] },
              { t: 60, s: [-25], e: [35] },
              { t: 75, s: [35], e: [-25] },
              { t: 90, s: [-25], e: [35] },
              { t: 105, s: [35], e: [-25] },
              { t: 120, s: [-25] }
            ]
          },
          p: { a: 0, k: [38, 38, 0] },
          a: { a: 0, k: [14, 20, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                s: { a: 0, k: [16, 26] },
                p: { a: 0, k: [14, 20] }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.95, 0.97, 1, 0.85] }
              },
              {
                ty: "st",
                c: { a: 0, k: [0.75, 0.82, 0.9, 1] },
                w: { a: 0, k: 1.5 }
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ],
        ip: 0,
        op: 120,
        st: 0
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "RightWing",
        sr: 1,
        ks: {
          o: { a: 0, k: 85 },
          r: {
            a: 1,
            k: [
              { t: 0, s: [25], e: [-35] },
              { t: 15, s: [-35], e: [25] },
              { t: 30, s: [25], e: [-35] },
              { t: 45, s: [-35], e: [25] },
              { t: 60, s: [25], e: [-35] },
              { t: 75, s: [-35], e: [25] },
              { t: 90, s: [25], e: [-35] },
              { t: 105, s: [-35], e: [25] },
              { t: 120, s: [25] }
            ]
          },
          p: { a: 0, k: [62, 38, 0] },
          a: { a: 0, k: [14, 20, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                s: { a: 0, k: [16, 26] },
                p: { a: 0, k: [14, 20] }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.95, 0.97, 1, 0.85] }
              },
              {
                ty: "st",
                c: { a: 0, k: [0.75, 0.82, 0.9, 1] },
                w: { a: 0, k: 1.5 }
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ],
        ip: 0,
        op: 120,
        st: 0
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "BeeBody",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { t: 0, s: [50, 52, 0], e: [50, 48, 0] },
              { t: 60, s: [50, 48, 0], e: [50, 52, 0] },
              { t: 120, s: [50, 52, 0] }
            ]
          },
          a: { a: 0, k: [50, 50, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                s: { a: 0, k: [26, 32] },
                p: { a: 0, k: [50, 54] }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.96, 0.62, 0.04, 1] }
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 }
              }
            ]
          },
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [24, 5] },
                p: { a: 0, k: [50, 50] },
                r: { a: 0, k: 2 }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.12, 0.16, 0.23, 1] }
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 }
              }
            ]
          },
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [22, 5] },
                p: { a: 0, k: [50, 58] },
                r: { a: 0, k: 2 }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.12, 0.16, 0.23, 1] }
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 }
              }
            ]
          },
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                s: { a: 0, k: [16, 14] },
                p: { a: 0, k: [50, 39] }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.12, 0.16, 0.23, 1] }
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ],
        ip: 0,
        op: 120,
        st: 0
      }
    ]
  };

  function initLottieAnimations() {
    if (typeof window.lottie === 'undefined') {
      console.log('Lottie player script not yet ready, using CSS animations');
      return;
    }

    try {
      // 1. Header Emblem Lottie
      const headerWrap = document.getElementById('headerBeeWrap');
      if (headerWrap) {
        headerWrap.innerHTML = '<div id="lottieHeaderBee" style="width: 36px; height: 36px;"></div>';
        window.lottie.loadAnimation({
          container: document.getElementById('lottieHeaderBee'),
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: beeLottieData
        });
      }

      // 2. Flying Bee Activity Card Lottie
      const flyingBeeWrap = document.querySelector('.flying-bee-svg-wrap');
      if (flyingBeeWrap) {
        flyingBeeWrap.innerHTML = '<div id="lottieActivityBee" style="width: 32px; height: 32px;"></div>';
        window.lottie.loadAnimation({
          container: document.getElementById('lottieActivityBee'),
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: beeLottieData
        });
      }
    } catch (e) {
      console.warn('Lottie initialization non-fatal warning:', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLottieAnimations);
  } else {
    initLottieAnimations();
  }
})();

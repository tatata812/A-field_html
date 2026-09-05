$(function () {

  /* =================================
  ヘッダー
   ================================= */
  $(function () {
    $('.header__menu').on('click', function () {
      const isOpen = $(this).hasClass('is-open');

      $(this).toggleClass('is-open');
      $('.header__nav').toggleClass('is-open');
      $('body').toggleClass('is-menu-open');

      $(this).attr('aria-expanded', !isOpen);
      $(this).attr('aria-label', isOpen ? 'メニューを開く' : 'メニューを閉じる');
    });

    $('.header__nav a').on('click', function () {
      $('.header__menu').removeClass('is-open');
      $('.header__nav').removeClass('is-open');
      $('body').removeClass('is-menu-open');

      $('.header__menu')
        .attr('aria-expanded', 'false')
        .attr('aria-label', 'メニューを開く');
    });

    $(window).on('resize', function () {
      if ($(window).width() > 767) {
        $('.header__menu').removeClass('is-open');
        $('.header__nav').removeClass('is-open');
        $('body').removeClass('is-menu-open');

        $('.header__menu')
          .attr('aria-expanded', 'false')
          .attr('aria-label', 'メニューを開く');
      }
    });
  });

  /* =================================
  ページ内リンク　ヘッダーの高さ考慮
 ================================= */
  // var $header = $('.header');

  // function getHeaderH() {
  //   if (!$header.length) return 0;
  //   return $header.outerHeight() || 0;
  // }

  // function scrollToHash(hash, speed) {
  //   if (!hash || hash === '#') return;

  //   var $target = $(hash);
  //   if (!$target.length) return;

  //   var targetTop = $target.offset().top - getHeaderH();

  //   $('html, body').stop().animate({
  //       scrollTop: targetTop
  //     },
  //     typeof speed === 'number' ? speed : 400
  //   );
  // }

  // $(document).on('click', 'a[href^="#"]', function (e) {
  //   var href = $(this).attr('href');
  //   if (!href || href === '#') return;
  //   if (!$(href).length) return;

  //   e.preventDefault();

  //   if (history.pushState) {
  //     history.pushState(null, null, href);
  //   } else {
  //     location.hash = href;
  //   }

  //   scrollToHash(href, 400);
  // });

  // $(window).on('load', function () {
  //   if (location.hash) {
  //     scrollToHash(location.hash, 0);
  //   }
  // });


  /* =================================
  アニメーション　フェードイン
 ================================= */
  $(window).scroll(function () {
    const windowHeight = $(window).height(); //ウィンドウの高さ
    const scroll = $(window).scrollTop(); //スクロール量

    $(".fade-in-js").each(function () {
      const targetPosition = $(this).offset().top; //要素の上からの距離
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("action");
      }
    });
  });


})

// GSAP

/* =================================
  ファーストビュー
================================= */

$(function () {
  fvAnimation();
});

function fvAnimation() {
  const fvTl = gsap.timeline();

  gsap.set('.fv__bg-fixed', {
    scale: 1.04
  });

  gsap.set('.fv__heading span, .fv__en, .fv__word img, .fv__logo img', {
    opacity: 0,
    y: 30
  });

  fvTl
    .to('.fv__bg-fixed', {
      scale: 1,
      duration: 1.8,
      ease: 'power2.out'
    })
    .to('.fv__heading span', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: .2,
      ease: 'power3.out'
    }, '-=1.2')
    .to('.fv__en', {
      opacity: 1,
      y: 0,
      duration: .8,
      ease: 'power3.out'
    }, '-=.5')
    .to('.fv__word img', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: .15,
      ease: 'power3.out'
    }, '-=.2')
    .to('.fv__logo img', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=.6');
}

  /* =================================
  背景画像
 ================================= */
gsap.registerPlugin(ScrollTrigger);

$('.concept-section').each(function () {
  const section = this;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  tl.from($(section).find('.concept-section__sub'), {
    opacity: 0,
    y: 20,
    duration: .8,
    ease: 'power3.out'
  })
  .from($(section).find('.concept-section__title'), {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out'
  }, '-=.5')
  .from($(section).find('.concept-section__body p'), {
    opacity: 0,
    y: 20,
    duration: .8,
    stagger: .12,
    ease: 'power3.out'
  }, '-=.5');
});
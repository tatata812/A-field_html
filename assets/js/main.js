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

gsap.registerPlugin(ScrollTrigger);

$(function () {
  fvAnimation();
  conceptAnimation();
  valueAnimation();
  businessAnimation();
});

/* =================================
FV
================================= */
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
各セクション
================================= */
function conceptAnimation() {
  $('.concept-section').each(function () {
    const section = this;
    const $sub = $(section).find('.top-content__sub');
    const $title = $(section).find('.top-content__title');
    const $body = $(section).find('.top-content__body p');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });

    if ($sub.length) {
      tl.from($sub, {
        opacity: 0,
        y: 20,
        duration: .8,
        ease: 'power3.out'
      });
    }

    if ($title.length) {
      tl.from($title, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
      }, '-=.5');
    }

    if ($body.length) {
      tl.from($body, {
        opacity: 0,
        y: 20,
        duration: .8,
        stagger: .12,
        ease: 'power3.out'
      }, '-=.5');
    }
  });
}

/* =================================
VALUE
================================= */
function valueAnimation() {
  gsap.utils.toArray('.value-content__item').forEach((item) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    tl.from($(item).find('.value-content__number'), {
        opacity: 0,
        x: -20,
        duration: .6,
        ease: 'power3.out'
      })
      .from($(item).find('.value-content__icon'), {
        opacity: 0,
        scale: .9,
        duration: .8,
        ease: 'power3.out'
      }, '-=.4')
      .from($(item).find('.value-content__title'), {
        opacity: 0,
        y: 20,
        duration: .7,
        ease: 'power3.out'
      }, '-=.4')
      .from($(item).find('.value-content__lead'), {
        opacity: 0,
        y: 15,
        duration: .6,
        ease: 'power3.out'
      }, '-=.35')
      .from($(item).find('.value-content__text'), {
        opacity: 0,
        y: 15,
        duration: .7,
        ease: 'power3.out'
      }, '-=.3');
  });

  gsap.from('.value-text > *', {
    scrollTrigger: {
      trigger: '.value-text',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: .8,
    stagger: .15,
    ease: 'power3.out'
  });
}

/* =================================
BUSINESS
================================= */
function businessAnimation() {
  gsap.utils.toArray('.business-content__item').forEach((item) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    tl.from($(item).find('.business-content__image'), {
        opacity: 0,
        y: 30,
        duration: .9,
        ease: 'power3.out'
      })
      .from($(item).find('.business-content__logo'), {
        opacity: 0,
        y: 15,
        duration: .6,
        ease: 'power3.out'
      }, '-=.5')
      .from($(item).find('.business-content__title, .business-content__en'), {
        opacity: 0,
        y: 15,
        duration: .6,
        stagger: .1,
        ease: 'power3.out'
      }, '-=.35')
      .from($(item).find('.business-content__text'), {
        opacity: 0,
        y: 15,
        duration: .7,
        ease: 'power3.out'
      }, '-=.3');
  });
}

/* =================================
Story
================================= */
gsap.registerPlugin(ScrollTrigger);

$('.story-content__item').each(function () {
  const item = this;
  const isSp = window.matchMedia('(max-width: 767px)').matches;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  tl.from($(item).find('.story-content__year'), {
      opacity: 0,
      y: 30,
      duration: .8,
      ease: 'power3.out'
    })
    .from($(item).find('.story-content__icon'), {
      opacity: 0,
      scale: .85,
      duration: .7,
      ease: 'back.out(1.5)'
    }, '-=.5')
    .from($(item).find('.story-content__body'), {
      opacity: 0,
      y: 25,
      duration: .8,
      ease: 'power3.out'
    }, '-=.4')
    .from($(item).find('.story-content__image'), {
      opacity: 0,
      x: isSp ? 0 : 40,
      y: isSp ? 25 : 0,
      duration: .9,
      ease: 'power3.out'
    }, '-=.5');
});

/* =================================
 Message
================================= */
const messageTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.message-content',
    start: 'top 75%',
    toggleActions: 'play none none none'
  }
});

messageTl
  .from('.message-content__visual', {
    opacity: 0,
    x: -40,
    duration: 1,
    ease: 'power3.out'
  })
  .from('.message-content__intro-text', {
    opacity: 0,
    y: 30,
    duration: .9,
    ease: 'power3.out'
  }, '-=.5')
  .from('.message-content__body > p', {
    opacity: 0,
    y: 25,
    duration: .7,
    stagger: .12,
    ease: 'power3.out'
  }, '-=.4')
  .from('.message-content__signature', {
    opacity: 0,
    y: 20,
    duration: .7,
    ease: 'power3.out'
  }, '-=.3');

/* =================================
Company Profile
 ================================= */
gsap.from('.company-content__item', {
  scrollTrigger: {
    trigger: '.company-content',
    start: 'top 80%',
    toggleActions: 'play none none none'
  },
  opacity: 0,
  y: 25,
  duration: .8,
  stagger: .12,
  ease: 'power3.out'
});
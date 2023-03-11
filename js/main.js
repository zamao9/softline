document.addEventListener('DOMContentLoaded', () => {
  /* ACCORDEON TO SHOW */
  const filter = document.querySelector('.filter'),
    filterHead = document.querySelector('.filter__head span'),
    filterArrow = document.querySelector('.filter__arrow'),
    filterBody = document.querySelector('.filter__body'),
    accordeon = document.querySelector('.accordeon');

  const accToShow = () => {
    filterHead.addEventListener('click', () => {
      accordeon.classList.toggle('show');
      filterArrow.classList.toggle('active');
      filterBody.classList.toggle('active');
      if (window.innerWidth < 1250) {
        filter.classList.toggle('active');
      }
      /* IF ACCORDEON IS CLOSED, REMOVE ACCORDEON ITEMS CLASSES */
      for (let i = 0; accItemsHead.length > i; ++i) {
        accItemsHead[i].classList.remove('active');
      }
      for (let i = 0; accItemsBody.length > i; ++i) {
        accItemsBody[i].style.maxHeight = null;
      }
      for (let i = 0; accItemsArrow.length > i; ++i) {
        accItemsArrow[i].classList.remove('active');
      }
    });
  };
  accToShow();

  /* ACCORDEON ITEMS TO SHOW */
  const accItemsHead = document.querySelectorAll('.accordeon-items__head'),
    accItemsBody = document.querySelectorAll('.accordeon-items__body'),
    accItemsArrow = document.querySelectorAll('.accordeon-items__img'),
    accItemsLinks = document.querySelectorAll('.accordeon-items__links a'),
    waysAccHead = document.querySelectorAll('.wrapper__head'),
    waysAccBody = document.querySelectorAll('.wrapper__body'),
    waysAccArrow = document.querySelectorAll('.wrapper__arrow');

  const accItemsToShow = (head, body, arrow) => {
    if (window.innerWidth < 1250) {
      for (let i = 0; head.length > i; ++i) {
        head[i].addEventListener('click', (e) => {
          for (let i = 0; head.length > i; ++i) {
            head[i].classList.remove('active');
            for (let i = 0; arrow.length > i; ++i) {
              arrow[i].classList.remove('active');
            }
          }
          arrow[i].classList.add('active');
          e.currentTarget.classList.add('active');

          let content = head[i].nextElementSibling;

          if (content.style.maxHeight) {
            body.forEach((el) => {
              el.style.maxHeight = null;
              arrow[i].classList.remove('active');
              head[i].classList.remove('active');
            });
          } else {
            body.forEach((el) => {
              el.style.maxHeight = null;
              content.style.maxHeight = content.scrollHeight + 150 + 'px';
            });
          }
        });
      }
    }
  };

  accItemsToShow(waysAccHead, waysAccBody, waysAccArrow);
  accItemsToShow(accItemsHead, accItemsBody, accItemsArrow);
  /* CLICK ON LINKS, REMOVE ALL ACCORDEON CLASSES */
  for (let i = 0; accItemsLinks.length > i; ++i) {
    accItemsLinks[i].addEventListener('click', (e) => {
      accordeon.classList.remove('show');
      filterBody.classList.remove('active');
      filter.classList.remove('active');
      for (let i = 0; accItemsLinks.length > i; ++i) {
        for (let i = 0; accItemsHead.length > i; ++i) {
          accItemsHead[i].classList.remove('active');
        }
        for (let i = 0; accItemsBody.length > i; ++i) {
          accItemsBody[i].style.maxHeight = null;
        }
        for (let i = 0; accItemsArrow.length > i; ++i) {
          accItemsArrow[i].classList.remove('active');
        }
      }
    });
  }

  /* MAPS FILTER */
  const filterLink = document.querySelectorAll('.filter__items'),
    filterContent = document.querySelectorAll('.offices__map');

  const mapsFilter = (category, items) => {
    items.forEach((el) => {
      let itemFiltered = el.classList.contains(category);

      if (itemFiltered) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  };

  for (let i = 0; filterLink.length > i; ++i) {
    filterLink[i].addEventListener('click', () => {
      let currentCategory = filterLink[i].dataset.filter;
      mapsFilter(currentCategory, filterContent);
      for (let i = 0; filterLink.length > i; ++i) {
        filterLink[i].classList.remove('active');
      }
      filterLink[i].classList.add('active');
    });
  }

  /* CORPORATE SLIDER */
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /* AOS ANIMATION */
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 300, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });
});

import './main.pcss';

import parallax from './scripts/parallax.ts';
import popupMenu from './scripts/popupMenu.ts';
import sendForm from './scripts/sendForm.ts';
import anchorScroll from './scripts/anchorScroll.ts';
import headerFixating from './scripts/headerFixating.ts';
import reviewSlider from './scripts/reviewSlider.ts';
import workSlider from './scripts/workSlider.ts';

// new Vue({
//     el: "#app-root",
//     router,
//     store,
//     render: h => h(App)
// });

if (process.env.NODE_ENV === 'development') {
    require('file-loader!./index.pug');
}

parallax({
    area: document.querySelector('.js-promo-parallax'),
    layers: document.querySelectorAll('.js-promo-layer')
});

parallax({
    area: document.querySelector('.js-budda-parallax'),
    layers: document.querySelectorAll('.js-budda-layer')
});

popupMenu({
    button: document.querySelector('.js-toggle-btn'),
    template: document.querySelector('.js-mobile-menu')
});


sendForm({
    form: document.querySelector('.j-form')
});

anchorScroll();

headerFixating({
    header: document.querySelector('.js-header')
});

reviewSlider({
    slider: document.querySelector('.js-review-slider'),
    scrollBtnToPrev: document.querySelector('.js-review-slider'),
    scrollBtnToNext: document.querySelector('.js-review-slider')
});

workSlider();

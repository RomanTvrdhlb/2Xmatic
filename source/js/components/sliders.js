import Swiper from "../vendor/swiper";
import vars from "../_vars";
import { throttle } from '../functions/throttle';
import { even } from "../functions/customFunctions";

const {defaultSliders} = vars;

function initLineSlider(slider,direction) {

  function startSlider() {
    const swiper = new Swiper(slider && slider, {
      slidesPerView: 'auto',
      spaceBetween: 40,
      centeredSlides: true,
      observer: true,
      observeParents: true,
      loop: true,
      speed: 10000,
      autoplay: {
        delay: 0,
        reverseDirection: direction,
      },
      breakpoints: {
        320: {
          spaceBetween: 30,
        },
        576: {
          spaceBetween: 40,
        },
      },
    });
  }

  window.addEventListener('resize', throttle(startSlider));
  window.addEventListener('DOMContentLoaded', startSlider);

}

defaultSliders.map((defaultSlider, index) => even(index + 1) ? initLineSlider(defaultSlider,false) : initLineSlider(defaultSlider,true))













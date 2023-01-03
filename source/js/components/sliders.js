import Swiper from "../vendor/swiper";
import vars from "../_vars";
import { throttle } from '../functions/throttle';
import { even } from "../functions/customFunctions";

const hiddenSliders = [...document.querySelectorAll('.main-swiper__container')]; 

  hiddenSliders.map(function(slider){
    const headerSwiper = new Swiper (slider, {
      slidesPerView: 'auto',
      spaceBetween: 10,
      observer: true,
      observeParents: true,
      loop: true,
      centeredSlides:true,
      speed: 3000,
            autoplay: {
              delay: 0,
            },
    });
  })











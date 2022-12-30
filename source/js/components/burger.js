import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';

import {toggleClassInArray, toggleCustomClass, removeCustomClass, removeClassInArray} from '../functions/customFunctions';
const {overlay, burger, mobileMenu, mainLinks} = vars;




const mobileMenuHandler = function(overlay, mobileMenu, burger) {
  burger.map( function(btn){
    btn.addEventListener('click', function(){
      toggleCustomClass(mobileMenu, 'active');
      toggleClassInArray(burger, 'active');
      toggleCustomClass(overlay, 'active');

      if(btn.classList.contains('active')){
        disableScroll()
      } else{
        enableScroll()
      }
    })
  })
}

const hideMenuHandler = function(overlay, mobileMenu, burger) {
    removeCustomClass(mobileMenu,'active');
    removeClassInArray(burger,'active');
    removeCustomClass(overlay,'active');
    enableScroll()
}

if(burger) {
  mainLinks.map(function(item){
    item.addEventListener('click', function(){
      hideMenuHandler(overlay,mobileMenu,burger)
    });
  })
}

if (overlay) {
  mobileMenuHandler(overlay,mobileMenu,burger);
  overlay.addEventListener('click', function(e){
    if (e.target.classList.contains('overlay')) {
      hideMenuHandler(overlay,mobileMenu,burger)
    }
  });

  window.addEventListener('resize', () => {
    let containerWidth = document.documentElement.clientWidth;
    if (containerWidth > 768) {
      hideMenuHandler(overlay,mobileMenu,burger)
    }
  });

}







import vars from '../_vars';

const {referralBtn,referralCards,referralForm} = vars


const replaceElementsFunction = (element,parentDesktop,parentMobile,breakpoint, firstRule, lastRule) => {
  let containerWidth = document.documentElement.clientWidth;

  if(element) {
    if (containerWidth <= `${breakpoint}`) {
      parentMobile.insertAdjacentElement(`${firstRule}`, element);
    };
    if (containerWidth > `${breakpoint}`) {
      parentDesktop.insertAdjacentElement(`${lastRule}`, element);
    }
  }
}

  window.addEventListener('resize', () => {
    replaceElementsFunction(referralBtn,referralCards,referralForm, 1024,'beforeend','beforeend'); // repalce button on mobile version
  });
  window.addEventListener('DOMContentLoaded', () => {
    replaceElementsFunction(referralBtn,referralCards,referralForm, 1024,'beforeend','beforeend'); // repalce button on mobile version
  });


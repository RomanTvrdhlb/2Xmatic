import vars from "../_vars";

const {copyParrent} = vars;

function copyFunction(textInput) {
  textInput.select();
  document.execCommand("copy");
}

copyParrent.map(function(item){
  const currentInput =  item.querySelector('.copy-form__input');
  const currentButton =  item.querySelector('.copy-form__button');
  currentButton.addEventListener('click', function(e) {
    e.preventDefault();
    copyFunction(currentInput);
  })
});

const removeClassInArray = (arr, customClass) => {
    arr.map((item) => {
      item.classList.remove(customClass);
    });
}
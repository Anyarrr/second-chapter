const buttons = document.querySelector('.button');
buttons.addEventListener('click',() => {
    alert('уря!')
})

const focus = document.querySelector('.input-focus'); 
focus.addEventListener('mouseout', () => {
    alert('ждем возвращения')
})

// function textButton(){
// let publish = document.querySelector('.input-focus').value;
// publish.querySelector('.input-button').textContent = publish;
// }

const inputText = document.querySelector('.input-publish');
const buttonText = document.querySelector('.input-button');

buttonText.addEventListener('click', () => {
    const result = inputText.value;
    buttonText.textContent = result;
});
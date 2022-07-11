var input = " ";

function display(value) {
 input = input+value;
 document.querySelector('input').value = input
}
var buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      input = eval(input)
      document.querySelector('input').value = input
    }
    else if (e.target.innerHTML == 'DEL') {
      input = input.toString().slice(0, -1)
      document.querySelector('input').value = input
    }
    else if(e.target.innerHTML == 'ON') {
      input = '0'
      document.querySelector('input').value = input
    }
    else if(e.target.innerHTML == 'OFF') {
      input = ''
      document.querySelector('input').value = input
    }
    else if(e.target.innerHTML != 'X' && e.target.innerHTML != '^') {
      input = input + e.target.innerHTML;
      document.querySelector('input').value = input
    }
  })
})
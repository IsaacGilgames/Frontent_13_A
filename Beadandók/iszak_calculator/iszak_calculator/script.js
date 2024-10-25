
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let muveletsor = localStorage.getItem('muveletsor') || ''; 
updateDisplay(muveletsor);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === 'C') {
      clearDisplay();
    } else if (value === '=') {
      calculateResult();
    } else {
      appendToMuveletsor(value);
    }
  });
});

function clearDisplay() {
  muveletsor = ''; 
  localStorage.removeItem('muveletsor'); 
  updateDisplay('0'); 
}

function appendToMuveletsor(value) {
  if (['+', '-', '*', '/'].includes(value) && muveletsor === '') {
    return;
  }
  muveletsor += value; 
  localStorage.setItem('muveletsor', muveletsor); 
  updateDisplay(muveletsor);
}

function calculateResult() {
  try {
    const result = eval(muveletsor); 
    display.value = result;
    muveletsor = result.toString(); 
    localStorage.setItem('muveletsor', muveletsor); 
  } catch {
    display.value = 'Hiba | nincs érték :)'; 
    muveletsor = ''; 
    localStorage.removeItem('muveletsor'); 
  }
}

function updateDisplay(value) {
  display.value = value;
}
const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        result.textContent += e.target.id;
    });
});

// les buttons pas besoin de les déclarer si ils ont un id 
// la methode eval() permet de calculer ce qui est a l'intérieur des parenthèse
equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent);
});

clear.addEventListener('click', () => {
    result.textContent = "";
});
function checkEmail(event) {
    event.preventDefault(); // Impede o envio do formulário

    const emailInput = document.getElementById('email').value;
    const enteredEmail = document.getElementById('enteredEmail');
    const enteredEmailOkay = document.getElementById('enteredEmailOkay');
    
    const validEmail = 'felipealves@cruzeirotech.com' ;
    const validEmail1 = 'silasrg@cruzeirotech.com';

    if (emailInput !== validEmail && emailInput !== validEmail1) {
        enteredEmail.textContent = emailInput;
        document.getElementById('errorPopup').style.display = 'flex';
        document.getElementById('errorPopup').classList.add("errorpopup-content");
    } else {
        enteredEmailOkay.textContent = emailInput;
        document.getElementById('okayPopup').style.display = 'flex';
        document.getElementById('okayPopup').classList.add("okaypopup-content");
    }
}

function closePopup() {
    document.getElementById('errorPopup').style.display = 'none';
}


function closePopupOkay() {
    window.location.href = '../index.html'
}
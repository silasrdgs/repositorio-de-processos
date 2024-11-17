// Script para validar o login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Credenciais válidas
  const validEmail = 'felipealves@cruzeirotech.com';
  const validPassword = 'Felipe123';

  // Verifica se as credenciais estão corretas
  if (email === validEmail && password === validPassword) {
    alert('Login bem-sucedido!');
    window.location.href = './Processos/index.html'; // Redireciona para outra página
  } else {
    errorMessage.style.color = 'red';
    document.getElementById("email").classList.add("input-error");
    document.getElementById("password").classList.add("input-error");
    
  }
});

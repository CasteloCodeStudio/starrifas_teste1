// Valida as informações de login
function validarLogin() {
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
    const form = document.getElementById('loginForm');

  
    if (email == 'admin@admin.com' && senha == 'admin') {
      // O usuário é administrador
      form.action = '../index.html?login=adm';
    } else if (email == '123@gmail.com' && senha == '123') {
      // O usuário é cliente
      form.action = '../index.html?login=success';
    } else {
        // Exibe uma mensagem de erro
        alert('E-mail ou senha inválidos');
        // Impede o envio do formulário
        event.preventDefault();
      }
    }
    
    // Chama a função validarLogin ao enviar o formulário
    document.querySelector('form').addEventListener('submit', validarLogin);


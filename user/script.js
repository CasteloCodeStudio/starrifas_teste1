const logoutButton = document.querySelector('.square.end'); // Seleciona o botão de logout

logoutButton.addEventListener('click', function() {
  const url = new URL(window.location.href); // Cria um objeto URL para manipulação

  if (url.searchParams.has('login?success')) {
    url.searchParams.delete('login?success'); // Remove o parâmetro "login?success"
    window.location.href = url.toString(); // Redireciona para a URL modificada
  } else {
    window.location.href = '../index.html'; // Redireciona para a página do usuário se o parâmetro não estiver presente
  }
});
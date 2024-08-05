const url = 'https://conexaodasrifas.com.br/bressan-premios/acoes/6dcdabab-574f-419b-8230-a7b03fe1951b';

// Usando a API Fetch para pegar o conteúdo HTML
fetch(url)
  .then(response => {
    // Verifica se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.statusText);
    }
    return response.text(); // Converte a resposta para texto (HTML)
  })
  .then(html => {
    console.log(html); // Conteúdo HTML da página
  })
  .catch(error => {
    console.error('Erro:', error); // Tratar erros
  });
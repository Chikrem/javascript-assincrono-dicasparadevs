// Importa o módulo axios para realizar requisições HTTP
const axios = require("axios");

// Exemplo de requisição GET utilizando Promises
axios
  .get("https://jsonplaceholder.typicode.com/todos/1") // Faz uma requisição para obter um recurso específico
  .then((response) => {
    // Callback de sucesso
    console.log({ data: response.data }); // Exibe os dados retornados pela API no console
  })
  .catch((error) => {
    // Callback de erro
    console.log({ error }); // Exibe o erro no console, caso ocorra
  });

// Exemplo de requisição GET utilizando async/await
const fetchApi = async () => {
  try {
    // Faz a requisição e aguarda a resposta
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log({ data }); // Exibe os dados retornados pela API no console
  } catch (error) {
    // Trata erros que possam ocorrer durante a requisição
    console.log({ error }); // Exibe o erro no console
  }
};

// Chama a função fetchApi para executar a requisição
fetchApi();

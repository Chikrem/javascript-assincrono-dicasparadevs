// Função para simular o login de um usuário
const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = false; // Simula se houve um erro no login
    if (error) {
      // Caso ocorra um erro, chama o callback de erro
      return onError(new Error("error in login!"));
    }
    console.log("user logged!"); // Mensagem de sucesso no login
    onSuccess({ email }); // Chama o callback de sucesso com o email do usuário
  }, 1500); // Simula um atraso de 1,5 segundos
};

// Função para simular a obtenção de vídeos de um usuário
const getUserVideos = (email, callback) => {
  setTimeout(() => {
    // Retorna uma lista de vídeos após 2 segundos
    callback(["video1", "video2", "video3"]);
  }, 2000);
};

// Função para simular a obtenção de detalhes de um vídeo
const getVideoDetails = (video, callback) => {
  setTimeout(() => {
    // Retorna os detalhes do vídeo após 2,5 segundos
    callback({ title: "video title" });
  }, 2500);
};

// Início do fluxo de execução
const user = loginUser(
  "felipe@gmail.com", // Email do usuário
  "123456", // Senha do usuário
  (user) => {
    console.log({ user }); // Exibe o retorno inicial da função depois da callback loginUser
    // Callback de sucesso do login
    getUserVideos(user.email, (videos) => {
      // Callback para obter os vídeos do usuário
      console.log({ videos }); // Exibe os vídeos no console
      getVideoDetails(videos[0], (videoDetails) => {
        // Callback para obter os detalhes do primeiro vídeo
        console.log({ videoDetails }); // Exibe os detalhes do vídeo no console
      });
    });
  },
  (error) => {
    // Callback de erro do login
    console.log({ error }); // Exibe o erro no console
  }
);

console.log({ user }); // Exibe o retorno inicial da função loginUser antes da callback (undefined)
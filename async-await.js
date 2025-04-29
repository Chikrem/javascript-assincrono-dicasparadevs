// Função para simular o login de um usuário
const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false; // Simula se houve um erro no login

    if (error) {
      // Caso ocorra um erro, rejeita a Promise
      reject(new Error("error in login!"));
    }

    console.log("user logged!"); // Mensagem de sucesso no login
    resolve({ email }); // Resolve a Promise com o email do usuário
  });
};

// Função para simular a obtenção de vídeos de um usuário
const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getUserVideos"); // Mensagem indicando que os vídeos estão sendo obtidos
      resolve(["video1", "video2", "video3"]); // Resolve a Promise com uma lista de vídeos
    }, 2000); // Simula um atraso de 2 segundos
  });
};

// Função para simular a obtenção de detalhes de um vídeo
const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getVideoDetails"); // Mensagem indicando que os detalhes do vídeo estão sendo obtidos
      resolve({ title: "video title" }); // Resolve a Promise com os detalhes do vídeo
    }, 2500); // Simula um atraso de 2,5 segundos
  });
};

// Função assíncrona para executar o fluxo completo
const displayUser = async () => {
  try {
    // Realiza o login do usuário e aguarda a resposta
    const user = await loginUser("felipe@gmail.com", "123456");

    // Obtém os vídeos do usuário e aguarda a resposta
    const videos = await getUserVideos(user.email);

    // Obtém os detalhes do primeiro vídeo e aguarda a resposta
    const videoDetails = await getVideoDetails(videos[0]);

    // Exibe os detalhes do vídeo no console
    console.log({ videoDetails });
  } catch (error) {
    // Trata erros que possam ocorrer em qualquer etapa
    console.log({ error });
  }
};

// Chama a função displayUser para executar o fluxo
displayUser();

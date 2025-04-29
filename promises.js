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

// Fluxo de execução utilizando Promises
loginUser("felipe@gmail.com", "1234567")
  .then((user) => getUserVideos(user.email)) // Obtém os vídeos do usuário após o login
  .then((videos) => getVideoDetails(videos[0])) // Obtém os detalhes do primeiro vídeo
  .then((videoDetails) => console.log({ videoDetails })) // Exibe os detalhes do vídeo no console
  .catch((error) => console.log({ error })); // Trata erros em qualquer etapa do fluxo

// Promise.all para executar múltiplas Promises em paralelo
const yt = new Promise((resolve) => {
  setTimeout(() => {
    resolve("videos from youtube"); // Resolve a Promise com os vídeos do YouTube
  }, 2000); // Simula um atraso de 2 segundos
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    resolve("posts from facebook"); // Resolve a Promise com os posts do Facebook
  }, 5000); // Simula um atraso de 5 segundos
});

// Executa ambas as Promises (yt e fb) em paralelo e aguarda que todas sejam resolvidas
Promise.all([yt, fb]).then((result) => {
  console.log({ result }); // Exibe os resultados das Promises no console
});

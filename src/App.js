import { useRequestData } from "./hooks/useRequestData";

function App() {
  //const nomeUsuarios = useCaptureNome()
  //const postagens = useCapturePostagens()
  const [nomeUsuarios, onLoading, errorUsers] = useRequestData('users');
  const [postagens, onLoadingData] = useRequestData('comments');

  return (
    <>
      <p>Exercício 1</p>
      {errorUsers && <p>Error na requisição! Tente novamente!</p>}
      {!onLoading ?
      nomeUsuarios.map((usuario) => {
        return <p key={usuario.id}>{usuario.name}</p>;
      }): <p>Loading...</p>}
      <hr />
      <p>Exercício 2</p>
      {!onLoadingData?
      postagens.map((post) => {
        return <p key={post.id}>{post.body}</p>;
      }): <p>Loanding...</p>}
    </>
  );
}

export default App;
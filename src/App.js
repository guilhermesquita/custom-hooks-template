import { useCaptureNome } from "./hooks/useCaptureNome";
import { useCapturePostagens } from "./hooks/useCapturePostagens";

function App() {
  const nomeUsuarios = useCaptureNome();
  const postagens = useCapturePostagens();

  return (
    <>
      <p>Exercício 1</p>
      {nomeUsuarios.map((usuario) => {
        return <p key={usuario.id}>{usuario.name}</p>;
      })}
      <hr />
      <p>Exercício 2</p>
      {postagens.map((post) => {
        return <p key={post.id}>{post.body}</p>;
      })}
    </>
  );
}

export default App;

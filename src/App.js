//import { useCapturarNome } from "./hooks/useCapturarNomes";
//import { usePostagens } from "./hooks/usePostagens";
import { useRequestData } from "./hooks/useRequestData";

function App() {
  const [nomeUsuarios, loadingUsers, erroUsers] = useRequestData("users");
  const [postagens, loadingPosts] = useRequestData("comments");



  return (
    <>
      <p>Exercício 1</p>
      {erroUsers && <p>Error na requisição! Tente novamente!</p>}
      {!loadingUsers ? 
        nomeUsuarios.map((usuario) => {
        return <p key={usuario.id}>{usuario.name}</p>;
      }): (<p>Loading...</p>)}
      <hr />

      <p>Exercício 2</p>
      
      {!loadingPosts ? 
        postagens.map((post) => {
        return <p key={post.id}>{post.body}</p>;
      }) : (<p>Loading...</p>)}
    </>
  );
}

export default App;

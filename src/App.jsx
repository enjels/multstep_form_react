//* Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import "./App.css";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          ficamos felizes com a sua compra,utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="inputs-container">inputs</div>
          <div className="actions">
            <button type="button">
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

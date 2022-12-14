import { Container } from "./styles";
import iconImg from "../../assets/income.svg";
import outImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Sumary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconImg} alt="Entradas" />
        </header>
        <strong>R$ 1000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outImg} alt="Saidas" />
        </header>
        <strong> -R$ 500</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 500</strong>
      </div>
    </Container>
  );
}

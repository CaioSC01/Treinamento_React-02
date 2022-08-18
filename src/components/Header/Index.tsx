import logoIMG from "../../assets/logo.svg";
import { Container, Content } from "./style";

export function Header() {
  return (
    <>
      <Container>
        <Content>
          <img src={logoIMG} alt="CS-MONEY" />
          <button type={"button"}>Nova transação</button>
        </Content>
      </Container>
    </>
  );
}

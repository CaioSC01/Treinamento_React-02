import logoIMG from "../../assets/logo.svg";
import { Container, Content } from "./style";

interface HeaderProps{
	onOpenNewTransaction: ()=> void;

}

export function Header({onOpenNewTransaction}: HeaderProps) {
  return (
    <>
      <Container>
        <Content>
          <img src={logoIMG} alt="CS-MONEY" />
          <button type={"button"} onClick={onOpenNewTransaction}>
            Nova transação
          </button>
        </Content>
      </Container>
    </>
  );
}

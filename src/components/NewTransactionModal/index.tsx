import ReactModal from "react-modal";
import { Container, TransectionTypeContainer, RadioBox } from "./style";
import closeImg from "../../assets/close.svg";
import iconImg from "../../assets/income.svg";
import outImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NemTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

	function handleCreateNewTransaction(event: FormEvent){
	

	}

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar Modal" />
        </button>
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>cadastrar transação</h2>

          <input placeholder="Titulo" />

          <input placeholder="Valor" type={"number"} />

          <TransectionTypeContainer>
            <RadioBox
						activeColor="green"
              type="button"
              onClick={(e) => {
                setType("deposit");
              }}
              isActive={type === "deposit"}
            >
              <img src={iconImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
						activeColor="red"
              type="button"
              onClick={(e) => {
                setType("withdraw");
              }}
              isActive={type === "withdraw"}
            >
              <img src={outImg} alt="Saida" />
              <span>Saida</span>
            </RadioBox>
          </TransectionTypeContainer>

          <input placeholder="Categoria" />

          <button type="submit">cadastrar</button>
        </Container>
      </ReactModal>
    </>
  );
}

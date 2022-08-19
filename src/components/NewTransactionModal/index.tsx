import ReactModal from "react-modal";
import { Container } from "./style";
import closeImg from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NemTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
        <Container>
          <h2>cadastrar transação</h2>

          <input placeholder="Titulo" />

          <input placeholder="Valor" type={"number"} />

          <input placeholder="Categoria" />

          <button type="submit">cadastrar</button>
        </Container>
      </ReactModal>
    </>
  );
}

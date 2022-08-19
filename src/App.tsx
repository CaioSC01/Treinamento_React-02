import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/Index";
import { NemTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyles } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal} />
      <Dashboard />

      <NemTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyles />
    </>
  );
}

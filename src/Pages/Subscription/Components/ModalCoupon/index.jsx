/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Content, Footer, Header, PayButton } from "./styles";
import { useState } from "react";

const ModalCoupon = ({ open, onClose, onConfirm }) => {
  const [cupon, setCupon] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.value;

    setCupon(file);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Cupom de desconto</DialogTitle>
      <>
        <Header>
          <h4>Caso você tenha algum cupom de desconto insira abaixo:</h4>
        </Header>

        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Content>
            <input
              type="text"
              placeholder={"Cupom"}
              value={cupon}
              onChange={handleFileChange}
            />

            {cupon === "TransMuscle24" && (
              <small>Valor definido para 200R$</small>
            )}
          </Content>
        </DialogContent>
      </>

      <DialogActions>
        <Footer>
          <Button onClick={onClose} color="primary">
            Fechar
          </Button>

          <PayButton color="primary" onClick={() => onConfirm(cupon)}>
            Enviar
          </PayButton>
        </Footer>
      </DialogActions>
    </Dialog>
  );
};

export default ModalCoupon;

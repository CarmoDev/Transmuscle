/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { CardContainer, Footer, Header, Input, PayButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faPix } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faCreditCard } from "@fortawesome/free-regular-svg-icons";
import {
  faLock,
  faMoneyCheck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const PurchaseModal = ({ open, onClose, formData }) => {
  const [numberCard, setNumberCard] = useState("");
  const [nameCard, setNameCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [expYear, setExpYear] = useState("");
  const [expoMonth, setExpMonth] = useState("");
  const [cvc, setCvc] = useState("");
  const [parcels, setParcels] = useState(1);
  const [paymentResult, setPaymentResult] = useState(null);
  const categoria = formData.categoria;
  const name = formData.name;
  const cpf = formData.cpf;
  const email = formData.email;
  const estado = formData.estado;
  const rua = formData.rua;
  const cep = formData.cep;
  const numero = formData.numero;
  

  const fazerPagamento = async () => {
    try {
      const paymentData = {
        numberCard,
        nameCard,
        cvc,
        parcels,
        expYear,
        expoMonth,
        categoria
      };


      const response = await axios.post(
        "http://localhost:2727/payment",
        paymentData
      );

      setPaymentResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao fazer o pagamento:", error);
    }
  };

  const fazerPagamentoBoleto = async () => {
    try {
      const paymentData = {
        name,
        cpf,
        email,
        rua,
        cep,
        estado,
        numero,
        categoria
      };


      const response = await axios.post(
        "http://localhost:2727/boleto",
        paymentData
      );

      setPaymentResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao fazer o pagamento:", error);
    }
  };

  const fazerPagamentoPix = async () => {
    try {
      const paymentData = {
        name,
        cpf,
        email,
        rua,
        cep,
        estado,
        numero,
        categoria
      };


      const response = await axios.post(
        "http://localhost:2727/pix",
        paymentData
      );

      setPaymentResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao fazer o pagamento:", error);
    }
  };

  console.log("paymentResult", paymentResult);
//cartão retorna se foi bem sucedido   (dai seria legal fazer uma página de sucesso caso retorne SUCESSO no pagamento)
//boleto retorna url com pdf
//pix retorna url com link de um png

//falta tratar o número de telefone para passar para o pix
//falta a dinamica dos checkbox da forma de pagamento (se for boleto ou pix,  some os dados do cartão e ele só clica no botão pagar e chama a função correta)
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Checkout</DialogTitle>

      <Header>
        <h3>Forma de pagamento:</h3>
        <section>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              id="creditCard"
              value="creditCard"
            />
            <p>Cartão de crédito</p>
          </div>

          <div>
            <input
              type="radio"
              name="paymentMethod"
              id="boleto"
              value="boleto"
            />
            <p>Boleto</p>
          </div>

          <div>
            <input type="radio" name="paymentMethod" id="pix" value="pix" />
            <p>Pix</p>
          </div>
        </section>
      </Header>

      <DialogContent>
        <Input>
          <FontAwesomeIcon
            icon={faCcVisa}
            style={{ color: "#1f71ff" }}
            size="xl"
          />
          <input
            placeholder="Número do cartão"
            value={numberCard}
            onChange={(e) => setNumberCard(e.target.value)}
          />
        </Input>

        <Input style={{ marginTop: 12 }}>
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#1f71ff" }}
            size="xl"
          />
          <input
            placeholder="Nome no cartão"
            value={nameCard}
            onChange={(e) => setNameCard(e.target.value)}
          />
        </Input>

        <CardContainer>
          <Input>
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ color: "#1f71ff" }}
              size="xl"
            />
            <input
              placeholder="MM/YYYY"
              value={expirationDate}
              onChange={(e) => {
                const value = e.target.value;
                const formattedValue = value
                  .replace(/\D/g, "") 
                  .slice(0, 6); 

                const month = formattedValue.slice(0, 2);
                const year = formattedValue.slice(2, 6);

                const formattedDate = `${month}/${year}`;

                setExpMonth(month);
                setExpYear(year);
                setExpirationDate(formattedDate); 

              }}
            />
          </Input>

          <Input>
            <FontAwesomeIcon
              icon={faLock}
              style={{ color: "#1f71ff" }}
              size="xl"
            />
            <input
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </Input>

          <select value={parcels} onChange={(e) => setParcels(e.target.value)}>
            <option disabled selected>
              Qtd. Parcelas
            </option>
            <option value={1}>1x</option>
            <option value={2}>2x</option>
            <option value={3}>3x</option>
            <option value={4}>4x</option>
            <option value={5}>5x</option>
            <option value={6}>6x</option>
            <option value={7}>7x</option>
            <option value={8}>8x</option>
            <option value={9}>9x</option>
            <option value={10}>10x</option>
          </select>
        </CardContainer>
      </DialogContent>
      <DialogActions>
        <Footer>
          <Button onClick={onClose} color="primary">
            Close
          </Button>

          <PayButton color="primary" onClick={fazerPagamentoPix}>
            PAGAR
          </PayButton>
        </Footer>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseModal;

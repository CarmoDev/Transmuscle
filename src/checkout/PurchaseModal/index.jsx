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

const PurchaseModal = ({ open, onClose }) => {
  const [numberCard, setNumberCard] = useState("");
  const [nameCard, setNameCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [parcels, setParcels] = useState(1);

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
              onChange={(e) => setExpirationDate(e.target.value)}
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

          <PayButton color="primary">PAGAR</PayButton>
        </Footer>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseModal;

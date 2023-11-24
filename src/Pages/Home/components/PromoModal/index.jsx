import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { CloseButton, Container, Overlay, Subscribe } from "./styles";

import Promo from "./assets/Lote0.jpg";

export default function PromoModal({ isVisible, onClose }) {
  const navigate = useNavigate();

  if (!isVisible) {
    return;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <img src={Promo} alt="Lote 0" />
        <CloseButton onClick={() => onClose()}>
          <CloseRoundedIcon
            sx={{
              color: "#fafafa",
              fontSize: 28,
            }}
          />
        </CloseButton>

        <Subscribe onClick={() => navigate("/inscricao")}>
          Inscreva-se
        </Subscribe>
      </Container>
    </Overlay>,
    document.getElementById("modal-root")
  );
}

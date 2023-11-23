import { useNavigate } from "react-router-dom";

import { PayButton } from "../Subscription/Components/ModalCoupon/styles";
import { Container } from "./styles";

export default function ConfirmPayment() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>Inscrição Confirmada!</h1>

      <h4>
        <strong>Parabéns</strong> é com grande prazer que anunciamos que sua
        inscrição para o Trans Muscle está confirmada, e você estará fazendo
        parte da historia competindo no primeiro campeonato Trans e Não -
        Binárie.
      </h4>

      <h4>
        Foi enviado por e-mail a cartilha do atleta, a mensagem de boas vindas e
        seu número de inscrição, caso venha a ter qualquer dúvida basta estar
        respondendo aquele e-mail com sua dúvida.
      </h4>

      <p>
        Para dúvidas:{" "}
        <a href="mailto:Atletas@transmuscle.com.br">
          Atletas@transmuscle.com.br
        </a>
      </p>

      <PayButton onClick={() => navigate("/")}>Voltar ao Inicio</PayButton>
    </Container>
  );
}

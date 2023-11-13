import { Link } from "react-router-dom";
import { Container, Options } from "./styles";

import Logo from "../../assets/images/GoldenM.png";

export default function Menu() {
  return (
    <Container>
      <div>
        <img src={Logo} />
      </div>

      <Options>
        <Link to="">
          <p>Quem Somos</p>
        </Link>

        <Link to="">
          <p>Categorias</p>
        </Link>

        <Link to="">
          <p>Galeria do Evento</p>
        </Link>
      </Options>

      <Link to="">
        <p>Inscreva-se</p>
      </Link>
    </Container>
  );
}

import { Container, DescriptionContainer } from "./styles";

import Logo from "../../assets/images/GoldenLogoFull.png";

export default function Home() {
  return (
    <Container>
      <img src={Logo} alt="Logo transmuscle" />

      <DescriptionContainer>
        <h1>Quem Somos</h1>
        <p>
          Somos o primeiro e único campeonato de fisiculturismo voltado
          exclusivamente para o público transgênero no Brasil. Ele busca
          promover a inclusão, a igualdade de oportunidades e a celebração da
          diversidade de corpos dentro da comunidade trans. Além disso, o evento
          tem como objetivo contribuir para a conscientização, aceitação e
          empoderamento das pessoas transgênero, utilizando o esporte como uma
          plataforma de destaque para suas habilidades físicas.
        </p>
      </DescriptionContainer>
    </Container>
  );
}

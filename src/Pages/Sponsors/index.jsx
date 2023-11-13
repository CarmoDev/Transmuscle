import { Container, Sponsor, SponsorsContainer } from "./styles";
import SponsorsData from "./utils/Sponsors";

export default function Sponsors() {
  return (
    <Container>
      <h1>Apoio e Patrocinadores</h1>

      <SponsorsContainer>
        {SponsorsData.map((sponsor) => (
          <Sponsor key={sponsor.name}>
            <img src={sponsor.url} id={sponsor.id} alt={sponsor.name} />

            <h2>{sponsor.name}</h2>
          </Sponsor>
        ))}
      </SponsorsContainer>
    </Container>
  );
}

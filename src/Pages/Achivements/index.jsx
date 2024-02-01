import Achieves from "./Components/Achieves";
import { Container } from "./styles";

export default function Achivements() {
  return (
    <Container>
      <h1>Conquistas</h1>
      <h2>2023</h2>
      <Achieves year={2023} />
      <h2>2024</h2>
      <Achieves year={2024} />
    </Container>
  );
}

import {
  Achivement,
  AchivementsBar,
  AchivementsContainer,
  Container,
} from "./styles";
import achieves from "./utils/achieves";

export default function Achivements() {
  return (
    <Container>
      <h1>Conquistas</h1>

      <p>2023</p>
      <AchivementsContainer>
        <AchivementsBar />
        {achieves.map((achieve, index) => (
          <Achivement
            key={achieve.date}
            isLeft={index % 2 !== 0}
            position={index * 10}
          >
            <div className="date">{achieve.date}</div>

            <div className="achieves">
              {achieve.name.map((name, index) => (
                <span key={name + index}>{name}</span>
              ))}
            </div>
          </Achivement>
        ))}
      </AchivementsContainer>
    </Container>
  );
}

import { Container, Mark, Politics, Social } from "./styles";
import Logo from "../../assets/images/GoldenLogoFull.png";

import socialData from "./utils/social";

export default function Footer() {
  return (
    <Container>
      {window.screen.width >= 1100 && (
        <>
          <Mark>
            <img src={Logo} />

            <h2>TRANSMUSCLE®</h2>
          </Mark>

          <Social>
            {socialData.map((socialMedia) => (
              <a
                href={socialMedia.url}
                key={socialMedia.url}
                target="_blank"
                rel="noreferrer"
              >
                <img src={socialMedia.icon} alt={socialMedia.label} />

                <p>{socialMedia.name}</p>
              </a>
            ))}
          </Social>
        </>
      )}

      {window.screen.width <= 1100 && (
        <>
          <div>
            <Social>
              {socialData.map((socialMedia) => (
                <a
                  href={socialMedia.url}
                  key={socialMedia.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={socialMedia.icon} alt={socialMedia.label} />

                  <p>{socialMedia.name}</p>
                </a>
              ))}
            </Social>
          </div>
        </>
      )}
    </Container>
  );
}

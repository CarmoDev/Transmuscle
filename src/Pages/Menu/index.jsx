import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  HamburguerContainer,
  HamburguerMenu,
  Options,
  OptionsList,
  Sections,
} from "./styles";

import Logo from "../../assets/images/GoldenM.png";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState("");

  function handleMenuOpen() {
    const isMenuOpen = menuOpen === "ativo" ? "" : "ativo";

    setMenuOpen(isMenuOpen);
  }

  return (
    <>
      {window.screen.width <= 1100 ? (
        <HamburguerContainer>
          <header>
            <div>
              <img src={Logo} />
            </div>

            <HamburguerMenu
              className={menuOpen}
              onClick={handleMenuOpen}
              aria-label="Navigation"
            />
          </header>

          <Sections>
            <OptionsList className={menuOpen}>
              <Link to="">
                <p>Quem Somos</p>
              </Link>

              <Link to="">
                <p>Categorias</p>
              </Link>

              <Link to="">
                <p>Galeria do Evento</p>
              </Link>

              <Link to="/inscricao">
                <p>Inscreva-se</p>
              </Link>
            </OptionsList>
          </Sections>
        </HamburguerContainer>
      ) : (
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

          <Link to="/inscricao">
            <p>Inscreva-se</p>
          </Link>
        </Container>
      )}
    </>
  );
}

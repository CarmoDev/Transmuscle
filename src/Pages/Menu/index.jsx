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

import { Link as LinkScroll } from "react-scroll";

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
              <img src={Logo} alt="Transmuscle Logo" />
            </div>

            <HamburguerMenu
              className={menuOpen}
              onClick={handleMenuOpen}
              aria-label="Navigation"
            />
          </header>

          <Sections>
            <OptionsList className={menuOpen}>
              <LinkScroll
                smooth={true}
                duration={500}
                offset={100}
                to="quemSomos"
              >
                <p>Quem Somos</p>
              </LinkScroll>

              <LinkScroll
                smooth={true}
                duration={500}
                offset={100}
                to="categorias"
              >
                <p>Categorias</p>
              </LinkScroll>

              <LinkScroll smooth={true} duration={500} offset={100} to="">
                <p>Galeria do Evento</p>
              </LinkScroll>

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
            <LinkScroll
              to="quemSomos"
              smooth={true}
              duration={500}
              offset={100}
            >
              <p>Quem Somos</p>
            </LinkScroll>

            <LinkScroll
              to="categorias"
              smooth={true}
              duration={500}
              offset={-20}
            >
              <p>Categorias</p>
            </LinkScroll>

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

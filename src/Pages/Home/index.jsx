import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container, DescriptionContainer } from "./styles";

import Logo from "../../assets/images/GoldenLogoFull.png";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import desc from "./utils/desc";
import PromoModal from "./components/PromoModal";

export default function Home() {
  const [isPromoVisible, setIsPromoVisible] = useState(false);

  function handleCloseModal() {
    setIsPromoVisible(false);
  }
  return (
    <Container id="quemSomos">
      <PromoModal isVisible={isPromoVisible} onClose={handleCloseModal} />
      <img src={Logo} alt="Logo transmuscle" />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {desc.map((project) => (
          <SwiperSlide key={project.title}>
            <DescriptionContainer>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </DescriptionContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

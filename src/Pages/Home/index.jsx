import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container, DescriptionContainer } from "./styles";

import Logo from "../../assets/images/GoldenLogoFull.png";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import desc from "./utils/desc";

export default function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Container id="quemSomos">
      <img src={Logo} alt="Logo transmuscle" />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {desc.map((project) => (
          <SwiperSlide key={project.title}>
            <DescriptionContainer>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </DescriptionContainer>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </Container>
  );
}

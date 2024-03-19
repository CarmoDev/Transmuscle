import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Sponsor } from "./styles";
import { Navigation } from "swiper/modules";
import SponsorsData from "./utils/Sponsors";

import "swiper/css";
import "swiper/css/navigation";

// import Presskit from "./utils/PressKit.pdf";

export default function Sponsors() {
  return (
    <Container>
      <h1>Apoio e Patrocinadores</h1>

      <Swiper
        autoHeight={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={16}
        style={{
          maxWidth: "90%",
        }}
        loop={true}
        initialSlide={4}
        navigation
        modules={[Navigation]}
      >
        {SponsorsData.map((sponsor) => (
          <SwiperSlide key={sponsor.name}>
            <Sponsor
              href={`https://www.instagram.com/${sponsor.insta}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Redirecionamento para ${sponsor.insta}`}
            >
              <img src={sponsor.url} id={sponsor.id} alt={`${sponsor.label}`} />

              <h2>{sponsor.name}</h2>
            </Sponsor>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <footer>
        <a href={Presskit} download={"Transmuscle - Press Kit"}>
          Seja um Patrocionador
        </a>
      </footer> */}
    </Container>
  );
}

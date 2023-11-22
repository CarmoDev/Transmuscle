import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Sponsor } from "./styles";
import { Navigation } from "swiper/modules";
import SponsorsData from "./utils/Sponsors";

import "swiper/css";
import "swiper/css/navigation";

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
        initialSlide={3}
        navigation
        modules={[Navigation]}
      >
        {SponsorsData.map((sponsor) => (
          <SwiperSlide key={sponsor.name}>
            <Sponsor>
              <img src={sponsor.url} id={sponsor.id} alt={sponsor.name} />

              <h2>{sponsor.name}</h2>
            </Sponsor>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

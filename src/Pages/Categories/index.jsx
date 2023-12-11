import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { CategoriesContainer, Category, Container, Rules } from "./styles";

import "swiper/css";
import "swiper/css/pagination";

import CategoriesData from "./utils/Categories";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <Container id="categorias">
      <h1>Categorias</h1>

      {window.screen.width >= 1100 && (
        <CategoriesContainer>
          {CategoriesData.map((category, index) => (
            <Category
              key={category.title}
              isPrelast={CategoriesData.length - 2 === index}
              isLast={CategoriesData.length - 1 === index}
            >
              <h2>{category.title}</h2>

              <Rules
                isPrelast={CategoriesData.length - 2 === index}
                isLast={CategoriesData.length - 1 === index}
              >
                {category.subcategories.map((subCategory, subIndex) => (
                  <div key={subIndex}>
                    <p>{subCategory.title}</p>
                    {subCategory.rules.map((rule, index) => (
                      <ul key={index}>
                        <li>{rule}</li>
                      </ul>
                    ))}
                  </div>
                ))}
              </Rules>
            </Category>
          ))}
        </CategoriesContainer>
      )}

      {window.screen.width <= 1100 && (
        <Swiper
          autoHeight={true}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={16}
          style={{ maxWidth: "90%" }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation]}
        >
          {CategoriesData.map((category) => (
            <SwiperSlide key={category.title}>
              <Category>
                <h2>{category.title}</h2>

                <Rules>
                  {category.subcategories.map((subCategory, subIndex) => (
                    <div key={subIndex}>
                      <p>{subCategory.title}</p>
                      {subCategory.rules.map((rule, index) => (
                        <ul key={index}>
                          <li>{rule}</li>
                        </ul>
                      ))}
                    </div>
                  ))}
                </Rules>
              </Category>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <button disabled={false} onClick={() => navigate("/inscricao")}>
        Desejo Competir
      </button>
    </Container>
  );
}

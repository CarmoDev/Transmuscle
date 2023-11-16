import { useNavigate } from "react-router-dom";
import { CategoriesContainer, Category, Container, Rules } from "./styles";

import CategoriesData from "./utils/Categories";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Categorias</h1>

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

      <button onClick={() => navigate("/inscricao")}>Desejo Competir</button>
    </Container>
  );
}

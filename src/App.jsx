import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./assets/Styles/Global";
import MainRoutes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;

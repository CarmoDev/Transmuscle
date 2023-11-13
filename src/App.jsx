import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./assets/Styles/Global";
import Menu from "./Pages/Menu";
import Home from "./Pages/Home";
import Achivements from "./Pages/Achivements";
import Categories from "./Pages/Categories";
import Sponsors from "./Pages/Sponsors";
import Footer from "./Pages/Footer";
import Subscription from "./Pages/Subscription";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Subscription />
      {/* <Menu />
      <Home />
      <Achivements />
      <Categories />
      <Sponsors />
      <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

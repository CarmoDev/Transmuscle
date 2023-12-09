import { Route, Routes } from "react-router-dom";
import Subscription from "./Pages/Subscription";
import MainPage from "./Pages/MainPage";
import ConfirmPayment from "./Pages/ConfirmPayment";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/inscricao" element={<Subscription />} /> */}
      <Route path="/confirmed" element={<ConfirmPayment />} />
    </Routes>
  );
}

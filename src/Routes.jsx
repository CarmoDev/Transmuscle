import { Route, Routes } from "react-router-dom";
import Subscription from "./Pages/Subscription";
import MainPage from "./Pages/MainPage";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/inscricao" element={<Subscription />} />
    </Routes>
  );
}

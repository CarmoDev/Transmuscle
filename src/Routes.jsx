import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Subscription from "./Pages/Subscription";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscricao" element={<Subscription />} />
    </Routes>
  );
}

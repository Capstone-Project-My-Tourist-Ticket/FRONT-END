import Home from "@/pages";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import City from "@/pages/user/detailCity";
import DetailTour from "@/pages/user/detailTour";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/city" element={<City />} />
        <Route path="/tour" element={<DetailTour />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

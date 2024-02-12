import ETiket from "@/components/ETiket";
import Home from "@/pages";
/* import Login from "@/pages/auth/login"; */
import Register from "@/pages/auth/register";
import BookingList from "@/pages/user/BookingList";
import City from "@/pages/user/detailCity";
import DetailTour from "@/pages/user/detailTour";
import PaymentBook from "@/pages/user/paymentBook";
import PaymentResult from "@/pages/user/paymentResult";
import Profile from "@/pages/user/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*         <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/city" element={<City />} />
        <Route path="/tour" element={<DetailTour />} />
        <Route path="/payment" element={<PaymentBook />} />
        <Route path="/payresult" element={<PaymentResult />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookinglist" element={<BookingList />} />
        <Route path="/etiket" element={<ETiket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

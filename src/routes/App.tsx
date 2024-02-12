import ETiket from "@/components/ETiket";
import Home from "@/pages";
import AddCity from "@/pages/admin/AddCity";
import AddVoucher from "@/pages/admin/AddVoucher";
import CityList from "@/pages/admin/CityList";
import Dashboard from "@/pages/admin/Dashboard";
import AdminDetailTour from "@/pages/admin/DetailTour";
import EditCity from "@/pages/admin/EditCity";
import TourList from "@/pages/admin/TourList";
import TransactionList from "@/pages/admin/TransactionList";
import VerificationAccount from "@/pages/admin/VerificationAccount";
/* import Login from "@/pages/auth/login" */
import Register from "@/pages/auth/register";
import City from "@/pages/user/detailCity";
import DetailTour from "@/pages/user/detailTour";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingList from "@/pages/user/BookingList";
import PaymentBook from "@/pages/user/paymentBook";
import PaymentResult from "@/pages/user/paymentResult";
import Profile from "@/pages/user/profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaction-list" element={<TransactionList />} />
        <Route path="/tour-list" element={<TourList />} />
        <Route path="/city-list" element={<CityList />} />
        <Route path="/verification-account" element={<VerificationAccount />} />
        <Route path="/add-voucher" element={<AddVoucher />} />
        <Route path="/add-city" element={<AddCity />} />
        <Route path="/edit-city" element={<EditCity />} />
        {/*         <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/city" element={<City />} />
        <Route path="/tour" element={<DetailTour />} />
        <Route path="/admin-tour" element={<AdminDetailTour />} />
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

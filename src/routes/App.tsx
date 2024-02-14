import Home from "@/pages"
import AddCity from "@/pages/Admin/AddCity"
import AddVoucher from "@/pages/Admin/AddVoucher"
import CityList from "@/pages/Admin/CityList"
import Dashboard from "@/pages/Admin/Dashboard"
import AdminDetailTour from "@/pages/Admin/DetailTour"
import EditCity from "@/pages/Admin/EditCity"
import TourList from "@/pages/Admin/TourList"
import TransactionList from "@/pages/Admin/TransactionList"
import VerificationAccount from "@/pages/Admin/VerificationAccount"
import Register from "@/pages/auth/register"
import City from "@/pages/user/detailCity"
import DetailTour from "@/pages/user/detailTour"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BookingList from "@/pages/user/BookingList"
import PaymentBook from "@/pages/user/paymentBook"
import PaymentResult from "@/pages/user/paymentResult"
import Profile from "@/pages/user/profile"
import MyTour from "@/pages/pengelola/myTour"
import ETiket from "@/components/ETiket"
/* import Login from "@/pages/auth/login" */
import TransactionHistory from "@/pages/pengelola/transactionHistory"
import AddTour from "@/pages/pengelola/addTour"
import EditTour from "@/pages/pengelola/editTour"
import AddPackage from "@/pages/pengelola/addPackage"
import DetailMyTour from "@/pages/Manager/DetailMyTour"
import Login from "@/pages/auth/login"
import ProtectedRoute from "./ProtectedRoute"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction-list" element={<TransactionList />} />
          <Route path="/tour-list" element={<TourList />} />
          <Route path="/city-list" element={<CityList />} />
          <Route
            path="/verification-account"
            element={<VerificationAccount />}
          />
          <Route path="/add-voucher" element={<AddVoucher />} />
          <Route path="/add-city" element={<AddCity />} />
          <Route path="/edit-city" element={<EditCity />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/city/:id" element={<City />} />
          <Route path="/detailmytour" element={<DetailMyTour />} />
          <Route path="/tour/:id" element={<DetailTour />} />
          <Route path="/admin-tour" element={<AdminDetailTour />} />
          <Route path="/payment" element={<PaymentBook />} />
          <Route path="/payresult" element={<PaymentResult />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookinglist" element={<BookingList />} />
          <Route path="/etiket" element={<ETiket />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/mytour" element={<MyTour />} />
          <Route path="/addtour" element={<AddTour />} />
          <Route path="/edittour" element={<EditTour />} />
          <Route path="/addpackage" element={<AddPackage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

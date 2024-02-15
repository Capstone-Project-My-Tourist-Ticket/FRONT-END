import ETiket from "@/components/ETiket"
import Home from "@/pages"
import Login from "@/pages/auth/login"
import Register from "@/pages/auth/register"
import City from "@/pages/user/detailCity"
import DetailTour from "@/pages/user/detailTour"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BookingList from "@/pages/user/bookingList"
import PaymentBook from "@/pages/user/paymentBook"
import PaymentResult from "@/pages/user/paymentResult"
import Profile from "@/pages/user/profile"
import TransactionHistory from "@/pages/pengelola/transactionHistory"
import MyTour from "@/pages/pengelola/myTour"
import AddTour from "@/pages/pengelola/addTour"
import EditTour from "@/pages/pengelola/editTour"
import AddPackage from "@/pages/pengelola/addPackage"
import ProtectedRoute from "@/routes/ProtectedRoute"
import DetailMyTour from "@/pages/pengelola/detailMyTour"
import AddCity from "@/pages/Admin/AddCity"
import AddVoucher from "@/pages/Admin/adminAddVoucher"
import CityList from "@/pages/Admin/adminCityList"
import Dashboard from "@/pages/Admin/adminDashboard"
import AdminDetailTour from "@/pages/Admin/adminDetailDashboard"
import EditCity from "@/pages/Admin/adminEditCity"
import TourList from "@/pages/Admin/adminTourList"
import TransactionList from "@/pages/Admin/adminTransactionList"
import VerificationAccount from "@/pages/Admin/adminVerification"

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
          <Route path="/edit-city/:id" element={<EditCity />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/city/:id" element={<City />} />
          <Route path="/detailmytour" element={<DetailMyTour />} />
          <Route path="/tour/:id" element={<DetailTour />} />
          <Route path="/admin-tour" element={<AdminDetailTour />} />
          <Route path="/payment" element={<PaymentBook />} />
          <Route path="/payresult/:booking_id" element={<PaymentResult />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookinglist" element={<BookingList />} />
          <Route path="/etiket/:booking_id" element={<ETiket />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/mytour" element={<MyTour />} />
          <Route path="/addtour" element={<AddTour />} />
          <Route path="/edittour" element={<EditTour />} />
          <Route path="/addpackage" element={<AddPackage />} />
          <Route path="/detailmytour/:id" element={<DetailMyTour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

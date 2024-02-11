import Home from "@/pages"
import AddCity from "@/pages/Admin/AddCity"
import AddVoucher from "@/pages/Admin/AddVoucher"
import CityList from "@/pages/Admin/CityList"
import Dashboard from "@/pages/Admin/Dashboard"
import EditCity from "@/pages/Admin/EditCity"
import TourList from "@/pages/Admin/TourList"
import TransactionList from "@/pages/Admin/TransactionList"
import VerificationAccount from "@/pages/Admin/VerificationAccount"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

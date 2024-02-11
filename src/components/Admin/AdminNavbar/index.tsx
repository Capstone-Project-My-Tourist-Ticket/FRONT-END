import { Link } from "react-router-dom"
import React from "react"

function AdminNavbar() {
  return (
    <div className="bg-white w-[300px] ps-8 py-4 h-screen">
      <ul>
        <li className="flex items-center p-2 gap-2">
          <img className="w-[35px]" src="/images/admin/dashboard.png" />
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>

        <li className="flex items-center p-2 gap-2">
          <img className="w-[35px]" src="/images/admin/transaction.png" />
          <Link to={"/transaction-list"}>Transaction List</Link>
        </li>
        <li className="flex items-center p-2 gap-2">
          <img className="w-[35px]" src="/images/admin/tour.png" />
          <Link to={"/tour-list"}>Tour List</Link>
        </li>
        <li className="flex items-center p-2 gap-2">
          <img className="w-[35px]" src="/images/admin/pin.png" />
          <Link to={"/city-list"}>City List</Link>
        </li>
        <li className="flex items-center p-2 gap-2">
          <img className="w-[35px]" src="/images/admin/Vector.png" />
          <Link to={"/verification-account"}>Verification Account</Link>
        </li>
        <li className="flex items-center p-2 gap-2">
          <img className="w-[35px]" src="/images/admin/voucher.png" />
          <Link to={"/add-voucher"}>Add Voucher</Link>
        </li>
      </ul>
    </div>
  )
}

export default AdminNavbar

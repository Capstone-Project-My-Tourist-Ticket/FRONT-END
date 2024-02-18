import { useAuth } from "@/utils/contexts/auth"
import { Link } from "react-router-dom"

function AdminNavbar() {
  const { user, token } = useAuth()
  return (
    <div className="bg-white w-[300px] ps-8 py-4 min-h-screen max-h-max">
      {token && user.role === "admin" ? (
        <ul>
          <li className="flex items-center p-3 gap-2 text-lg font-semibold">
            <img className="w-[20px]" src="/images/admin/dashboard.png" />
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>

          <li className="flex items-center p-3 gap-2 text-lg font-semibold">
            <img className="w-[20px]" src="/images/admin/transaction.png" />
            <Link to={"/transaction-list"}>Transaction List</Link>
          </li>
          <li className="flex items-center p-3 gap-2 text-lg font-semibold">
            <img className="w-[20px]" src="/images/admin/tour.png" />
            <Link to={"/tour-list"}>Tour List</Link>
          </li>
          <li className="flex items-center p-3 gap-2 text-lg font-semibold">
            <img className="w-[20px]" src="/images/admin/pin.png" />
            <Link to={"/city-list"}>City List</Link>
          </li>
          <li className="flex items-center p-3 gap-2 text-lg font-semibold">
            <img className="w-[20px]" src="/images/admin/Vector.png" />
            <Link to={"/verification-account"}>Verification Account</Link>
          </li>
          <li className="flex items-center p-3 gap-2 text-lg font-semibold">
            <img className="w-[20px]" src="/images/admin/voucher.png" />
            <Link to={"/add-voucher"}>Add Voucher</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li className="flex items-center p-3 gap-2 text-lg font-semibold">
            <img className="w-[20px]" src="/images/admin/transaction.png" />
            <Link to={"/transaction-history"}>Transaction History</Link>
          </li>
          <li className="flex items-center p-3 gap-2 text-lg font-semibold">
            <img className="w-[20px]" src="/images/admin/tour.png" />
            <Link to={"/mytour"}>My Tour</Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default AdminNavbar

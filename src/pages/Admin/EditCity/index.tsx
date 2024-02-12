import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import Footer from "@/components/Footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from "react"

function EditCity() {
  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>

      <div className="flex">
        <AdminNavbar />
        <div className=" px-6 py-4">
          <p className="text-2xl underline underline-offset-8 py-6 font-bold">
            Edit City
          </p>
          <Input placeholder="City Name" className="border border-black" />{" "}
          <br />
          <Textarea placeholder="Description" /> <br />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input
              placeholder="Thumbnail"
              type="file"
              className="border border-black"
            />{" "}
            <br />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input
              placeholder="Thumbnail"
              type="file"
              className="border border-black"
            />{" "}
            <br />
          </div>
          <button className="bg-black rounded-lg text-white w-[500px] p-2">
            Edit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EditCity

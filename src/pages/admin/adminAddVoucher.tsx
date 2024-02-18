import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import * as React from "react"
import Footer from "@/components/Footer"
import axiosWithConfig from "@/utils/apis/axiosWithConfig"

function AddVoucher() {
  const [post, setPost] = useState({
    name: "",
    code: "",
    description: "",
    discount_value: "",
    expired_voucher: "",
  })

  const [popup, setPopup] = useState({
    visible: false,
    success: false,
    message: "",
  })

  const handleInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name } = event.target
    {
      const value = (event.target as HTMLInputElement | HTMLTextAreaElement)
        .value
      setPost({ ...post, [name]: value })
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const formData = new FormData()

    formData.append("name", post.name)
    formData.append("code", post.code)
    formData.append("description", post.description)
    formData.append("discount_value", post.discount_value)

    formData.append("expired_voucher", post.expired_voucher)

    axiosWithConfig
      .post("https://benarja.my.id/vouchers", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setPopup({
          visible: true,
          success: true,
          message: "Voucher added successfully!",
        })
        console.log(response)
      })
      .catch((error) => {
        setPopup({
          visible: true,
          success: false,
          message: "Voucher already exist!",
        })
        console.log(error)
      })
  }

  const closePopup = () => {
    setPopup({
      visible: false,
      success: false,
      message: "",
    })
  }

  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>
      <div className="flex">
        <AdminNavbar />
        <div className="px-6 py-4 w-full">
          <div className="text-2xl underline underline-offset-8 pb-6 font-bold">
            Add Voucher
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Voucher Name"
              name="name"
              className="w-[500px] border border-black"
              onChange={handleInput}
            />
            <br />
            <Input
              placeholder="Voucher Code"
              name="code"
              className="w-[500px] border border-black"
              onChange={handleInput}
            />
            <br />
            <Textarea
              placeholder="Description"
              onChange={handleInput}
              name="description"
            />{" "}
            <br />
            <Input
              placeholder="Discount Value"
              name="discount_value"
              type="number"
              className="w-[500px] border border-black"
              onChange={handleInput}
            />
            <br />
            <Input
              placeholder="Expired Voucher"
              name="expired_voucher"
              type="date"
              className="w-[500px] border border-black"
              onChange={handleInput}
            />
            <div className="py-10">
              <button className="bg-black rounded-lg text-white w-[500px] p-2">
                Add
              </button>
            </div>
          </form>
          {popup.visible && (
            <div
              className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-lg font-semibold ${
                popup.success ? "text-green-500" : "text-red-500"
              }`}
            >
              <div className="bg-white p-4 rounded-lg relative">
                <button
                  onClick={closePopup}
                  className="text-black font-normal absolute top-2 right-0"
                >
                  <img className="w-[35px]" src="/images/admin/close.png" />
                </button>
                <p className="py-4 px-3">{popup.message}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddVoucher

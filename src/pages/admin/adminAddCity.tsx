import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import Footer from "@/components/Footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from "react"
import axiosWithConfig from "@/utils/apis/axiosWithConfig"

function AddCity() {
  const [post, setPost] = useState({
    city_name: "",
    description: "",
    image: "",
    thumbnail: "",
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
    const { name, type } = event.target

    if (type === "file") {
      const files = (event.target as HTMLInputElement).files
      if (files && files.length > 0) {
        setPost({ ...post, [name]: files[0] })
      }
    } else {
      const value = (event.target as HTMLInputElement | HTMLTextAreaElement)
        .value
      setPost({ ...post, [name]: value })
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const formData = new FormData()

    formData.append("city_name", post.city_name)
    formData.append("description", post.description)

    if (post.image) {
      formData.append("image", post.image)
    }
    if (post.thumbnail) {
      formData.append("thumbnail", post.thumbnail)
    }

    axiosWithConfig
      .post("https://benarja.my.id/citys", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setPopup({
          visible: true,
          success: true,
          message: "City added successfully!",
        })
        console.log(response)
      })
      .catch((error) => {
        setPopup({
          visible: true,
          success: false,
          message: "City ​​already exists!",
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
        <div className=" px-6 py-4">
          <p className="text-[20px] underline underline-offset-8 py-6 font-bold">
            Add City
          </p>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="City Name"
              className="border border-black text-[12px]"
              onChange={handleInput}
              name="city_name"
            />
            <br />
            <Textarea
              placeholder="Description"
              onChange={handleInput}
              name="description"
              className="text-[12px]"
            />
            <br />
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="text-[12px] font-medium">Thumbnail</div>
              <Input
                placeholder="Thumbnail"
                type="file"
                className="border border-black text-[12px]"
                onChange={handleInput}
                name="thumbnail"
              />
              <br />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="text-[12px] font-medium">Image</div>
              <Input
                placeholder="Image"
                type="file"
                className="border border-black text-[12px]"
                onChange={handleInput}
                name="image"
              />
              <br />
            </div>
            <button className="bg-black hover:bg-gray-700 active:bg-gray-800 rounded-lg text-white w-[500px] p-2 text-[15px]">
              Add
            </button>
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

export default AddCity

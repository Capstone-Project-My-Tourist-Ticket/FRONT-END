import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import axiosWithConfig from "@/utils/apis/axiosWithConfig"

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function EditCity() {
  const { id } = useParams()
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    // Your existing form submission logic, adjusted for PUT/PATCH request
    const formData = new FormData()
    formData.append("city_name", post?.city_name)
    formData.append("description", post?.description)
    // Append files if changed
    if (typeof post?.image === "object" && post?.image !== "") {
      formData.append("image", post?.image)
    }
    if (typeof post?.thumbnail === "object" && post?.thumbnail !== "") {
      formData.append("thumbnail", post?.thumbnail)
    }

    axiosWithConfig
      .put(`https://benarja.my.id/citys/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setPopup({
          visible: true,
          success: true,
          message: "City edited successfully!",
        })
        console.log(response)
      })
      .catch((error) => {
        setPopup({
          visible: true,
          success: false,
          message: "Failed to edit city!",
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosWithConfig.get(
          `https://benarja.my.id/citys/${id}`
        )
        const city = response?.data?.data

        setPost({
          city_name: city?.city_name,
          description: city?.description,
          image: city?.image,
          thumbnail: city?.thumbnail,
        })
      } catch (error) {
        console.error("Error fetching city data:", error)
      }
    }

    fetchData()
  }, [id])

  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>

      <form onSubmit={handleSubmit} className="flex">
        <AdminNavbar />
        <div className=" px-6 pb-6">
          <p className="text-2xl underline underline-offset-8 py-6 font-bold">
            Edit City
          </p>
          <Input
            placeholder="City Name"
            className="border border-black"
            onChange={handleInput}
            name="city_name"
            value={post.city_name}
          />
          <br />
          <Textarea
            placeholder="Description"
            onChange={handleInput}
            name="description"
            value={post.description}
          />{" "}
          <br />
          <Card
            style={{ backgroundImage: `url(${post?.thumbnail})` }}
            className="bg-cover w-[180px] h-[180px] relative my-4"
          />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input
              placeholder="Thumbnail"
              type="file"
              className="border border-black"
              onChange={handleInput}
              name="thumbnail"
            />{" "}
            <br />
          </div>
          <Card
            style={{ backgroundImage: `url(${post?.image})` }}
            className="bg-cover w-[180px] h-[180px] relative my-4"
          />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input
              placeholder="Image"
              type="file"
              className="border border-black"
              onChange={handleInput}
              name="image"
            />{" "}
            <br />
          </div>
          <button
            type="submit"
            className="bg-black rounded-lg text-white w-[500px] p-2"
          >
            Edit
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
      <Footer />
    </div>
  )
}

export default EditCity

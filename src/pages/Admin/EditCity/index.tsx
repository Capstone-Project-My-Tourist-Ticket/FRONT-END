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
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
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
        <div className=" px-6 py-4">
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
      <Footer />
    </div>
  )
}

export default EditCity

import AdminHeader from "@/components/Admin/AdminHeader"
import AdminNavbar from "@/components/Admin/AdminNavbar"
import Footer from "@/components/Footer"
import axios from "axios"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from "react"

function AddCity() {
  const [post, setPost] = useState({
    city_name: "",
    description: "",
    image: "",
    thumbnail: "",
  })
  console.log(post, "aaaa")

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDc4MTg5NDgsInVzZXJJZCI6ODZ9.tECCETHJNcE2wuObZ5kjf9RqcNENFh_8hR7e4AwzLVM"

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

    axios
      .post("https://benarja.my.id/citys", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>

      <div className="flex">
        <AdminNavbar />
        <div className=" px-6 py-4">
          <p className="text-2xl underline underline-offset-8 py-6 font-bold">
            Add City
          </p>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="City Name"
              className="border border-black"
              onChange={handleInput}
              name="city_name"
            />{" "}
            <br />
            <Textarea
              placeholder="Description"
              onChange={handleInput}
              name="description"
            />{" "}
            <br />
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
            <button className="bg-black rounded-lg text-white w-[500px] p-2">
              Add
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddCity

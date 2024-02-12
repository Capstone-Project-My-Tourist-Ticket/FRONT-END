import AdminHeader from "@/components/Admin/AdminHeader";
import AdminNavbar from "@/components/Admin/AdminNavbar";
import Map from "@/components/Map";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function EditTour() {
  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>

      <div className="flex">
        <AdminNavbar />
        <div className="space-y-5 px-6 pt-4 pb-10 mx-16">
          <p className="text-2xl py-6 font-bold">Edit Tour</p>
          <div className="flex flex-col space-y-8">
            <Input placeholder="Tour Name" className="border border-black focus-visible:ring-0" />
            <select
              id="city"
              className=" w-full px-4 py-2 rounded-md outline-none border border-black"
            >
              <option value={""} disabled hidden selected>
                Choose city
              </option>
            </select>
            <Map draggable={true} />
            <Input placeholder="Address" className="border border-black focus-visible:ring-0" />
            <Textarea placeholder="Description" />
            <Input placeholder="Thumbnail" type="file" className="border border-black" />
            <Input placeholder="Image" type="file" className="border border-black" />
            <button className="bg-black rounded-lg text-white w-[500px] p-2">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTour;

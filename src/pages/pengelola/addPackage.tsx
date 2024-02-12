import AdminHeader from "@/components/Admin/AdminHeader";
import AdminNavbar from "@/components/Admin/AdminNavbar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function AddPackage() {
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleAddService = () => {
    setServiceList([...serviceList, { service: "" }]);
  };
  const handleRemoveService = (index: number) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };
  return (
    <div className="bg-[#dee2e6]">
      <header>
        <AdminHeader />
      </header>

      <div className="flex">
        <AdminNavbar />
        <div className="space-y-5 px-6 pt-4 pb-10 mx-16">
          <p className="text-2xl py-6 font-bold">Add Package</p>
          <div className="flex flex-col space-y-8">
            <Input placeholder="Package" className="border border-black focus-visible:ring-0" />
            {serviceList.map((service, index) => (
              <div className="flex-col items-center space-y-4" key={index}>
                <div className="flex gap-3">
                  <Input
                    placeholder="Services list"
                    className="border border-black focus-visible:ring-0"
                  />
                  {serviceList.length > 1 && (
                    <button
                      onClick={() => handleRemoveService(index)}
                      className="bg-red-500 text-white p-2 text-sm px-4 rounded-md"
                    >
                      Remove
                    </button>
                  )}
                </div>
                {serviceList.length - 1 === index && serviceList.length < 5 && (
                  <button
                    onClick={handleAddService}
                    className="bg-black text-white p-2 text-sm px-4 rounded-md"
                  >
                    Add
                  </button>
                )}
              </div>
            ))}
            <Input
              placeholder="Jumlah Tiket"
              className="border border-black focus-visible:ring-0"
            />
            <Input placeholder="Price" className="border border-black focus-visible:ring-0" />
            <button className="bg-black rounded-lg text-white w-[500px] p-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPackage;

import Layout from "@/components/Layout";
import SideBarUser from "@/components/SideBarUser";

const Profile = () => {
  return (
    <Layout>
      <div className="bg-[#F4F7FE] w-full py-14">
        <div className="container flex justify-between gap-10">
          <SideBarUser />
          <div className="bg-white w-3/4 rounded-lg shadow-lg px-3 pt-16 pb-32">
            <div className="flex flex-col items-center space-y-8">
              <img
                src={"https://via.placeholder.com/150"}
                alt="profile-user"
                className="rounded-full border shadow-sm size-48"
              />
              <button className="bg-orange-500 text-white w-32 py-2 rounded-lg mt-3 ">
                Edit Profile
              </button>
              <input
                type="text"
                placeholder="FullName"
                className="border px-5 py-2 outline-none w-[400px] bg-[#F4F7FE] rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="border px-5 py-2 outline-none w-[400px] bg-[#F4F7FE] rounded-md"
              />
              <input
                type="text"
                placeholder="PhoneNumber"
                className="border px-5 py-2 outline-none w-[400px] bg-[#F4F7FE] rounded-md"
              />
              <input
                type="password"
                placeholder="*********"
                className="border px-5 py-2 outline-none w-[400px] bg-[#F4F7FE] rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

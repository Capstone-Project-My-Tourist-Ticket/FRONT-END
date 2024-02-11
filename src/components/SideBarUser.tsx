const SideBarUser = () => {
  return (
    <div className=" w-1/5 bg-white border-r h-52 shadow-lg rounded-lg">
      <ul className="space-y-4 p-8">
        <li
          className={`p-3 hover:bg-zinc-50 hover:font-bold rounded-md cursor-pointer text-lg font-semibold text-orange-500`}
        >
          Profile
        </li>
        <li
          className={`p-3 hover:bg-zinc-50 hover:font-bold rounded-md cursor-pointer text-lg font-semibold text-orange-500 `}
        >
          Your Bookings
        </li>
      </ul>
    </div>
  );
};

export default SideBarUser;

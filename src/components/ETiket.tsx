const ETiket = () => {
  return (
    <div className="px-4 py-2 text-gray-800">
      <div className="hidden xl:flex flex-row justify-between shadow-md border rounded-md">
        <div className="flex flex-col items-center justify-between w-1/4 px-4 py-2 bg-white border-r-2 border-gray-500 border-dashed rounded-l-md">
          <div className="flex-col">
            <img src="https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a" />
            <p className="my-2 text-xs italic font-light text-gray-500">Scan here to check in!</p>
            <div className="text-xs mb-2 text-gray-600">
              <span className="text-gray-500">Valid until :</span>
              <br />
              Monday, 28 September 2020 18:30:23
            </div>
          </div>
        </div>
        <div className="relative flex flex-col w-3/4">
          <img
            className="h-[350px]"
            src={`https://source.unsplash.com/1200x800/?tour,destination,sea`}
          />
          <div className="absolute bottom-0 flex flex-col w-full h-24">
            <div className="w-full h-full bg-white opacity-75 rounded-br-md"></div>
            <div className="absolute flex flex-row p-2 text-gray-800 opacity-100">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <p className="mb-1 text-xs text-gray-500">Nama Tour :</p>
                  <p className="text-xs font-semibold text-red-800">Ice Age Artix Adventure</p>
                </div>
                <div className="hidden md:flex flex-col mt-1">
                  <p className="mb-1 text-xs text-gray-500">Package Name :</p>
                  <p className="text-xs font-semibold text-red-800">Paket Ber3 Reguler Ice Age</p>
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <div className="hidden md:flex flex-col">
                  <p className="mb-1 text-xs text-gray-500">Location :</p>
                  <p className="text-xs font-semibold text-red-800">
                    {" "}
                    Jl. Konoha, Jakarta Timur, Jakarta
                  </p>
                </div>
                <div className="flex flex-col mt-1">
                  <p className="mb-1 text-xs text-gray-500">Quantity</p>
                  <p className="text-xs font-semibold text-red-800">2 pax</p>
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <div className="flex flex-col">
                  <p className="mb-1 text-xs text-gray-500">Ticket Owner :</p>
                  <p className="text-xs font-semibold text-red-800">Ben Arja Cihuy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:hidden flex flex-col bg-white border rounded-md shadow-md">
        <div className="py-2 px-4 flex-col flex text-center">
          <img
            className="mx-auto"
            src="https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a"
          />
          <p className="font-bold text-lg md:text-3xl">Scan here to check in!</p>
        </div>
        <hr className="border-dashed border-2 border-gray-400" />
        <img src={`https://source.unsplash.com/1200x800/?tour,destination,sea`} className="h-64" />
        <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
          <div className="flex text-sm justify-between my-2 md:text-xl">
            <p>Tour :</p>
            <p className="font-bold text-red-800">Ice Age Artic Adventure</p>
          </div>
          <div className="flex text-sm justify-between my-2 md:text-xl">
            <p>Package :</p>
            <p className="font-bold text-red-800">Reguler Ice Age Adventure</p>
          </div>
        </div>
        <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
          <div className="flex text-sm md:text-xl justify-between my-2">
            <p>Pax</p>
            <p className="font-bold text-red-800">2</p>
          </div>
          <div className="flex text-sm md:text-xl justify-between my-2">
            <p>Valid til</p>
            <p className="font-bold text-red-800">Monday, 28 September 2020 18:30:23</p>
          </div>
        </div>
        <div className="py-2 px-4 flex flex-col text-sm md:text-2xl">
          <p className="self-start font-bold text-gray-500">Lokasi</p>
          <div className="flex text-sm md:text-xl justify-between my-2">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <p className="font-bold text-red-800">Jl. Konoha, Jakarta Timur, Jakarta</p>
          </div>
        </div>
        <hr className="border-gray-400" />
      </div>
    </div>
  );
};

export default ETiket;

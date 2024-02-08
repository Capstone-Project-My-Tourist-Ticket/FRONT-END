import Logo from "@/assets/Logo.png";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <div
        className="hidden md:block w-3/6 xl:w-4/6 bg-black/20 bg-blend-overlay bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://source.unsplash.com/1200x800?online-shop)`,
        }}
      ></div>
      <div className="w-full -translate-x-10 md:w-6/12 xl:w-4/12 p-16 rounded-tl-[50px] rounded-bl-[50px] bg-white">
        <div className="flex justify-center md:justify-start">
          <img className="md:ml-12" src={Logo} alt="logo-brand" />
        </div>
        <form className="flex flex-col items-start  gap-y-16 pt-20">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold ">Log In to Account</h3>
          <div className="flex flex-col w-full gap-y-8">
            <input type="text" placeholder="Email" className="border-b px-5 py-1 outline-none" />
            <input
              type="password"
              placeholder="Password"
              className="border-b px-5 py-1 outline-none"
            />
          </div>
          <div className="flex flex-col w-full gap-y-3">
            <button className="w-full md:w-1/3 py-3 rounded-md bg-red-500 text-white ">
              <p className="flex items-center justify-center gap-x-3 text-sm"></p>
              "Log In"
            </button>
            <p className="text-sm self-start">Don't have an account yet? Sign Up</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

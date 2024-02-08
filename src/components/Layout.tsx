import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="overflow-hidden">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

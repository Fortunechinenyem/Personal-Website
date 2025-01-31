import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="m-2 bg-gradient-to-b from-[#d8dddc] to-[#daeee4] dark:from-[#1a6830] dark:to-[#1f1f1f] flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

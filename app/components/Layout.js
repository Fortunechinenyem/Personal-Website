import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-[#d8dddc] to-[#daeee4] dark:from-[#747777] dark:to-[#1f1f1f] flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

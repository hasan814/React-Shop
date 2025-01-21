import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

import ShopProviders from "./context/ShopProviders";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1100px] mx-auto">
      <ShopProviders>
        <Toaster />
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Outlet />
        </main>
        <Footer />
      </ShopProviders>
    </div>
  );
};

export default App;

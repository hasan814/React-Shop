import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

import ShopProviders from "./context/ShopProviders";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <ShopProviders>
      <Toaster />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ShopProviders>
  );
};

export default App;

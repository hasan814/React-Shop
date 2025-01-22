import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

import SearchBox from "../components/modules/SearchBox";
import Loader from "../components/elements/Loader";
import Card from "../components/modules/Card";
import Sidebar from "../components/modules/Sidebar";

const ProductsPage = () => {
  // ============ Context ===========
  const { displayed, loading } = useContext(ShopContext);
  if (loading && !displayed.length) return <Loader />;

  // ============ Rendering ===========
  return (
    <>
      <SearchBox />
      <div className="flex">
        <div className="flex flex-wrap">
          {displayed.map((product) => (
            <Card {...product} key={product.id} />
          ))}
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default ProductsPage;

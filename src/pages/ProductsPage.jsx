import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

import SearchBox from "../components/modules/SearchBox";
import Loader from "../components/elements/Loader";
import Card from "../components/modules/Card";

const ProductsPage = () => {
  // ============ Context ===========
  const { products, loading } = useContext(ShopContext);
  if (loading && !products.length) return <Loader />;

  // ============ Rendering ===========
  return (
    <>
      <SearchBox />
      <div className="flex justify-between">
        <div className="w-[100%] flex flex-wrap justify-between">
          {products.map((product) => (
            <Card {...product} key={product.id} />
          ))}
        </div>
        <div>sidebar</div>
      </div>
    </>
  );
};

export default ProductsPage;

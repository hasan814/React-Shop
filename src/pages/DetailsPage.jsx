import { Link, useParams } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext/ShopContext";
import { useContext } from "react";

import Loader from "../components/elements/Loader";

const DetailsPage = () => {
  // ============= Params ===============
  const { id } = useParams();

  // ============= Context ===============
  const { products } = useContext(ShopContext);
  const result = products.find((product) => product.id === +id);

  // If product is not found
  if (!result) return <Loader />;

  const { image, title, description, category, price } = result;

  // ============= Rendering ===============
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex md:flex-row justify-between bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Product Image */}
        <img src={image} alt={title} className="w-52 h-64 my-auto " />

        {/* Product Details */}
        <div className="p-6 flex flex-col justify-between md:w-1/2">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 mb-6 text-justify">{description}</p>
            <p className="text-blue-500 font-medium flex items-center mb-4">
              <SiOpenproject className="mr-2" /> {category}
            </p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="text-xl font-bold text-green-500 flex items-center">
              <IoMdPricetag className="mr-2" /> $ {price}
            </span>
            <Link
              to="/"
              className="flex items-center text-blue-500 hover:text-blue-600 font-medium transition duration-200"
            >
              <FaArrowLeft className="mr-2" />
              <span>Back to shop</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

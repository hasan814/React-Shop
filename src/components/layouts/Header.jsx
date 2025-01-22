import { CartContext } from "../../context/CartContext/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // ============ Context ============
  const { state } = useContext(CartContext);
  console.log(state.itemsCounter);

  // ============ Rendering ============
  return (
    <header className="bg-blue-500 text-white shadow-md rounded-bl-lg rounded-br-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/shop.png"
              alt="shop"
            />
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="hover:text-gray-200 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/checkout"
                className="hover:text-gray-200 transition duration-200 flex items-center"
              >
                Checkout
                {!!state.itemsCounter && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                    {state.itemsCounter}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

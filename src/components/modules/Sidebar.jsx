import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import { FaListUl } from "react-icons/fa";
import { v4 } from "uuid";

const Sidebar = () => {
  // ============== Context =============
  const { query, categoryHandler } = useContext(ShopContext);

  // ============== Categories ============
  const categories = [
    "All",
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing",
  ];

  // ============== Rendering ============
  return (
    <div className="w-56 h-fit mt-3 p-3 bg-white border-2 border-gray-200 rounded-lg shadow-md">
      <div className="flex items-center mb-4 text-blue-500 font-semibold text-lg">
        <FaListUl className="mr-2 text-xl" />
        <p>Categories</p>
      </div>
      <hr />
      <ul onClick={categoryHandler} className="space-y-2">
        {categories.map((category) => (
          <li
            key={v4()}
            className={`text-sm p-2 text-nowrap cursor-pointer rounded-md ${
              query.category === category.toLowerCase()
                ? "text-white bg-blue-500"
                : "hover:text-blue-600 hover:bg-blue-100"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

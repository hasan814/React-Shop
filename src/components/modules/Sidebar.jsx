import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import { FaListUl } from "react-icons/fa";

const Sidebar = () => {
  // ============== Context =============
  const { query, categoryHandler } = useContext(ShopContext);

  // ============== Rendering ============
  return (
    <div className="w-56 h-fit mt-3 p-3 bg-white border-2 border-gray-200 rounded-lg shadow-md">
      <div className="flex items-center mb-4 text-blue-500 font-semibold text-lg">
        <FaListUl className="mr-2 text-xl" />
        <p>Categories</p>
      </div>
      <hr />
      <ul onClick={categoryHandler} className="space-y-2">
        <li className="text-sm p-2 cursor-pointer hover:text-blue-600 hover:bg-blue-100 rounded-md">
          All
        </li>
        <li className="text-sm p-2 cursor-pointer hover:text-blue-600 hover:bg-blue-100 rounded-md">
          Electronics
        </li>
        <li className="text-sm p-2 cursor-pointer hover:text-blue-600 hover:bg-blue-100 rounded-md">
          Jewelery
        </li>
        <li className="text-sm text-nowrap p-2 cursor-pointer hover:text-blue-600 hover:bg-blue-100 rounded-md">
          Men&apos;s clothing
        </li>
        <li className="text-sm text-nowrap p-2 cursor-pointer hover:text-blue-600 hover:bg-blue-100 rounded-md">
          Women&apos;s Clothing
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

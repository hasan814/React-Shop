import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import { FaListUl } from "react-icons/fa";

const Sidebar = () => {
  // ============== Context ============
  const { categoryHandler } = useContext(ShopContext);

  // ============== Rendering ============
  return (
    <div>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men&apos;s Clothing</li>
        <li>Women&apos;s Clothing</li>
      </ul>
    </div>
  );
};

export default Sidebar;

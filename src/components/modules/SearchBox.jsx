import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import { ImSearch } from "react-icons/im";

const SearchBox = () => {
  // =============== Context =============
  const { search, setSearch } = useContext(ShopContext);

  // =============== Search Function =============
  const searchHandler = () => {};

  // =============== Rendering =============
  return (
    <div className="flex items-center border border-gray-300 rounded-md p-2 bg-white shadow-md">
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}
        className="flex-grow px-4 py-2 outline-none text-gray-700 placeholder-gray-400 rounded-l-md"
      />
      <button
        onClick={searchHandler}
        className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
      >
        <ImSearch />
      </button>
    </div>
  );
};

export default SearchBox;

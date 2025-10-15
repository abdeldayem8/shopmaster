import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const ProductFilters = ({ onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const handleChange = () => {
    onFilterChange({ search, category, sort });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 bg-white p-4 rounded-lg shadow">
      {/* Search */}
      <div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-1/3">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={handleChange}
        />
      </div>

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          handleChange();
        }}
        className="border rounded-lg px-3 py-2"
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Home">Home</option>
      </select>

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => {
          setSort(e.target.value);
          handleChange();
        }}
        className="border rounded-lg px-3 py-2"
      >
        <option value="">Sort By</option>
        <option value="price_asc">Price (Low → High)</option>
        <option value="price_desc">Price (High → Low)</option>
        <option value="name_asc">Name (A → Z)</option>
      </select>
    </div>
  );
};

export default ProductFilters;

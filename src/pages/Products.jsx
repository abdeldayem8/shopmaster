import { useState, useEffect } from "react";
import useProducts from "../Hooks/useProducts"; // الهُوك الجديد
import Loading from "../components/common/Loading";
import ProductCard from "../components/Product/ProductCard";

const Products = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState(""); // '' | 'price_asc' | 'price_desc' | 'name_asc'

  const { products, loading, error, searchProducts, refresh } = useProducts();

  // optional: debounce search while typing (500ms)
  useEffect(() => {
    const id = setTimeout(() => {
      // when query empties, searchProducts will call fetchAll
      searchProducts(query);
    }, 500);

    return () => clearTimeout(id);
  }, [query, searchProducts]);

  // apply client-side category filter & sort on the currently loaded products
  const filtered = products.filter((p) =>
    category === "all" ? true : (p.category || "").toLowerCase() === category.toLowerCase()
  );

  const sorted = [...filtered].sort((a, b) => {
    if (!sortBy) return 0;
    if (sortBy === "price_asc") {
      // price strings like "0$" -> extract number
      const pa = parseFloat((a.price || "").replace(/[^0-9.-]+/g,"")) || 0;
      const pb = parseFloat((b.price || "").replace(/[^0-9.-]+/g,"")) || 0;
      return pa - pb;
    }
    if (sortBy === "price_desc") {
      const pa = parseFloat((a.price || "").replace(/[^0-9.-]+/g,"")) || 0;
      const pb = parseFloat((b.price || "").replace(/[^0-9.-]+/g,"")) || 0;
      return pb - pa;
    }
    if (sortBy === "name_asc") return (a.name || "").localeCompare(b.name || "");
    if (sortBy === "name_desc") return (b.name || "").localeCompare(a.name || "");
    return 0;
  });

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">All Products</h2>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-gray-200"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="all">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="">Sort By</option>
          <option value="price_asc">Price (Low → High)</option>
          <option value="price_desc">Price (High → Low)</option>
          <option value="name_asc">Name (A → Z)</option>
          <option value="name_desc">Name (Z → A)</option>
        </select>

        <button
          onClick={() => { setQuery(""); setCategory("all"); setSortBy(""); refresh(); }}
          className="bg-gray-100 px-3 py-2 rounded"
        >
          Reset
        </button>
      </div>

      {/* Results */}
      {loading && <Loading text="Loading products..." />}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <>
          {sorted.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sorted.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Products;

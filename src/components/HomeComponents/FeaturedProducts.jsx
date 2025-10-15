import { useFeaturedProducts } from "../../Hooks/useFeaturedProducts";
import Loading from "../common/Loading";
import ProductCard from "../Product/ProductCard";

const FeaturedProducts = () => {
  const { Featuredproducts, loading, error } = useFeaturedProducts();

  if (loading) return <Loading/>;
  if (error) return <p>Error: {error}</p>;

  return (
     <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Featuredproducts.length > 0 ? (
          Featuredproducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;

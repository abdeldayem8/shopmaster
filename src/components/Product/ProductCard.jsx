import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, quantity: 1 }));
  };
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      {/* نغلف الصورة + النص بـ Link */}
      <Link to={`/product/${product.slug}`} className="block flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <p className="text-lg font-bold text-indigo-600">{product.price}</p>
        </div>
      </Link>

      {/* زرار Add to Cart */}
      <button
         onClick={handleAddToCart}
        className="mt-4 flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
      >
        <AiOutlineShoppingCart size={18} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

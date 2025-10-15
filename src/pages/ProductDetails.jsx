import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/common/Loading";
import axiosClient from "../utils/axiosClient";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, quantity }));
  };


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axiosClient.get(`/product/${slug}`);
        if (data?.data?.length > 0) {
          setProduct(data.data[0]);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [slug]);

  if (!product) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <img
          src={product.thumbnail_image}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-md"
        />

        <div>
          <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
          <p className="text-gray-500 mt-1">{product.main_category_name}</p>
          <p className="text-gray-700 mt-4 leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <p className="text-2xl font-bold text-indigo-600">{product.main_price}</p>
            <p className="text-sm text-gray-500">
              Stock: {product.current_stock ?? 0} units
            </p>
          </div>
           <div className="flex items-center mt-4 gap-2">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>
           <button
            onClick={handleAddToCart}
            className="mt-5 bg-black text-white py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

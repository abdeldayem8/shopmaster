import { useSelector, useDispatch } from "react-redux";
import { fetchCart, updateCartQuantity } from "../redux/cartSlice";
import { useEffect } from "react";
import Loading from "../components/common/Loading";

const CartPage = () => {
  const { items, loading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (loading) return <Loading/>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b py-3">
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>{item.price} EGP</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(updateCartQuantity({ id: item.id, quantity: item.quantity - 1 }))}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => dispatch(updateCartQuantity({ id: item.id, quantity: item.quantity + 1 }))}
              >
                +
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;

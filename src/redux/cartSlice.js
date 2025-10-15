import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartApi from "../utils/cartApi";

// ✅ Get Cart
export const fetchCart = createAsyncThunk("cart/fetch", async () => {
  const { data } = await cartApi.getCart();
  return data;
});

// ✅ Add to Cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ id, quantity }, { rejectWithValue }) => {
    try {
      const { data } = await cartApi.addToCart(id, quantity);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error adding to cart");
    }
  }
);

// ✅ Update Quantity
export const updateCartQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ id, quantity }, { rejectWithValue }) => {
    try {
      const { data } = await cartApi.updateQuantity(id, quantity);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error updating quantity");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchCart
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // addToCart
      .addCase(addToCart.fulfilled, (state, action) => {
        // ممكن الـ API يرجع الكارت كامل أو المنتج المضاف فقط
        state.items = action.payload.cart || action.payload;
      })

      // updateQuantity
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.items = action.payload.cart || action.payload;
      });
  },
});

export default cartSlice.reducer;

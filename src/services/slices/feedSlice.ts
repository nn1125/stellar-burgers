import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFeedsApi, getOrdersApi, getOrderByNumberApi } from '@api';
import { TOrder, TOrdersData } from '@utils-types';

export const fetchFeeds = createAsyncThunk('feed/fetchAll', getFeedsApi);

export const fetchOrders = createAsyncThunk('feed/fetchOrders', getOrdersApi);

export const fetchOrderByNumber = createAsyncThunk(
  'feed/fetchOrderByNumber',
  async (number: number) => {
    const res = await getOrderByNumberApi(number);
    return res.orders[0];
  }
);

type TFeedState = {
  orders: TOrder[];
  total: number;
  totalToday: number;
  isLoading: boolean;
  userOrders: TOrder[];
  userOrdersLoading: boolean;
  orderData: TOrder | null;
  orderDataLoading: boolean;
};

const initialState: TFeedState = {
  orders: [],
  total: 0,
  totalToday: 0,
  isLoading: false,
  userOrders: [],
  userOrdersLoading: false,
  orderData: null,
  orderDataLoading: false
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchFeeds
      .addCase(fetchFeeds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFeeds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload.orders;
        state.total = action.payload.total;
        state.totalToday = action.payload.totalToday;
      })
      .addCase(fetchFeeds.rejected, (state) => {
        state.isLoading = false;
      })
      // fetchOrders (user orders)
      .addCase(fetchOrders.pending, (state) => {
        state.userOrdersLoading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.userOrdersLoading = false;
        state.userOrders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.userOrdersLoading = false;
      })
      // fetchOrderByNumber
      .addCase(fetchOrderByNumber.pending, (state) => {
        state.orderDataLoading = true;
      })
      .addCase(fetchOrderByNumber.fulfilled, (state, action) => {
        state.orderDataLoading = false;
        state.orderData = action.payload;
      })
      .addCase(fetchOrderByNumber.rejected, (state) => {
        state.orderDataLoading = false;
      });
  }
});

export default feedSlice.reducer;

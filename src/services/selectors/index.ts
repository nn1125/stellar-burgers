import { RootState } from '../store';

export const selectIngredientItems = (state: RootState) =>
  state.ingredients.items;
export const selectIngredientsLoading = (state: RootState) =>
  state.ingredients.isLoading;
export const selectIngredientsError = (state: RootState) =>
  state.ingredients.error;

export const selectUser = (state: RootState) => state.user.user;
export const selectIsAuthChecked = (state: RootState) =>
  state.user.isAuthChecked;
export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated;
export const selectLoginError = (state: RootState) => state.user.loginError;
export const selectRegisterError = (state: RootState) =>
  state.user.registerError;
export const selectUpdateError = (state: RootState) => state.user.updateError;
export const selectUserState = (state: RootState) => state.user;

export const selectConstructorState = (state: RootState) =>
  state.burgerConstructor;
export const selectConstructorBun = (state: RootState) =>
  state.burgerConstructor.bun;
export const selectConstructorIngredients = (state: RootState) =>
  state.burgerConstructor.ingredients;
export const selectOrderRequest = (state: RootState) =>
  state.burgerConstructor.orderRequest;
export const selectOrderModalData = (state: RootState) =>
  state.burgerConstructor.orderModalData;

export const selectFeedOrders = (state: RootState) => state.feed.orders;
export const selectFeedTotal = (state: RootState) => state.feed.total;
export const selectFeedTotalToday = (state: RootState) => state.feed.totalToday;
export const selectUserOrders = (state: RootState) => state.feed.userOrders;
export const selectOrderData = (state: RootState) => state.feed.orderData;

export {
  default as ingredientsReducer,
  fetchIngredients
} from './ingredientsSlice';
export {
  default as userReducer,
  loginUser,
  registerUser,
  getUser,
  updateUser,
  logoutUser,
  checkUserAuth
} from './userSlice';
export {
  default as constructorReducer,
  addIngredient,
  removeIngredient,
  moveIngredientUp,
  moveIngredientDown,
  clearConstructor,
  closeOrderModal,
  orderBurger
} from './constructorSlice';
export {
  default as feedReducer,
  fetchFeeds,
  fetchOrders,
  fetchOrderByNumber
} from './feedSlice';

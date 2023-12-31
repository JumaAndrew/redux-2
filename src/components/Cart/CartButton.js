import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);

  const toggleCart = () => {
    dispatch(cartActions.displayCart());
  };

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;

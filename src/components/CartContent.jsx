import { useCartContext } from '../context/cart_context';
import CartItem from './CartItem';
import CartColums from './CartColumns';
import { Link } from 'react-router-dom';
import CartTotals from './CartTotals';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <section className='global-section global-section-center'>
      <CartColums />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className='flex justify-between mt-8 gap-x-1'>
        <Link to='/products' className='cart-content-btn '>
          continue shopping
        </Link>
        <button
          type='button'
          onClick={clearCart}
          className='cart-content-btn bg-gray-600'
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </section>
  );
};
export default CartContent;

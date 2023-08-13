import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CartContent from '../components/CartContent';

const Cart = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <main className='page-100'>
        <div className='text-center'>
          <h2 className='global-h2 mb-4'>Your cart is empty</h2>
          <Link to='/products' className='btn '>
            fill it
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main>
      <PageHero title='cart' />
      <div className='page'>
        <CartContent />
      </div>
    </main>
  );
};
export default Cart;

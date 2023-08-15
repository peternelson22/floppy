import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  const { shippingFee, totalAmount } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <section className='mt-12 flex justify-center md:justify-end overflow-hidden'>
      <div>
        <article className='border border-solid border-gray-600 rounded-md py-6 px-12'>
          <h5 className='grid grid-cols-[200px_1fr] global-h5'>
            subtotal :
            <span className='text-red-400'>{formatPrice(totalAmount)}</span>
          </h5>
          <p className='grid grid-cols-[200px_1fr] capitalize global-p'>
            shipping fee :<span>{formatPrice(shippingFee)}</span>
          </p>
          <hr />
          <h4 className='grid grid-cols-[200px_1fr] mt-8 global-h4 text-blue-500'>
            order total :<span>{formatPrice(totalAmount + shippingFee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link
            to='/checkout'
            className='btn w-full mt-4 text-center font-bold'
          >
            proceed to checkout
          </Link>
        ) : (
          <button
            type='button'
            onClick={loginWithRedirect}
            className='btn w-full mt-4 text-center font-bold'
          >
            Login
          </button>
        )}
      </div>
    </section>
  );
};
export default CartTotals;

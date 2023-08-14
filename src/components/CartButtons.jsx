import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { totalItems } = useCartContext();
  const { logout, loginWithRedirect, myUser } = useUserContext();

  return (
    <div className='grid grid-cols-[1fr_1fr] items-center w-[225px]'>
      <Link
        to='/cart'
        onClick={closeSidebar}
        className='text-gray-600 text-base tracking-wide flex items-center font-mono font-medium'
      >
        Cart
        <span className='flex items-center relative'>
          <FaShoppingCart className='h-6 ml-1' />
          <span className='absolute -top-[10px] -right-4 bg-blue-400 w-4 h-4 flex items-center justify-center rounded-full text-sm text-white p-3'>
            {totalItems}
          </span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          onClick={() => logout({ retureTo: window.location.origin })}
          className='flex items-center justify-center p-1 bg-blue-400 shadow hover:shadow-md rounded-xl border-transparent text-base cursor-pointer tracking-tight text-gray-200 font-mono font-normal'
        >
          Logout
          <FaUserMinus className='ml-1 text-gray-500' />
        </button>
      ) : (
        <button
          type='button'
          onClick={loginWithRedirect}
          className='flex items-center justify-center p-1 bg-blue-400 shadow hover:shadow-md rounded-xl border-transparent text-base cursor-pointer tracking-tight text-gray-200 font-mono font-normal'
        >
          Login
          <FaUserPlus className='ml-1 text-gray-500' />
        </button>
      )}
    </div>
  );
};
export default CartButtons;

import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';

const CartButtons = () => {
  return (
    <div className='grid grid-cols-2 items-center w-[225px]'>
      <Link
        to='/cart'
        className='text-gray-500 text-xl tracking-wider flex items-center font-mono font-medium'
      >
        Cart{' '}
        <span className='flex items-center relative'>
          <FaShoppingCart className='h-6 ml-1' />
          <span className='absolute -top-[10px] -right-4 bg-gray-300 w-4 h-4 flex items-center justify-center rounded-full text-xs text-white p-3'>
            6
          </span>
        </span>
      </Link>
      <button
        type='button'
        className='flex items-center bg-transparent border-transparent text-xl cursor-pointer tracking-tight text-gray-400 font-mono font-medium'
      >
        Login
        <FaUserPlus className='ml-1' />
      </button>
    </div>
  );
};
export default CartButtons;

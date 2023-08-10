import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { useProductsContext } from '../context/products_context';

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();

  return (
    <div className='grid grid-cols-2 items-center w-[225px]'>
      <Link
        to='/cart'
        onClick={closeSidebar}
        className='text-gray-500 text-base tracking-wide flex items-center font-mono font-medium'
      >
        Cart{' '}
        <span className='flex items-center relative'>
          <FaShoppingCart className='h-6 ml-1' />
          <span className='absolute -top-[10px] -right-4 bg-blue-300 w-4 h-4 flex items-center justify-center rounded-full text-xs text-white p-3'>
            6
          </span>
        </span>
      </Link>
      <button
        type='button'
        // onClick={closeSidebar}
        className='flex items-center justify-center p-[2px] bg-blue-400 shadow hover:shadow-md rounded-xl border-transparent text-base cursor-pointer tracking-tight text-gray-50 font-mono font-medium'
      >
        Login
        <FaUserPlus className='ml-1' />
      </button>
    </div>
  );
};
export default CartButtons;

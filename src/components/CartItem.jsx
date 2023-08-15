import { useCartContext } from '../context/cart_context';
import { FaTrash } from 'react-icons/fa';
import { formatPrice } from '../utils/helpers';
import AmountButtons from './AmountButtons';

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, 'inc');
  };

  const decrease = () => {
    toggleAmount(id, 'dec');
  };
  return (
    <article className='grid grid-cols-[200px_auto_auto] grid-rows-[75px] gap-x-2 gap-y-12 justify-items-center mb-12 items-center md:grid-cols-[1fr_1fr_1fr_1fr_auto] md:items-center '>
      <div className='grid grid-rows-[75px] grid-cols-[75px_125px]  items-center text-left gap-3 md:h-full md:grid md:grid-cols-[100px_200px] md:items-center md:gap-4 md:text-left'>
        <img
          src={image}
          alt={name}
          className='w-full h-full block rounded-md object-cover'
        />
        <div>
          <h5 className='global-h5 text-xs mb-0 md:text-sm'>{name}</h5>
          <p className=' global-p text-gray-500 text-xs md:text-sm tracking-wide capitalize mb-0 flex items-center justify-start'>
            color :
            <span
              style={{ background: color }}
              className='inline-block w-2 h-2 md:w-3 md:h-3 bg-red-700 rounded-md'
            ></span>
          </p>
          <h5 className='global-h5 text-blue-400 md:hidden'>
            {formatPrice(price)}
          </h5>
        </div>
      </div>
      <h5 className='hidden md:block md:text-base text-blue-400 font-normal'>
        {formatPrice(price)}
      </h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />

      <h5 className='hidden md:block md:mb-0 md:text-gray-500 font-normal text-base'>
        {formatPrice(price * amount)}
      </h5>
      <button
        type='button'
        onClick={() => removeItem(id)}
        className=' text-white  bg-red-500 border-transparent tracking-normal md:tracking-wide  w-6 h-6 flex items-center justify-center rounded-md text-xs cursor-pointer'
      >
        <FaTrash />
      </button>
    </article>
  );
};
export default CartItem;

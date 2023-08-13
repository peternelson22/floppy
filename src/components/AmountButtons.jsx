import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className='grid w-24 md:w-32 justify-center items-center grid-cols-3'>
      <button
        type='button'
        className='bg-transparent border-transparent cursor-pointer px-0 py-4 w-4 md:w-6 h-3 md:h-4 flex items-center justify-center'
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <h2 className='global-h2 mb-1 text-base md:text-xl'>{amount}</h2>
      <button
        type='button'
        className='bg-transparent border-transparent cursor-pointer px-0 py-4 w-4 md:w-6 h-3 md:h-4 flex items-center justify-center'
        onClick={increase}
      >
        <FaPlus />
      </button>
    </div>
  );
};
export default AmountButtons;

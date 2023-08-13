import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import AmountButtons from './AmountButtons';
import { useCartContext } from '../context/cart_context';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAMount) => {
      let tempAmount = oldAMount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAMount) => {
      let tempAmount = oldAMount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <section className='mt-6'>
      <div className='grid grid-cols-[125px_1fr] items-center mb-4'>
        <span className='capitalize font-bold'>colors :</span>
        <div className='flex'>
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ background: color }}
              className={`w-6 h-6 rounded-full bg-slate-100 border-none cursor-pointer mr-2 flex items-center justify-center text-xs text-white ${
                mainColor === color ? 'opacity-100' : 'opacity-50'
              }`}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? <FaCheck /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className='mt-6'>
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Link
          to='/cart'
          onClick={() => addToCart(id, mainColor, amount, product)}
          className='btn'
        >
          add to cart
        </Link>
      </div>
    </section>
  );
};
export default AddToCart;

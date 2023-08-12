import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
const Product = ({ id, image, name, price }) => {
  return (
    <article>
      <div className='relative bg-black rounded-md hover:opacity-50 group'>
        <img
          src={image}
          alt={name}
          className='w-full h-[225px] block object-cover rounded-md global-transtion'
        />
        <Link
          to={`/products/${id}`}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 flex items-center justify-center w-10 h-10 rounded-full global-transition opacity-0 cursor-pointer group-hover:opacity-100'
        >
          <FaSearch className='text-xl text-white' />
        </Link>
      </div>
      <footer className='mt-4 flex justify-between items-center'>
        <h5 className='font-normal mb-0 global-h5'>{name}</h5>
        <p className='font-normal mb-0 text-blue-400 tracking-wider global-p'>
          {formatPrice(price)}
        </p>
      </footer>
    </article>
  );
};
export default Product;

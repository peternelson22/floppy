import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const ListView = ({ products }) => {
  return (
    <section className='grid, gap-y-12'>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article
            key={id}
            className='tb:grid tb:grid-cols-[auto_1fr] tb:gap-x-8 tb:items-center'
          >
            <img
              src={image}
              alt={name}
              className='w-[300px] block h-52 object-cover rounded-md mb-4'
            />
            <div className='mb-4'>
              <h4 className='global-h4 mb-2'>{name}</h4>
              <h5 className='global-h5 text-blue-400 mb-3'>
                {formatPrice(price)}
              </h5>
              <p className='global-p max-w-[45em] mb-4'>
                {description.substring(0, 150)}...
              </p>
              <Link to={`/products/${id}`} className='btn text-xs py-1 px-2'>
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default ListView;

import { Link } from 'react-router-dom';

const PageHero = ({ title, product }) => {
  return (
    <section className='bg-blue-100 w-full min-h-[15vh] flex items-center text-gray-100'>
      <div className='global-section-center'>
        <h3 className='text-gray-700 capitalize font-medium text-lg'>
          <Link
            className='text-blue-400 p-2 global-transition hover:text-blue-500'
            to='/'
          >
            Home
          </Link>
          {product && (
            <Link
              to='/products'
              className='text-blue-400 p-2 global-transition hover:text-blue-500'
            >
              / Products
            </Link>
          )}
          / {title}
        </h3>
      </div>
    </section>
  );
};
export default PageHero;

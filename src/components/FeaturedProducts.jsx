import { useProductsContext } from '../context/products_context';
import GeneralError from './GeneralError';
import Loading from './Loading';
import Product from './Product';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const {
    productsLoading: loading,
    productsError: error,
    featuredProducts: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <GeneralError />;
  }
  return (
    <section className='bg-gray-100 global-section'>
      <div className=''>
        <h2 className='text-center global-h2'>Featured Products</h2>
        <div className='global-underline'></div>
      </div>
      <div className='global-section-center mx-auto my-16 grid gap-10 sm:grid-cols-fluid'>
        {featured.slice(0, 3).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <Link to='/products' className='block w-36 mx-auto my-0 text-center btn'>
        all products
      </Link>
    </section>
  );
};
export default FeaturedProducts;

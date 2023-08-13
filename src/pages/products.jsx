import PageHero from '../components/PageHero';
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';
import Filters from '../components/Filters';

const Products = () => {
  return (
    <main>
      <PageHero title='products' />
      <div className='page'>
        <div className='global-section-center grid gap-y-12 gap-x-6 mt-16 mx-auto md:grid-cols-[200px_1fr]'>
          <Filters />
          <div className=''>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Products;

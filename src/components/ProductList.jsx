import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';
import Loading from './Loading';

const ProductList = () => {
  const {
    filteredProducts: products,
    allProducts,
    gridView,
  } = useFilterContext();

  if (allProducts.length < 1 && Array.isArray(allProducts)) {
    return <Loading />;
  }

  if (products.length < 1) {
    return (
      <h5 className='normal-case tracking-widest font-semibold global-h5'>
        {' '}
        Sorry, no products matched your search...
      </h5>
    );
  }

  if (gridView === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};
export default ProductList;

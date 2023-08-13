import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';
import Loading from './Loading';

const ProductList = () => {
  const { filteredProducts: products, gridView } = useFilterContext();

  // if (products === undefined) {
  //   return <Loading />;
  // }

  if (products.length < 1) {
    return <Loading />;
  }

  if (gridView === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};
export default ProductList;

import Product from './Product';

const GridView = ({ products }) => {
  return (
    <section className=''>
      <div className='grid gap-x-8 gap-y-6 tb:grid-cols-2 lm:grid-cols-3'>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
export default GridView;

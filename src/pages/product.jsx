import { Link, useNavigate, useParams } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useEffect } from 'react';
import { single_product_url as url } from '../utils/constants';
import Loading from '../components/Loading';
import GeneralError from '../components/GeneralError';
import PageHero from '../components/PageHero';
import ProductImages from '../components/ProductImages';
import AddToCart from '../components/AddToCart';
import Stars from '../components/Stars';
import { formatPrice } from '../utils/helpers';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    productLoading: loading,
    productError: error,
    product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <GeneralError />;
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <main className=''>
      <PageHero title={name} product />
      <div className='global-section global-section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='grid gap-16 mt-8 tb:grid-cols-[1fr_1fr] tb:items-center tb:justify-center'>
          <ProductImages images={images} />
          <section>
            <h2 className='global-h2'>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='text-blue-400 global-h5 tb:text-xl'>
              {formatPrice(price)}
            </h5>
            <p className='global-p leading-loose max-w[45em]'>{description}</p>
            <p className='product-info global-p'>
              <span className='font-bold'>Available : </span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className='product-info global-p'>
              <span className='font-bold'>SKU :</span>
              {sku}
            </p>
            <p className='product-info global-p'>
              <span className='font-bold'>Brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </main>
  );
};
export default Product;

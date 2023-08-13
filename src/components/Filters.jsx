import { useFilterContext } from '../context/filter_context';
import { formatPrice, getUniqueValues } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      price,
      min_price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    allProducts,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, 'category');
  const companies = getUniqueValues(allProducts, 'company');
  const colors = getUniqueValues(allProducts, 'colors');
  return (
    <section>
      <div className='md:sticky top-4'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='mb-5'>
            <input
              type='text'
              name='text'
              value={text}
              placeholder='search'
              onChange={updateFilters}
              className='p-2 bg-gray-100 rounded-md border-transparent tracking-wide placeholder:capitalize'
            />
          </div>
          <div className='mb-5'>
            <h5 className='global-h5 mb-2'>category</h5>
            <div>
              {categories.map((c, index) => (
                <button
                  key={index}
                  onClick={updateFilters}
                  type='button'
                  name='category'
                  className={`filter-btn ${
                    category === c ? 'bg-gray-200 rounded-md px-2' : null
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className='mb-5'>
            <h5 className='global-h5'>company</h5>
            <select
              name='company'
              value={company}
              onChange={updateFilters}
              className='bg-gray-100 rounded-md border-transparent p-1'
            >
              {companies.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-5'>
            <h5 className='global-h5'>colors</h5>
            <div className='flex items-center'>
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      name='color'
                      style={{ background: c }}
                      data-color='all'
                      className={`${
                        color === 'all'
                          ? 'color-all-btn filter-btn underline'
                          : 'color-all-btn filter-btn'
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    onClick={updateFilters}
                    data-color={c}
                    className={`filter-btn color-color-btn ${
                      color === c ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    {color === c ? (
                      <FaCheck className='text-[0.5rem] text-white' />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className='mb-5'>
            <h5 className='global-h5'>price</h5>
            <p className='global-p mb-1'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          <div className='mb-5 grid grid-cols-[auto_1fr] items-center capitalize gap-x-2 text-base'>
            <label htmlFor='shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
        </form>
        <button
          type='button'
          onClick={clearFilters}
          className='bg-gray-500 text-white px-2 py-1 rounded-md hover:text-gray-200'
        >
          clear filters
        </button>
      </div>
    </section>
  );
};
export default Filters;

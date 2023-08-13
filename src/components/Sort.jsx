import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
  const {
    filteredProducts: products,
    gridView,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <section className='grid sm:grid grid-cols-1 gap-y-3 mb-8 sm:grid-cols-[auto_auto_1fr_auto]  sm:items-center sm:b-8 gap-x-8'>
      <div className='sm:w- grid grid-cols-2 gap-x-2'>
        <button
          onClick={setGridView}
          className={`sort-btn ${gridView ? 'bg-black text-white' : null} `}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          className={`sort-btn ${!gridView ? 'bg-black text-white' : null} `}
        >
          <BsList />
        </button>
      </div>
      <p className='global-p capitalize mb-0'>
        {products.length} products found
      </p>
      <hr />
      <form>
        <label
          htmlFor='sort'
          className='sm:inline-block sm:mr-2 text-base capitalize'
        >
          sort by
        </label>
        <select
          name='sort'
          id='sort'
          value={sort}
          onChange={updateSort}
          className='border-transparent text-base capitalize px-2 py-1'
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a - z)</option>
          <option value='name-z'>name (z - a)</option>{' '}
        </select>
      </form>
    </section>
  );
};
export default Sort;

import { Link } from 'react-router-dom';

const PageHero = ({ title }) => {
  return (
    <section className='bg-blue-100 w-full min-h-[15vh] flex items-center text-gray-100'>
      <div className='global-section-center'>
        <h3 className='text-gray-700 capitalize font-medium text-xl'>
          <Link
            className='text-blue-300 p-2 global-transition hover:text-blue-400'
            to='/'
          >
            Home
          </Link>
          / {title}
        </h3>
      </div>
    </section>
  );
};
export default PageHero;

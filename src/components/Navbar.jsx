import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';

const Navbar = () => {
  const { openSidebar } = useProductsContext();

  return (
    <nav className='h-20 flex items-center justify-center'>
      <div className='w-[90vw] mx-auto max-w-6xl tb:flex tb:justify-between tb:items-center'>
        <div className='flex items-center justify-between'>
          <Link to='/'>
            <img src={logo} alt='floppy' className='w-32' />
          </Link>
          <button
            onClick={openSidebar}
            type='button'
            className='flex tb:hidden bg-transparent border-transparent text-blue-400 cursor-pointer text-3xl'
          >
            <FaBars />
          </button>
        </div>
        <ul className='hidden tb:flex tb:justify-center'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li
                key={id}
                className='mx-2  font-medium font-mono hover:text-blue-300'
              >
                <Link
                  to={url}
                  className='text-base capitalize tracking-wider p-2 hover:border-b-blue-300 hover:border-b-2'
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className='hidden tb:flex'>
          <CartButtons />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

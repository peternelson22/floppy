import logo from '../assets/images/logo.png';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from '../components/CartButtons';
const Siderbar = () => {
  const isOpen = true;
  return (
    <div className='text-center'>
      <aside
        className={`fixed top-0 left-0 w-full h-full bg-white transition-all duration-150 ease-linear md:hidden ${
          isOpen ? 'translate-x-0 z-[999px]' : '-translate-x-full -z-[1]'
        }`}
      >
        <div className='flex justify-between items-center py-4 px-4'>
          <img src={logo} alt='floppy' className='justify-self-center h-11' />
          <button className='text-3xl bg-transparent text-gray-500 cursor-pointer mt-1 transition duration-150 ease-out hover:text-gray-300'>
            <FaTimes />
          </button>
        </div>
        <ul className='mb-6 '>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} className='links'>
                  {text}
                </Link>
              </li>
            );
          })}
          <li className='links'>
            <Link to='/checkout'>checkout</Link>
          </li>
        </ul>
        <div className='mx-auto flex justify-center items-center'>
          <CartButtons />
        </div>
      </aside>
    </div>
  );
};
export default Siderbar;

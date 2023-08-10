import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Siderbar from '../components/Siderbar';
import Error from './error';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Siderbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;

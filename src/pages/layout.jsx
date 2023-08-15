import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Siderbar from '../components/Siderbar';
import AuthWrapper from './auth_wrapper';

const Layout = () => {
  return (
    <div>
      <AuthWrapper>
        <Navbar />
        <Siderbar />
        <Outlet />
        <Footer />
      </AuthWrapper>
    </div>
  );
};
export default Layout;

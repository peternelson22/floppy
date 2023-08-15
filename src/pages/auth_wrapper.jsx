import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/Loading';

const AuthWrapper = ({ children }) => {
  const { error, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <section className='grid min-h-screen place-items-center'>
        <Loading />
      </section>
    );
  }
  if (error) {
    return (
      <section className='grid min-h-screen place-items-center'>
        {error.message}
      </section>
    );
  }

  return <>{children}</>;
};
export default AuthWrapper;

import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <main className='min-h-[calc(100vh-10rem)] bg-blue-100 flex justify-center items-center text-center'>
        <section>
          <img src={img} alt='not found' className='h-72 w-72' />
          <h3 className='text-3xl'>Ohh! </h3>
          <p className='mb-8'>
            We can't seem to find the page you're looking for
          </p>
          <Link to='/' className='bg-blue-400 rounded-xl text-white p-1'>
            back home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className='min-h-[calc(100vh-10rem)] bg-blue-100 flex justify-center items-center text-center'>
      <div>
        <h3>something went wrong</h3>
      </div>
    </main>
  );
};
export default Error;

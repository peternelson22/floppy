import { Link } from 'react-router-dom';
import hero1 from '../assets/images/hero-bcg.jpeg';
import hero2 from '../assets/images/hero-bcg-2.jpeg';

const Hero = () => {
  return (
    <section className='global-section-center min-h-[60vh] grid place-items-center  tb:h-[calc(100vh-5rem)]  tb:grid-cols-2 tb:gap-x-[500px]'>
      <article>
        <h1 className='global-h1 tb:mb-8'>
          design your <br /> comfort zone
        </h1>
        <p className='leading-loose  mb-8 tb:text-xl text-gray-500 text-base'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          labore reiciendis consequatur, qui mollitia voluptatibus
        </p>
        <Link to='products' className='btn tb:px-6 tb:py-3'>
          shop now
        </Link>
      </article>
      <article className='hidden tb:block tb:relative tb:before:absolute tb:before:w-[10%] tb:before:h-[80%] tb:before:bg-blue-200 tb:before:bottom-[0%] tb:before:-left-[8%] tb:before:rounded-md'>
        <img
          src={hero1}
          alt='nice table'
          className='tb:w-full tb:h-[400px] tb:relative tb:rounded-md tb:object-cover tb:block'
        />
        <img
          src={hero2}
          alt='person walking'
          className='tb:absolute tb:bottom-0 tb:left-0 tb:w-60 tb:-translate-x-1/2 tb:rounded-md'
        />
      </article>
    </section>
  );
};
export default Hero;

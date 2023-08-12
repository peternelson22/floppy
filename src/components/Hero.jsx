import { Link } from 'react-router-dom';
import hero1 from '../assets/images/hero-bcg.jpeg';
import hero2 from '../assets/images/hero-bcg-2.jpeg';

const Hero = () => {
  return (
    <section className='global-section-center min-h-[60vh] grid place-items-center tb:h-[calc(100vh-5rem)] md:grid-cols-[1fr_1fr] tb:gap-24'>
      <article>
        <h1 className='global-h1 md:mb-8'>
          design your <br /> comfort zone
        </h1>
        <p className='leading-loose max-w-[45em] mb-8 tb:text-xl text-gray-500 text-base'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          labore reiciendis consequatur, qui mollitia voluptatibus alias, fugiat
          natus exercitationem beatae commodi dignissimos.
        </p>
        <Link to='products' className='btn tb:px-6 tb:py-3'>
          shop now
        </Link>
      </article>
      <article className='hidden tb:block tb:relative tb:before:content-[] tb:before:absolute tb:before:w-[10%] tb:before:h-[80%] tb:before:bg-blue-200 tb:before:bottom-[0%] tb:before:-left-[8%] tb:before:rounded-md'>
        <img
          src={hero1}
          alt='nice table'
          className='md:w-full tb:h-[400px] tb:relative tb:rounded-md tb:object-cover tb:block'
        />
        <img
          src={hero2}
          alt='person walking'
          className='md:absolute tb:bottom-0 md:left-0 tb:w-56 tb:-translate-x-1/2 tb:rounded-md'
        />
      </article>
    </section>
  );
};
export default Hero;

import { services } from '../utils/constants';

const Services = () => {
  return (
    <section className='py-10 px-0 bg-blue-50 lb:p-0'>
      <div className='global-section-center lg:translate-y-20'>
        <article className='mb-8 tb:grid tb:grid-cols-[1fr_1fr]'>
          <h3 className='text-blue-300 global-h3'>
            custom furniture <br /> built for you
          </h3>
          <p className='tb-0 leading-relaxed text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            saepe accusamus tenetur itaque maiores animi.
          </p>
        </article>
        <div className='mt-14 grid gap-9 sm:grid-cols-fluid'>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article
                key={id}
                className='bg-blue-400 text-center py-8 px-6 rounded-md'
              >
                <span className='w-[4rem] h-[4rem] grid mx-auto my-0 place-items-center tb-4 rounded-full bg-blue-700 text-white text-3xl'>
                  {icon}
                </span>
                <h4 className='global-h4 text-blue-300'>{title}</h4>
                <p className='text-gray-50'>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;

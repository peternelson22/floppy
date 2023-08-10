import PageHero from '../components/PageHero';
import aboutImg from '../assets/images/hero-bcg.jpeg';

const About = () => {
  return (
    <main className=''>
      <PageHero title='about' />
      <section className='grid md:grid-cols-2 gap-16 page global-section global-section-center'>
        <img
          src={aboutImg}
          alt=''
          className='w-full block rounded-md h-[400px] object-cover'
        />
        <article>
          <div className='text-left'>
            <h2 className='global-h2'>our story</h2>
            <div className='ml-0 global-underline'></div>
          </div>
          <p className='global-p mt-8 leading-loose mx-auto my-0 max-w-[45em]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            illo eius delectus asperiores laudantium perferendis at id
            voluptatibus obcaecati recusandae facere quo, nulla ipsa numquam,
            aliquid aut. Temporibus nobis corrupti quas? Quasi impedit aperiam
            vitae, provident voluptates qui cumque a praesentium, excepturi
            porro nihil! Deserunt quia repellendus minima ratione unde.
          </p>
        </article>
      </section>
    </main>
  );
};
export default About;

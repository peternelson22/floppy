const Contact = () => {
  return (
    <section className='py-20 px-0 lb:py-48 lb:px-0'>
      <div className='global-section-center'>
        <h3 className='normal-case global-h3'>
          Join our newsletter to get the latest products
        </h3>
        <div className='tb:grid tb:grid-cols-[1fr_1fr] tb:items-center tb:gap-28 tb:mt-8'>
          <p className='leading-loose max-w-[45em] text-gray-600 mb-8 tb:mb-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            beatae cum corrupti fugit odio quos tempore quo rem.
          </p>
          <form
            action='https://formspree.io/f/xaygebdp'
            method='POST'
            className='w-[90vw] max-w-[550px] grid grid-cols-[1fr_auto]'
          >
            <input
              name='_replyto'
              type='email'
              placeholder='enter email'
              className='text-base py-2 px-4 border-2 border-black border-solid border-r-0 text-gray-500 rounded-l placeholder:capitalize placeholder:text-black'
            />
            <button
              type='submit'
              className='text-base py-2 px-4 border-2 border-black border-solid rounded-l bg-blue-400 capitalize tracking-wider cursor-pointer global-transition text-black hover:text-white'
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;

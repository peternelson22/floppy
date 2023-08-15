import { useState } from 'react';

const ProductImages = ({ images = [[]] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <section>
      <img
        src={main.url}
        alt='main'
        className='h-[300px] w-full block rounded-md object-cover md:h-[450px] tb:h-[500px]'
      />
      <div className='mt-4 grid grid-cols-5 gap-x-4'>
        {images.map((image, index) => (
          <img
            src={image.url}
            alt={image.filename}
            key={index}
            onClick={() => setMain(images[index])}
            className={`h-[50px] sm:h-[75px] tb:h-[100px] cursor-pointer w-full block rounded-md object-cover ${
              image.url === main.url
                ? 'border-2 border-solid border-blue-400 shadow-md'
                : null
            }`}
          />
        ))}
      </div>
    </section>
  );
};
export default ProductImages;

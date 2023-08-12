import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className='text-blue-600 text-base mr-1'>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className='flex items-center mb-2'>
      <div className='flex items-center'>{tempStars}</div>
      <p className='global-p ml-2 mb-0'>({reviews} customer reviews)</p>
    </div>
  );
};
export default Stars;

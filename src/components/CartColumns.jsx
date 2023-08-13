const CartColumns = () => {
  return (
    <div className='hidden md:block'>
      <div className='md:grid md:grid-cols-[316px_1fr_1fr_1fr_auto] justify-items-center gap-x-4'>
        <h5 className='global-h5 font-normal'>item</h5>
        <h5 className='global-h5 font-normal'>price</h5>
        <h5 className='global-h5 font-normal'>quantity</h5>
        <h5 className='global-h5 font-normal'>subtotal</h5>
        <span className='w-8 h-8'></span>
      </div>
      <hr className='mt-2 mb-12' />
    </div>
  );
};
export default CartColumns;

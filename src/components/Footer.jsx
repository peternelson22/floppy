const Footer = () => {
  return (
    <footer className='h-20 flex flex-col tb:flex-row justify-center items-center bg-gray-950 text-center'>
      <h5 className='footer-heading5'>
        &copy; {new Date().getFullYear()}
        <span className='text-blue-400'> Floppy </span>
      </h5>
      <h5 className='footer-heading5'>All rights reserved</h5>
    </footer>
  );
};
export default Footer;

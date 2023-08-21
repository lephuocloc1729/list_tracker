const Footer = ({ itemAmount = 0 }) => {
  return (
    <footer className="text-center w-full fixed bottom-0 bg-blue-500 text-white text-3xl">
      {itemAmount} items
    </footer>
  );
};

export default Footer;

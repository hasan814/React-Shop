const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 rounded-tl-lg rounded-tr-lg">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Store. All rights reserved.
        </p>
        <div className="mt-2">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition duration-200 mx-2"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition duration-200 mx-2"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition duration-200 mx-2"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/**
 * @name Footer
 * @description Site-wide footer element
 */
const Footer: React.FC = (_props) => {
  // Setup
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center w-full h-12 border-t bg-gray-50">
      <b className="mr-1">&copy;{year}</b> Chat App | Created by{' '}
      <a
        className="text-red-800 ml-1"
        href="https://www.mattscholta.com"
        rel="noreferrer"
        target="_blank"
      >
        Matthew Scholta
      </a>
    </footer>
  );
};

export { Footer, Footer as default };

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-10">
      <p>
        © {new Date().getFullYear()} Fortune | Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;

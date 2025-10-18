import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-30 transition-colors duration-300">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Swaayatt Notes
      </h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
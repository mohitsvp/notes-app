import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 w-10 h-10 flex items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-yellow-300"
      aria-label="Toggle dark mode"
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <FiSun size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <FiMoon size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
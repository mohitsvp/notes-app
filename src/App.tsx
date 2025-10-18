import Header from './components/Header'
import NotesGrid from './components/NotesGrid'
import { motion, type Variants } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

function App() {

  const pageVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            duration: 3000,
            style: {
              background: '#4CAF50',
              color: 'white',
            },
          },
          error: {
            duration: 3000,
            style: {
              background: '#F44336',
              color: 'white',
            },
          },
        }}
      />
      <motion.div
        className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Header />
        <main>
          <NotesGrid />
        </main>
      </motion.div>
    </>
  )
}

export default App
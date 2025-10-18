import { motion, type Variants } from 'framer-motion';
import { type Note } from '../types';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

const cardVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.8 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    }
  },
  exit: { 
    opacity: 0, 
    y: -50, 
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  },
};

const iconVariants = {
  hover: { scale: 1.2, rotate: 5 }
};

const NoteCard = ({ note, onEdit, onDelete }: NoteCardProps) => {
  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={{ scale: 1.03, y: -5, rotate: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700/50 cursor-pointer"
      onClick={() => onEdit(note)}
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white truncate">
        {note.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 break-words line-clamp-3">
        {note.description}
      </p>
      
      <div className="flex justify-end gap-3 mt-4">
        <motion.button
          variants={iconVariants}
          whileHover="hover"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(note);
          }}
          className="p-2 text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 rounded-full"
          aria-label="Edit note"
        >
          <FiEdit size={18} />
        </motion.button>
        
        <motion.button
          variants={iconVariants}
          whileHover="hover"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(note.id);
          }}
          className="p-2 text-gray-500 hover:text-red-500 dark:hover:text-red-400 rounded-full"
          aria-label="Delete note"
        >
          <FiTrash2 size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NoteCard;
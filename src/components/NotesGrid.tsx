import { useState, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hook';
import { selectAllNotes, addNote, updateNote, deleteNote } from '../store/notesSlice';
import NoteCard from './NoteCard';
import Modal from './Modal';
import NoteForm from './NoteForm';
import { type Note } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { FiSearch } from 'react-icons/fi';

const NotesGrid = () => {
  const notes = useAppSelector(selectAllNotes);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = useMemo(() => {
    if (!searchQuery) {
      return notes;
    }
    return notes.filter(note =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [notes, searchQuery]);


  const openAddModal = () => {
    setEditingNote(null);
    setIsModalOpen(true);
  };

  const openEditModal = (note: Note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingNote(null);
  };

  const handleFormSubmit = (noteData: Omit<Note, 'id'> | Note) => {
    if (editingNote) {
      dispatch(updateNote(noteData as Note));
      toast.success('Note updated!');
    } else {
      const newNote: Note = {
        id: uuidv4(),
        ...(noteData as Omit<Note, 'id'>),
      };
      dispatch(addNote(newNote));
      toast.success('Note created!');
    }
    closeModal();
  };

  const handleDeleteNote = (id: string) => {
    dispatch(deleteNote({id, title: '', description: ''}));
    toast.error('Note deleted.');
  };


  return (
    <>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white w-full sm:w-auto">
            My Notes
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-auto">
              <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Filter by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button
              onClick={openAddModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all transform hover:scale-105 w-full sm:w-auto whitespace-nowrap"
            >
              Add Note
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onEdit={openEditModal}
                  onDelete={handleDeleteNote}
                />
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400 col-span-full text-center mt-8">
                {searchQuery ? 'No notes match your search.' : 'No notes yet. Add one!'}
              </p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <NoteForm
          onSubmit={handleFormSubmit}
          onClose={closeModal}
          noteToEdit={editingNote}
          formTitle={editingNote ? 'Edit Note' : 'Create a New Note'}
        />
      </Modal>
    </>
  );
};

export default NotesGrid;
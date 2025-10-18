import React, { useState, useEffect } from 'react';
import { type Note } from '../types';

interface NoteFormProps {
  noteToEdit?: Note | null;
  onSubmit: (note: Omit<Note, 'id'> | Note) => void;
  onClose: () => void;
  formTitle: string;
}

const NoteForm = ({ noteToEdit, onSubmit, onClose, formTitle }: NoteFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setDescription(noteToEdit.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [noteToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return; 

    if (noteToEdit) {
      onSubmit({ ...noteToEdit, title, description });
    } else {
      onSubmit({ title, description }); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        {formTitle}
      </h2>
      
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors"
        >
          {noteToEdit ? 'Save Changes' : 'Create Note'}
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
import { create } from 'zustand';

const getStoredNotes = () => {
  const stored = localStorage.getItem('notes');
  return stored ? JSON.parse(stored) : [];
};

const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

const useStore = create((set, get) => ({
  notes: getStoredNotes(),
  activeNotes: null,
  searchQuery: '',
  selectedTag: 'all',

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedTag: (tag) => set({ selectedTag: tag }),

  addNote: () => {
    const newNote = {
      id: Date.now(),
      title: 'Untitled',
      content: '',
      tags: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newNotes = [newNote, ...get().notes];
    saveNotes(newNotes);
    set({ notes: newNotes, activeNoteId: newNote.id });
  },

  deleteNote: (id) => {
    const newNotes = get().notes.filter((note) => note.id !== id);
    saveNotes(newNotes);
    set({
      notes: newNotes,
      activeNoteId: get().activeNoteId === id ? null : get().activeNoteId,
    });
  },

  updateNote: (id, updates) => {
    const newNotes = get().notes.map((note) =>
      note.id === id
        ? { ...note, ...updates, updatedAt: new Date().toISOString() }
        : note,
    );
    saveNotes(newNotes);
    set({ notes: newNotes });
  },

  setActiveNote: (id) => set({ activeNoteId: id }),

  addTag: (noteId, tag) => {
    const note = get().notes.find((n) => n.id === noteId);
    if (!note || note.tags.includes(tag)) return;
    get().updateNote(noteId, { tags: [...note.tags, tag] });
  },

  removeTag: (noteId, tag) => {
    const note = get().notes.find((n) => n.id === noteId);
    if (!note) return;
    get().updateNote(noteId, { tags: note.tags.filter((t) => t !== tag) });
  },

  getAllTags: () => {
    const tags = get().notes.flatMap((note) => note.tags);
    return [...new Set(tags)];
  },
}));

export default useStore;

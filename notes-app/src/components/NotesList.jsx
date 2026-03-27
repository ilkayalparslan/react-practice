import useStore from '../store';

function NotesList() {
  const notes = useStore((state) => state.notes);
  const activeNoteId = useStore((state) => state.activeNoteId);
  const searchQuery = useStore((state) => state.searchQuery);
  const selectedTag = useStore((state) => state.selectedTag);
  const setActiveNote = useStore((state) => state.setActiveNote);
  const addNote = useStore((state) => state.addNote);
  const deleteNote = useStore((state) => state.deleteNote);

  const filteredNotes = notes.filter((note) => {
    const matchedSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag === 'all' || note.tags.includes(selectedTag);
    return matchedSearch && matchesTag;
  });

  return (
    <div className='notes-sidebar'>
      <button className='new-note-btn' onClick={addNote}>
        + New Note
      </button>

      <div className='notes-list'>
        {filteredNotes.length === 0 ? (
          <p className='no-notes'>No Notes Found</p>
        ) : (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className={`note-item ${note.id === activeNoteId ? 'active' : ''}`}
              onClick={() => setActiveNote(note.id)}
            >
              <div className='note-item-header'>
                <h3 className='note-item-title'>{note.title || 'Untitled'}</h3>
                <button
                  className='note-delete-btn'
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNote(note.id);
                  }}
                >
                  X
                </button>
              </div>
              <p className='note-item-preview'>
                {note.content.slice(0, 60) || 'No Content'}
              </p>
              {note.tags.length > 0 && (
                <div className='note item-tags'>
                  {note.tags.map((tag) => (
                    <span key={tag} className='note-tag-small'>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default NotesList;

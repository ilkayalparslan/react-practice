import { useState } from 'react';
import { marked } from 'marked';
import useStore from '../store';

function NoteEditor() {
  const { notes, activeNoteId, updateNote, addTag, removeTag } = useStore();

  const [isPreview, setIsPreview] = useState(false);
  const [tagInput, setTagInput] = useState('');

  const activeNote = notes.find((n) => n.id === activeNoteId);

  if (!activeNote) {
    return (
      <div className='note-editor empty'>
        <p>Select a note or create a new one</p>
      </div>
    );
  }

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() === '') return;
    addTag(activeNote.id, tagInput.trim().toLowerCase());
    setTagInput('');
  };

  return (
    <div className='note-editor'>
      <div className='editor-header'>
        <input
          type='text'
          className='editor-title'
          value={activeNote.title}
          onChange={(e) => updateNote(activeNote.id, { title: e.target.value })}
          placeholder='Note Title...'
        />
        <button
          className={`preview-btn ${isPreview ? 'active' : ''}`}
          onClick={() => setIsPreview(!isPreview)}
        >
          {isPreview ? 'Edit' : 'Preview'}
        </button>
      </div>

      <div className='editor-tags'>
        {activeNote.tags.map((tag) => (
          <span key={tag} className='note-tag'>
            {tag}
            <button
              className='tag-remove'
              onClick={() => removeTag(activeNote.id, tag)}
            >
              X
            </button>
          </span>
        ))}

        <form className='tag-form' onSubmit={handleAddTag}>
          <input
            type='text'
            className='tag-input'
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder='Add tag...'
          />
        </form>
      </div>

      {isPreview ? (
        <div
          className='editor-preview'
          dangerouslySetInnerHTML={{ __html: marked(activeNote.content) }}
        ></div>
      ) : (
        <textarea
          className='editor-content'
          value={activeNote.content}
          onChange={(e) =>
            updateNote(activeNote.id, { content: e.target.value })
          }
          placeholder='Write your note in markdown...'
        />
      )}

      <p className='editor-date'>
        Last edited : {new Date(activeNote.updatedAt).toLocaleString()}
      </p>
    </div>
  );
}
export default NoteEditor;

import SearchAndFilter from './SearchAndFilter';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';

function NotesApp() {
  return (
    <div className='notes-container'>
      <div className='notes-left'>
        <h1 className='notes-title'>📝 Notes</h1>
        <SearchAndFilter />
        <NotesList />
      </div>
      <NoteEditor />
    </div>
  );
}
export default NotesApp;

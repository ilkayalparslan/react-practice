import SearchBar from './components/SearchBar';
import AddForm from './components/AddForm';
import ContactCard from './components/ContactCard';
import useStore from './store';

function App() {
  const contacts = useStore((state) => state.contacts);
  return (
    <div className='app'>
      <h1 className='app-title'>📇 Contact Manager</h1>
      {/* Search */}
      <SearchBar />
      {/* Add Form — toggle ile açılacak */}
      <AddForm />
      {/* Contact Count */}
      <p className='contact-count'>{contacts.length} Contacts</p>
      {/* Contact List */}
      <div className='contact-list'>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}
export default App;

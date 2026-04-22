import { useState } from 'react';
import useStore from '../store';

function ContactCard({ contact }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(contact.name);
  const [editEmail, setEditEmail] = useState(contact.email);
  const [editPhone, setEditPhone] = useState(contact.phone);
  const [editCompany, setEditCompany] = useState(contact.company);

  const deleteContact = useStore((state) => state.deleteContact);
  const updateContact = useStore((state) => state.updateContact);

  const initials = contact.name
    ? contact.name
        .split(' ')
        .map((w) => w[0])
        .join('')
        .toUpperCase()
    : '??';

  const handleSave = () => {
    updateContact(contact.id, {
      name: editName,
      email: editEmail,
      phone: editPhone,
      company: editCompany,
    });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className='contact-card editing'>
        <div className='contact-avatar'>{initials}</div>
        <div className='edit-form'>
          <input
            className='edit-input'
            type='text'
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            className='edit-input'
            type='email'
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
          />
          <input
            className='edit-input'
            type='tel'
            value={editPhone}
            onChange={(e) => setEditPhone(e.target.value)}
          />
          <input
            className='edit-input'
            type='text'
            value={editCompany}
            onChange={(e) => setEditCompany(e.target.value)}
          />
          <div className='form-actions'>
            <button className='cancel-btn' onClick={() => setIsEditing(false)}>
              Cancel
            </button>
            <button className='save-btn' onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='contact-card'>
      <div className='contact-avatar'>{initials}</div>
      <div className='contact-info'>
        <h3 className='contact-name'>{contact.name}</h3>
        <p className='contact-detail'>📧 {contact.email}</p>
        <p className='contact-detail'>📱 {contact.phone}</p>
        {contact.company && (
          <p className='contact-detail'>🏢 {contact.company}</p>
        )}
      </div>
      <div className='contact-actions'>
        <button className='edit-btn' onClick={() => setIsEditing(true)}>
          ✏️
        </button>
        <button
          className='delete-btn'
          onClick={() => deleteContact(contact.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
export default ContactCard;

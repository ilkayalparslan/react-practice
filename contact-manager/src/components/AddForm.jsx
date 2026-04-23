import { useState } from 'react';
import useStore from '../store';

function AddForm() {
  // 1. Her bir input için state (hafıza) oluşturuyoruz
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  // 2. Store'dan addContact fonksiyonunu çekiyoruz
  const addContact = useStore((state) => state.addContact);

  // 3. Save butonuna basıldığında çalışacak fonksiyon
  const handleSave = () => {
    // İsim girilmemişse boş kayıt atmasını engelleyelim
    if (!name.trim()) {
      alert('Lütfen en azından bir isim girin!');
      return;
    }

    // Inputlardaki verileri bir obje (paket) haline getiriyoruz
    const newContactData = {
      name,
      email,
      phone,
      company,
    };

    // Paketi store'daki fonksiyona gönderiyoruz
    addContact(newContactData);

    // Kayıt bittikten sonra input içlerini temizliyoruz
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
  };

  return (
    <div className='add-form'>
      <input
        type='text'
        className='form-input'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)} // Yazılanı state'e atar
      />
      <input
        type='text'
        className='form-input'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='text'
        className='form-input'
        placeholder='Phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type='text'
        className='form-input'
        placeholder='Company (optional)'
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <div className='form-actions'>
        <button className='cancel-btn'>Cancel</button>
        {/* Butona onClick eventini ekledik */}
        <button className='save-btn' onClick={handleSave}>
          Save Contact
        </button>
      </div>
    </div>
  );
}

export default AddForm;

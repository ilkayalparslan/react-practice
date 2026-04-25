import useStore from '../store';

function PersonalInfo() {
  const form = useStore((state) => state.form);
  const updateForm = useStore((state) => state.updateForm);
  const nextStep = useStore((state) => state.nextStep);

  return (
    <div className='form-card'>
      <h2 className='form-title'>Personal Information</h2>

      <div className='form-group'>
        <label className='form-label'>Full Name</label>
        <input
          type='text'
          className='form-input'
          placeholder='John Doe'
          value={form.name}
          onChange={(e) => updateForm('name', e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label className='form-label'>Email</label>
        <input
          type='email'
          className='form-input'
          placeholder='john@hotel.com'
          value={form.email}
          onChange={(e) => updateForm('email', e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label className='form-label'>Phone</label>
        <input
          type='tel'
          className='form-input'
          placeholder='+90 555 123 4567'
          value={form.phone}
          onChange={(e) => updateForm('phone', e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label className='form-label'>Position</label>
        <select
          className='form-input'
          value={form.position}
          onChange={(e) => updateForm('position', e.target.value)}
        >
          <option value=''>Select position</option>
          <option value='owner'>Owner</option>
          <option value='manager'>General Manager</option>
          <option value='sales'>Sales Manager</option>
          <option value='other'>Other</option>
        </select>
      </div>

      <div className='form-actions'>
        <div />
        <button className='next-btn' onClick={nextStep}>
          Next →
        </button>
      </div>
    </div>
  );
}
export default PersonalInfo;

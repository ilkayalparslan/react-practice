import { useState } from 'react';
import useStore from '../store';

function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const workDuration = useStore((state) => state.workDuration);
  const breakDuration = useStore((state) => state.breakDuration);
  const longBreakDuration = useStore((state) => state.longBreakDuration);
  const updateSetting = useStore((state) => state.updateSetting);

  const [work, setWork] = useState(workDuration);
  const [brk, setBrk] = useState(breakDuration);
  const [longBrk, setLongBrk] = useState(longBreakDuration);

  const handleSave = () => {
    updateSetting({
      workDuration: Number(work),
      breakDuration: Number(brk),
      longBreakDuration: Number(longBrk),
    });
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button className='settings-toggle' onClick={() => setIsOpen(true)}>
        ⚙️ Settings
      </button>
    );
  }

  return (
    <div className='settings-panel'>
      <h3 className='settings-title'>Settings</h3>

      <div className='settings-row'>
        <label className='settings-label'>Focus (min)</label>
        <input
          type='number'
          className='settings-input'
          value={work}
          onChange={(e) => setWork(e.target.value)}
          min='1'
          max='60'
        />
      </div>

      <div className='settings-row'>
        <label className='settings-label'>Short Break (min)</label>
        <input
          className='settings-input'
          type='number'
          value={brk}
          onChange={(e) => setBrk(e.target.value)}
          min='1'
          max='30'
        />
      </div>

      <div className='settings-row'>
        <label className='settings-label'>Long Break (min)</label>
        <input
          className='settings-input'
          type='number'
          value={longBrk}
          onChange={(e) => setLongBrk(e.target.value)}
          min='1'
          max='60'
        />
      </div>

      <div className='settings-actions'>
        <button className='settings-btn' onClick={() => setIsOpen(false)}>
          Cancel
        </button>
        <button className='settings-btn save' onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
export default Settings;

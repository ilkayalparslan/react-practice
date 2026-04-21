import TaskCard from './TaskCard';
import useStore from '../store';
import { useState } from 'react';

function Column({ columnId }) {
  const column = useStore((state) => state.columns[columnId]);
  const addTask = useStore((state) => state.addTask);
  const moveTask = useStore((state) => state.moveTask);

  const [input, setInput] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  // Enter'a basınca task ekle
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      addTask(columnId, input.trim());
      setInput('');
    }
  };

  // Sürüklenen kart bu kolonun üzerine gelince
  // preventDefault şart — yoksa drop çalışmaz
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  // Kart kolondan ayrılınca highlight kaldır
  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  // Kart bu kolona bırakılınca
  const handleDrop = () => {
    moveTask(columnId);
    setIsDragOver(false);
  };

  return (
    <div
      className={`column ${isDragOver ? 'drag-over' : ''} ${columnId === 'done' ? 'done-column' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className='column-header'>
        <h2 className='column-title'>{column.title}</h2>
        <span className='column-count'>{column.tasks.length}</span>
      </div>
      {column.tasks.map((task) => (
        <TaskCard key={task.id} task={task} columnId={columnId} />
      ))}
      <input
        className='add-input'
        type='text'
        placeholder='+ Add a task...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
export default Column;

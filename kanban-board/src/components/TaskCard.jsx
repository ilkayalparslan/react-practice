import useStore from '../store';

function TaskCard({ task, columnId }) {
  const deleteTask = useStore((state) => state.deleteTask);
  const setDraggedTask = useStore((state) => state.setDraggedTask);
  const clearDraggedTask = useStore((state) => state.clearDraggedTask);

  // Sürükleme başladığında çağrılır
  // "Bu taskı, bu kolondan sürüklüyorum" bilgisini store'a yaz

  const handleDragStart = () => {
    setDraggedTask(task, columnId);
  };

  // Sürükleme bittiğinde çağrılır (drop olmasa bile)

  const handleDragEnd = () => {
    clearDraggedTask();
  };
  return (
    <div
      className='card'
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p className='card-text'>{task.text}</p>
      <button
        className='card-delete'
        onClick={() => deleteTask(columnId, task.id)}
      >
        X
      </button>
    </div>
  );
}
export default TaskCard;

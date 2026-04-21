import Column from './components/Column';

function App() {
  return (
    <div className='app'>
      <h1 className='board-title'>📋 Kanban Board</h1>
      <div className='board'>
        <Column columnId='todo' />
        <Column columnId='inProgress' />
        <Column columnId='done' />
      </div>
    </div>
  );
}
export default App;

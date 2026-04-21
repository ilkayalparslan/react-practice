import { create } from 'zustand';

const useStore = create((set, get) => ({
  // --- DATA ---
  // Her kolon bir obje: id, title ve tasks array'i var
  // tasks içindeki her task'ın bir id ve text'i var
  // id lazım çünkü drag & drop'ta "hangi task" bilmemiz gerek

  columns: {
    todo: {
      title: '📝 Todo',
      tasks: [
        { id: 1, text: 'Design landing page' },
        { id: 2, text: 'Set up database' },
        { id: 3, text: 'Write API docs' },
      ],
    },
    inProgress: {
      title: '🔄 In Progress',
      tasks: [
        { id: 4, text: 'Build login form' },
        { id: 5, text: 'Create User Dashboard' },
      ],
    },
    done: {
      title: '✅ Done',
      tasks: [{ id: 6, text: 'Project setup' }],
    },
  },

  // Sürüklenen kartın bilgisi — drag başlayınca dolar, bırakınca null olur
  draggedTask: null,

  // --- ADD TASK ---
  // Hangi kolona eklenecek (columnId) ve ne yazıyor (text)
  // Date.now() ile unique id üretiyoruz — todo-list'te de böyle yaptık

  addTask: (columnId, text) =>
    set((state) => ({
      columns: {
        ...state.columns,
        [columnId]: {
          ...state.columns[columnId],
          tasks: [...state.columns[columnId].tasks, { id: Date.now(), text }],
        },
      },
    })),

  // --- DELETE TASK ---
  // Hangi kolondan (columnId) hangi task silinecek (taskId)
  // filter ile id eşleşmeyenleri tutuyoruz — bildğin pattern

  deleteTask: (columnId, taskId) =>
    set((state) => ({
      columns: {
        ...state.columns,
        [columnId]: {
          ...state.columns[columnId],
          tasks: state.columns[columnId].tasks.filter((t) => t.id !== taskId),
        },
      },
    })),

  // --- DRAG START ---
  // Kullanıcı kartı tuttu — hangi task ve hangi kolondan bilgisini kaydet

  setDraggedTask: (task, fromColumnId) =>
    set({ draggedTask: { task, fromColumnId } }),

  // --- DROP (sürükle bırak) ---
  // Kullanıcı kartı yeni kolona bıraktı
  // 1. Eski kolondan sil
  // 2. Yeni kolona ekle
  // 3. draggedTask'ı temizle

  moveTask: (toColumnId) => {
    const { draggedTask, columns } = get();
    if (!draggedTask) return;
    if (draggedTask.fromColumnId === toColumnId) {
      set({ draggedTask: null });
      return;
    }

    const { task, fromColumnId } = draggedTask;

    set({
      columns: {
        ...columns,
        // Eski kolondan sil
        [fromColumnId]: {
          ...columns[fromColumnId],
          tasks: columns[fromColumnId].tasks.filter((t) => t.id !== task.id),
        },
        // Yeni kolona ekle
        [toColumnId]: {
          ...columns[toColumnId],
          tasks: [...columns[toColumnId].tasks, task],
        },
      },
      draggedTask: null,
    });
  },

  // Drag iptal — kartı bırakmadan geri gelirse
  clearDraggedTask: () => set({ draggedTask: null }),
}));

export default useStore;

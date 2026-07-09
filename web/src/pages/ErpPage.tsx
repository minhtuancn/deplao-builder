import { useEffect, useState, useCallback } from 'react';
import { api } from '../lib/api';
import { toast } from '../store/toastStore';
import { useSocketRefresh } from '../lib/useSocket';
import ConfirmDialog, { type ConfirmDialogOptions } from '../components/ConfirmDialog';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
}

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
}

export default function ErpPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [newTask, setNewTask] = useState('');
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [activeTab, setActiveTab] = useState<'tasks' | 'notes'>('tasks');

  // Confirm dialog state
  const [confirm, setConfirm] = useState<{ open: boolean; options: ConfirmDialogOptions; onConfirm: () => void }>({
    open: false,
    options: { title: '', message: '' },
    onConfirm: () => {},
  });

  const ZALO_ID = 'default';

  const fetchData = async () => {
    const [t, n] = await Promise.all([
      api.get(`/erp/tasks?zaloId=${ZALO_ID}`),
      api.get(`/erp/notes?zaloId=${ZALO_ID}`),
    ]);
    setTasks(t.tasks || []);
    setNotes(n.notes || []);
  };

  useEffect(() => { fetchData(); }, []);

  // Auto-refresh on broadcast events
  useSocketRefresh('crm:noteChanged', useCallback(() => fetchData(), []));
  useSocketRefresh('crm:campaignChanged', useCallback(() => fetchData(), []));

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    try {
      await api.post('/erp/task', { zaloId: ZALO_ID, title: newTask.trim() });
      setNewTask('');
      toast.success('Thêm công việc thành công');
      await fetchData();
    } catch (err: any) {
      toast.error(err.message || 'Lỗi thêm công việc');
    }
  };

  const toggleTask = async (id: string, completed: boolean) => {
    try {
      await api.put(`/erp/task/${id}`, { zaloId: ZALO_ID, completed: !completed });
      toast.success(completed ? 'Đã đánh dấu chưa hoàn thành' : 'Đã hoàn thành công việc');
      await fetchData();
    } catch (err: any) {
      toast.error(err.message || 'Lỗi cập nhật');
    }
  };

  const doDeleteTask = async (id: string) => {
    try {
      await api.del(`/erp/task/${id}?zaloId=${ZALO_ID}`);
      toast.success('Đã xóa công việc');
      await fetchData();
    } catch (err: any) {
      toast.error(err.message || 'Lỗi xóa');
    }
  };

  const promptDeleteTask = (id: string, title: string) => {
    setConfirm({
      open: true,
      options: {
        title: 'Xóa công việc',
        message: `Bạn có chắc chắn muốn xóa công việc "${title}"?`,
        confirmLabel: 'Xóa',
        cancelLabel: 'Huỷ',
        variant: 'danger',
      },
      onConfirm: () => {
        setConfirm((c) => ({ ...c, open: false }));
        doDeleteTask(id);
      },
    });
  };

  const addNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteTitle.trim()) return;
    try {
      await api.post('/erp/note', { zaloId: ZALO_ID, title: noteTitle.trim(), content: noteContent.trim() });
      setNoteTitle('');
      setNoteContent('');
      setShowNoteForm(false);
      toast.success('Thêm ghi chú thành công');
      await fetchData();
    } catch (err: any) {
      toast.error(err.message || 'Lỗi thêm ghi chú');
    }
  };

  const doDeleteNote = async (id: string) => {
    try {
      await api.del(`/erp/note/${id}?zaloId=${ZALO_ID}`);
      toast.success('Đã xóa ghi chú');
      await fetchData();
    } catch (err: any) {
      toast.error(err.message || 'Lỗi xóa');
    }
  };

  const promptDeleteNote = (id: string, title: string) => {
    setConfirm({
      open: true,
      options: {
        title: 'Xóa ghi chú',
        message: `Bạn có chắc chắn muốn xóa ghi chú "${title}"?`,
        confirmLabel: 'Xóa',
        cancelLabel: 'Huỷ',
        variant: 'danger',
      },
      onConfirm: () => {
        setConfirm((c) => ({ ...c, open: false }));
        doDeleteNote(id);
      },
    });
  };

  return (
    <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">📋 ERP</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('tasks')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'tasks' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            ✅ Công việc ({tasks.length})
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'notes' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            📝 Ghi chú ({notes.length})
          </button>
        </div>

        {activeTab === 'tasks' && (
          <>
            {/* Add task */}
            <form onSubmit={addTask} className="flex gap-3 mb-4">
              <input
                className="flex-1 p-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                placeholder="Thêm công việc mới..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm transition"
              >
                + Thêm
              </button>
            </form>

            {/* Task list */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 divide-y divide-gray-700">
              {tasks.length === 0 ? (
                <p className="p-6 text-gray-500 text-center">Chưa có công việc</p>
              ) : (
                tasks.map((t) => (
                  <div key={t.id} className="flex items-center justify-between p-3 hover:bg-gray-700/50 transition">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={t.completed}
                        onChange={() => toggleTask(t.id, t.completed)}
                        className="w-4 h-4 rounded accent-blue-500"
                      />
                      <span className={t.completed ? 'line-through text-gray-500' : ''}>{t.title}</span>
                      {t.dueDate && <span className="text-xs text-gray-500 ml-2">📅 {new Date(t.dueDate).toLocaleDateString('vi-VN')}</span>}
                    </div>
                    <button
                      onClick={() => promptDeleteTask(t.id, t.title)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Xóa
                    </button>
                  </div>
                ))
              )}
            </div>
          </>
        )}

        {activeTab === 'notes' && (
          <>
            <button
              onClick={() => setShowNoteForm(!showNoteForm)}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition mb-4"
            >
              {showNoteForm ? '✕ Đóng' : '+ Thêm ghi chú'}
            </button>

            {showNoteForm && (
              <form onSubmit={addNote} className="bg-gray-800 p-4 rounded-xl border border-gray-700 mb-4 space-y-3">
                <input
                  className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                  placeholder="Tiêu đề..."
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                  autoFocus
                />
                <textarea
                  className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none resize-none"
                  placeholder="Nội dung..."
                  rows={3}
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                />
                <button type="submit" className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg text-sm transition">
                  Lưu
                </button>
              </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {notes.length === 0 ? (
                <p className="text-gray-500 col-span-full text-center py-6">Chưa có ghi chú</p>
              ) : (
                notes.map((n) => (
                  <div key={n.id} className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{n.title}</h3>
                      <button onClick={() => promptDeleteNote(n.id, n.title)} className="text-red-400 hover:text-red-300 text-xs">Xóa</button>
                    </div>
                    <p className="text-sm text-gray-300 whitespace-pre-wrap">{n.content}</p>
                    {n.createdAt && (
                      <p className="text-xs text-gray-500 mt-2">{new Date(n.createdAt).toLocaleDateString('vi-VN')}</p>
                    )}
                  </div>
                ))
              )}
            </div>
          </>
        )}
        <ConfirmDialog
          open={confirm.open}
          options={confirm.options}
          onConfirm={confirm.onConfirm}
          onCancel={() => setConfirm((c) => ({ ...c, open: false }))}
        />
      </main>
  );
}

import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import Nav from '../components/Nav';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface Note {
  id: string;
  title: string;
  content: string;
}

export default function ErpPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    api.get('/erp/tasks?zaloId=default').then((d) => setTasks(d.tasks || []));
    api.get('/erp/notes?zaloId=default').then((d) => setNotes(d.notes || []));
  }, []);

  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-4">ERP</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="font-semibold mb-2">Tasks</h2>
            <ul className="space-y-2">
              {tasks.map((t) => (
                <li key={t.id} className="p-2 bg-gray-700 rounded flex justify-between">
                  <span>{t.title}</span>
                  <span className={t.completed ? 'text-green-400' : 'text-yellow-400'}>
                    {t.completed ? 'Done' : 'Pending'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="font-semibold mb-2">Notes</h2>
            <ul className="space-y-2">
              {notes.map((n) => (
                <li key={n.id} className="p-2 bg-gray-700 rounded">
                  <p className="font-medium">{n.title}</p>
                  <p className="text-sm text-gray-300">{n.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
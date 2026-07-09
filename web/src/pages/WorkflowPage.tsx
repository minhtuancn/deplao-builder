import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import Nav from '../components/Nav';

interface Workflow {
  id: string;
  name: string;
  description?: string;
  active: boolean;
}

interface LogEntry {
  timestamp?: string;
  message?: string;
  event?: string;
}

export default function WorkflowPage() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    api.get('/workflow/list?zaloId=default').then((d) => setWorkflows(d.workflows || []));
    api.get('/workflow/logs?zaloId=default&limit=10').then((d) => setLogs(d.logs || []));
  }, []);

  const toggle = async (id: string) => {
    await api.post('/workflow/toggle', { zaloId: 'default', workflowId: id });
    const d = await api.get('/workflow/list?zaloId=default');
    setWorkflows(d.workflows || []);
  };

  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Workflow</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="font-semibold mb-2">Workflows</h2>
            <ul className="space-y-2">
              {workflows.map((w) => (
                <li key={w.id} className="p-2 bg-gray-700 rounded flex justify-between items-center">
                  <div>
                    <p className="font-medium">{w.name}</p>
                    <p className="text-xs text-gray-400">{w.description}</p>
                  </div>
                  <button
                    onClick={() => toggle(w.id)}
                    className={`px-3 py-1 rounded text-sm ${
                      w.active ? 'bg-green-600' : 'bg-gray-500'
                    }`}
                  >
                    {w.active ? 'ON' : 'OFF'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="font-semibold mb-2">Recent Logs</h2>
            <ul className="space-y-1 text-sm">
              {logs.map((l, i) => (
                <li key={i} className="p-1 border-b border-gray-700">
                  <span className="text-gray-400">[{l.timestamp || ''}]</span>{' '}
                  {l.message || l.event || ''}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
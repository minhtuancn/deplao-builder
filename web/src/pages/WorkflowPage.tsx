import { useEffect, useState, useCallback } from 'react';
import { api } from '../lib/api';
import { toast } from '../store/toastStore';
import { useSocketRefresh } from '../lib/useSocket';
import ConfirmDialog, { type ConfirmDialogOptions } from '../components/ConfirmDialog';

interface Workflow {
  id: string;
  name: string;
  description?: string;
  active: boolean;
  createdAt?: string;
}

interface LogEntry {
  timestamp?: string;
  message?: string;
  event?: string;
  level?: string;
}

interface Template {
  id: string;
  name: string;
  description: string;
}

export default function WorkflowPage() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [showNewForm, setShowNewForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [saving, setSaving] = useState(false);

  // Confirm dialog state
  const [confirm, setConfirm] = useState<{ open: boolean; options: ConfirmDialogOptions; onConfirm: () => void }>({
    open: false,
    options: { title: '', message: '' },
    onConfirm: () => {},
  });

  const ZALO_ID = 'default';

  const fetchData = async () => {
    const [w, l, t] = await Promise.all([
      api.get(`/workflow/list?zaloId=${ZALO_ID}`),
      api.get(`/workflow/logs?zaloId=${ZALO_ID}&limit=20`),
      api.get(`/workflow/templates?zaloId=${ZALO_ID}`).catch(() => ({ templates: [] })),
    ]);
    setWorkflows(w.workflows || []);
    setLogs(l.logs || []);
    setTemplates(t.templates || []);
  };

  useEffect(() => { fetchData(); }, []);

  // Auto-refresh on broadcast events
  useSocketRefresh('workflow:executed', useCallback(() => fetchData(), []));
  useSocketRefresh('workflow:statusChanged', useCallback(() => fetchData(), []));
  useSocketRefresh('crm:campaignChanged', useCallback(() => fetchData(), []));

  const toggle = async (id: string) => {
    try {
      const wf = workflows.find((w) => w.id === id);
      await api.post('/workflow/toggle', { zaloId: ZALO_ID, workflowId: id });
      toast.success(wf?.active ? 'Đã tắt workflow' : 'Đã bật workflow');
      await fetchData();
    } catch (err: any) {
      toast.error(err.message || 'Lỗi chuyển trạng thái');
    }
  };

  const runWorkflow = async (id: string) => {
    try {
      await api.post('/workflow/run', { zaloId: ZALO_ID, workflowId: id });
      toast.success('Đã chạy workflow');
      await fetchData();
    } catch (err: any) {
      toast.error(err.message || 'Lỗi chạy workflow');
    }
  };

  const doDeleteWorkflow = async (id: string) => {
    try {
      await api.del(`/workflow/${id}?zaloId=${ZALO_ID}`);
      toast.success('Đã xóa workflow');
      await fetchData();
    } catch (err: any) {
      toast.error(err.message || 'Lỗi xóa workflow');
    }
  };

  const promptDelete = (id: string, name: string) => {
    setConfirm({
      open: true,
      options: {
        title: 'Xóa workflow',
        message: `Bạn có chắc chắn muốn xóa workflow "${name}"?`,
        confirmLabel: 'Xóa',
        cancelLabel: 'Huỷ',
        variant: 'danger',
      },
      onConfirm: () => {
        setConfirm((c) => ({ ...c, open: false }));
        doDeleteWorkflow(id);
      },
    });
  };

  const createWorkflow = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    setSaving(true);
    try {
      await api.post('/workflow/save', {
        zaloId: ZALO_ID,
        workflow: { name: newName.trim(), description: '', nodes: [], edges: [] },
        templateId: selectedTemplate || undefined,
      });
      setNewName('');
      setSelectedTemplate('');
      setShowNewForm(false);
      toast.success('Tạo workflow thành công');
      await fetchData();
    } catch (err: any) {
      toast.error(err.message || 'Lỗi tạo workflow');
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">⚡ Workflow</h1>
          <button
            onClick={() => { setShowNewForm(!showNewForm); }}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            {showNewForm ? '✕ Đóng' : '+ Tạo workflow'}
          </button>
        </div>

        {/* Create form */}
        {showNewForm && (
          <form onSubmit={createWorkflow} className="bg-gray-800 p-4 rounded-xl border border-gray-700 mb-6 space-y-3">
            <input
              className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
              placeholder="Tên workflow..."
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              autoFocus
              disabled={saving}
            />
            {templates.length > 0 && (
              <select
                className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600"
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
              >
                <option value="">Không dùng template</option>
                {templates.map((t) => (
                  <option key={t.id} value={t.id}>{t.name} — {t.description}</option>
                ))}
              </select>
            )}
            <button
              type="submit"
              disabled={saving}
              className="bg-green-600 hover:bg-green-500 disabled:bg-gray-600 px-4 py-2 rounded-lg text-sm transition"
            >
              {saving ? '⏳ Đang tạo...' : 'Tạo workflow'}
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Workflows */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700 font-semibold">Workflows</div>
            {workflows.length === 0 ? (
              <p className="p-6 text-gray-500 text-center">Chưa có workflow nào</p>
            ) : (
              <div className="divide-y divide-gray-700">
                {workflows.map((w) => (
                  <div key={w.id} className="p-4 hover:bg-gray-700/50 transition">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span className="font-medium">{w.name}</span>
                        {w.description && <p className="text-xs text-gray-400 mt-0.5">{w.description}</p>}
                      </div>
                      <button
                        onClick={() => toggle(w.id)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                          w.active ? 'bg-green-700 text-green-200' : 'bg-gray-600 text-gray-300'
                        }`}
                      >
                        {w.active ? 'BẬT' : 'TẮT'}
                      </button>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => runWorkflow(w.id)}
                        className="text-xs px-2 py-1 rounded bg-blue-700 hover:bg-blue-600 transition"
                      >
                        ▶ Chạy
                      </button>
                      <button
                        onClick={() => promptDelete(w.id, w.name)}
                        className="text-xs px-2 py-1 rounded bg-red-800 hover:bg-red-700 transition"
                      >
                        Xóa
                      </button>
                    </div>
                    {w.createdAt && (
                      <p className="text-xs text-gray-500 mt-2">Tạo: {new Date(w.createdAt).toLocaleDateString('vi-VN')}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Logs */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700 font-semibold">📜 Nhật ký gần đây</div>
            {logs.length === 0 ? (
              <p className="p-6 text-gray-500 text-center">Chưa có nhật ký</p>
            ) : (
              <div className="divide-y divide-gray-700 max-h-96 overflow-y-auto">
                {logs.map((l, i) => (
                  <div key={i} className="p-3 text-sm hover:bg-gray-700/50 transition">
                    <span className={`text-xs font-mono ${
                      l.level === 'error' ? 'text-red-400' : l.level === 'warn' ? 'text-yellow-400' : 'text-gray-500'
                    }`}>
                      [{l.timestamp ? new Date(l.timestamp).toLocaleTimeString('vi-VN') : ''}]
                    </span>{' '}
                    <span className={
                      l.level === 'error' ? 'text-red-300' : l.level === 'warn' ? 'text-yellow-300' : ''
                    }>
                      {l.message || l.event || ''}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <ConfirmDialog
          open={confirm.open}
          options={confirm.options}
          onConfirm={confirm.onConfirm}
          onCancel={() => setConfirm((c) => ({ ...c, open: false }))}
        />
      </main>
  );
}

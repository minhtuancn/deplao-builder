import { useToastStore, type ToastType } from '../store/toastStore';

const typeStyles: Record<ToastType, string> = {
  success: 'bg-green-800 border-green-600 text-green-100',
  error: 'bg-red-800 border-red-600 text-red-100',
  info: 'bg-blue-800 border-blue-600 text-blue-100',
  warning: 'bg-yellow-800 border-yellow-600 text-yellow-100',
};

const typeIcons: Record<ToastType, string> = {
  success: '✓',
  error: '✗',
  info: 'ℹ',
  warning: '⚠',
};

export default function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts);
  const removeToast = useToastStore((s) => s.removeToast);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 max-w-sm">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`flex items-start gap-3 px-4 py-3 rounded-lg border shadow-lg animate-in slide-in-from-right ${
            typeStyles[t.type]
          }`}
          style={{
            animation: 'slideIn 0.3s ease-out',
          }}
        >
          <span className="text-lg leading-none mt-0.5">{typeIcons[t.type]}</span>
          <p className="flex-1 text-sm leading-snug">{t.message}</p>
          <button
            onClick={() => removeToast(t.id)}
            className="text-current opacity-60 hover:opacity-100 text-lg leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      ))}

      {/* Slide-in animation */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

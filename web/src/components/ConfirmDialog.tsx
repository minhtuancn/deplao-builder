import { useEffect, useRef, useState } from 'react';

export interface ConfirmDialogOptions {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'warning' | 'info';
}

interface Props {
  open: boolean;
  options: ConfirmDialogOptions;
  onConfirm: () => void;
  onCancel: () => void;
}

const variantStyles = {
  danger: {
    button: 'bg-red-700 hover:bg-red-600',
    icon: 'text-red-400',
  },
  warning: {
    button: 'bg-yellow-700 hover:bg-yellow-600',
    icon: 'text-yellow-400',
  },
  info: {
    button: 'bg-blue-700 hover:bg-blue-600',
    icon: 'text-blue-400',
  },
};

export default function ConfirmDialog({ open, options, onConfirm, onCancel }: Props) {
  const [visible, setVisible] = useState(open);
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setVisible(open);
    if (open) {
      // Focus confirm button after animation
      setTimeout(() => confirmRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
      if (e.key === 'Enter') onConfirm();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onConfirm, onCancel]);

  if (!visible) return null;

  const vs = variantStyles[options.variant || 'danger'];

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/60"
      onClick={onCancel}
    >
      <div
        className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold text-white mb-2">{options.title}</h3>
        <p className="text-sm text-gray-300 mb-6 leading-relaxed">{options.message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition"
          >
            {options.cancelLabel || 'Huỷ'}
          </button>
          <button
            ref={confirmRef}
            onClick={onConfirm}
            className={`px-4 py-2 rounded-lg text-sm font-medium text-white transition ${vs.button}`}
          >
            {options.confirmLabel || 'Xác nhận'}
          </button>
        </div>
      </div>
    </div>
  );
}

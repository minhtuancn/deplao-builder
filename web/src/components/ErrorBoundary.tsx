import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('[ErrorBoundary] Caught:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-8">
          <div className="max-w-lg text-center">
            <h1 className="text-3xl font-bold mb-4">Đã xảy ra lỗi</h1>
            <p className="text-gray-400 mb-6">
              Ứng dụng gặp sự cố không mong muốn. Vui lòng thử tải lại trang.
            </p>
            <details className="text-left bg-gray-800 rounded p-4 mb-6">
              <summary className="cursor-pointer text-sm text-gray-400 hover:text-white">
                Chi tiết lỗi
              </summary>
              <pre className="mt-2 text-xs text-red-300 overflow-auto whitespace-pre-wrap">
                {this.state.error?.message}
                {'\n'}
                {this.state.error?.stack}
              </pre>
            </details>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Tải lại trang
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-gray-600 mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-2">Trang không tìm thấy</p>
        <p className="text-sm text-gray-500 mb-8">
          Đường dẫn bạn yêu cầu không tồn tại hoặc đã bị di chuyển.
        </p>
        <Link
          to="/dashboard"
          className="inline-block px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Quay về Dashboard
        </Link>
      </div>
    </div>
  );
}

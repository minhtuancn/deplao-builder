import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import Nav from '../components/Nav';

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    api.get('/analytics/dashboard?zaloId=default').then(setData);
  }, []);
  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Tin nhắn', value: data?.totalMessages ?? '-', color: 'bg-blue-600' },
            { label: 'Đã gửi', value: data?.totalSent ?? '-', color: 'bg-green-600' },
            { label: 'Liên hệ', value: data?.totalContacts ?? '-', color: 'bg-purple-600' },
            { label: 'Bạn bè', value: data?.totalFriends ?? '-', color: 'bg-orange-600' },
          ].map((card) => (
            <div key={card.label} className={`${card.color} p-6 rounded-lg`}>
              <div className="text-3xl font-bold">{card.value}</div>
              <div className="text-sm mt-1 opacity-80">{card.label}</div>
            </div>
          ))}
        </div>
        <pre className="mt-6 bg-gray-800 p-4 rounded text-xs overflow-auto max-h-64">{JSON.stringify(data, null, 2)}</pre>
      </main>
    </div>
  );
}
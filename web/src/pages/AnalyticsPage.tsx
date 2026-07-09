import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import Nav from '../components/Nav';

export default function AnalyticsPage() {
  const [summary, setSummary] = useState<any>(null);
  const [volume, setVolume] = useState([]);

  useEffect(() => {
    api.get('/analytics/dashboard?zaloId=default').then(setSummary);
    api.get('/analytics/message-volume?zaloId=default&days=7').then((d) => setVolume(d.data || []));
  }, []);

  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {summary && (
            <div className="bg-gray-800 p-4 rounded">
              <h2 className="font-semibold mb-2">Dashboard Summary</h2>
              <pre className="text-xs">{JSON.stringify(summary, null, 2)}</pre>
            </div>
          )}
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="font-semibold mb-2">Message Volume (7 days)</h2>
            <ul className="space-y-1 text-sm">
              {volume.map((v: any, i: number) => (
                <li key={i} className="flex justify-between p-1 border-b border-gray-700">
                  <span>{v.date || v.day || `Day ${i + 1}`}</span>
                  <span className="text-blue-400">{(v.count ?? v.messages ?? 0).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
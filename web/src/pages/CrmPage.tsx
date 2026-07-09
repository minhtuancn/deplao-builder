import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import Nav from '../components/Nav';

interface Campaign {
  id: string;
  name: string;
  status: string;
}

export default function CrmPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    api.get('/crm/campaigns?zaloId=default').then((d) => setCampaigns(d.campaigns || []));
    api.get('/crm/stats?zaloId=default').then(setStats);
  }, []);

  return (
    <div className="flex">
      <Nav />
      <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-4">CRM</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="font-semibold mb-2">Campaigns</h2>
            <ul className="space-y-2">
              {campaigns.map((c) => (
                <li key={c.id} className="p-2 bg-gray-700 rounded">
                  <div className="flex justify-between">
                    <span>{c.name}</span>
                    <span className="text-sm">{c.status}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {stats && (
            <div className="bg-gray-800 p-4 rounded">
              <h2 className="font-semibold mb-2">Stats</h2>
              <pre className="text-xs">{JSON.stringify(stats, null, 2)}</pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
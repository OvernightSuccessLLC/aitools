import { useState, useEffect } from "react";
import { UpsellBanner } from "../components/UpsellBanner";

interface EmailEntry {
  id: number;
  email: string;
  timestamp: string;
}

export default function AdminDashboard() {
  const [emails, setEmails] = useState<EmailEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await fetch("/api/admin/emails");
      if (response.ok) {
        const data = await response.json();
        setEmails(data);
      } else {
        setError("Failed to fetch emails");
      }
    } catch (err) {
      setError("Error fetching emails");
    } finally {
      setIsLoading(false);
    }
  };

  const exportEmails = () => {
    const csvContent = [
      ["Email", "Timestamp"],
      ...emails.map((entry) => [entry.email, entry.timestamp]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `email-captures-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const clearEmails = async () => {
    if (
      window.confirm("Are you sure you want to delete all captured emails?")
    ) {
      try {
        const response = await fetch("/api/admin/emails", {
          method: "DELETE",
        });
        if (response.ok) {
          setEmails([]);
        }
      } catch (err) {
        setError("Error clearing emails");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Manage captured email addresses</p>
        </div>
      </div>

      <UpsellBanner style={{ backgroundColor: '#f3f4f6' }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Captured Emails ({emails.length})
              </h2>
              <p className="text-gray-600 text-sm">
                Total email addresses captured from landing page
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={exportEmails}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                disabled={emails.length === 0}
              >
                Export CSV
              </button>
              <button
                onClick={clearEmails}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                disabled={emails.length === 0}
              >
                Clear All
              </button>
            </div>
          </div>

          {emails.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <div className="text-gray-400 text-6xl mb-4">📧</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No emails captured yet
              </h3>
              <p className="text-gray-600">
                Email addresses will appear here as users sign up through the
                landing page.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Captured At
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {emails.map((entry) => (
                    <tr key={entry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {entry.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(entry.timestamp).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">
                {emails.length}
              </div>
              <div className="text-sm text-blue-800">Total Captures</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">
                {
                  emails.filter((e) => {
                    const today = new Date();
                    const emailDate = new Date(e.timestamp);
                    return emailDate.toDateString() === today.toDateString();
                  }).length
                }
              </div>
              <div className="text-sm text-green-800">Today</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">
                {
                  emails.filter((e) => {
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    return new Date(e.timestamp) > weekAgo;
                  }).length
                }
              </div>
              <div className="text-sm text-purple-800">This Week</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

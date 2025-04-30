"use client";

import { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';

interface Subscriber {
  email: string;
  created_at: string;
}

export default function NewsletterSubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteStatus, setDeleteStatus] = useState<{
    email: string;
    status: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({ email: '', status: 'idle' });

  // Fetch subscribers on component mount
  useEffect(() => {
    async function fetchSubscribers() {
      try {
        // Using server-side function directly in Next.js
        const response = await fetch('/api/admin/newsletter');
        
        if (!response.ok) {
          throw new Error('Kon abonnees niet ophalen');
        }
        
        const data = await response.json();
        setSubscribers(data.subscribers);
      } catch (err) {
        console.error('Fout bij het ophalen van abonnees:', err);
        setError('Kon abonnees niet laden');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchSubscribers();
  }, []);

  // Handle subscriber deletion
  const handleDelete = async (email: string) => {
    if (confirm(`Weet je zeker dat je ${email} wilt verwijderen van de nieuwsbrief?`)) {
      setDeleteStatus({ email, status: 'loading' });
      
      try {
        const response = await fetch(`/api/newsletter?email=${encodeURIComponent(email)}`, {
          method: 'DELETE',
        });

        const data = await response.json();
        
        if (response.ok && data.success) {
          // Remove from UI
          setSubscribers(current => current.filter(sub => sub.email !== email));
          setDeleteStatus({ email, status: 'success' });
          
          // Reset status after 2 seconds
          setTimeout(() => {
            setDeleteStatus({ email: '', status: 'idle' });
          }, 2000);
        } else {
          setDeleteStatus({ 
            email, 
            status: 'error', 
            message: data.message || 'Kon abonnee niet verwijderen' 
          });
        }
      } catch (err) {
        console.error('Fout bij het verwijderen van abonnee:', err);
        setDeleteStatus({ 
          email, 
          status: 'error', 
          message: 'Er is een fout opgetreden tijdens het verwijderen' 
        });
      }
    }
  };

  if (isLoading) {
    return <div className="container py-12 text-center">Abonnees laden...</div>;
  }

  if (error) {
    return (
      <div className="container py-12">
        <div className="bg-red-50 p-4 rounded border border-red-200">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Nieuwsbrief Abonnees</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-medium mb-4">Totaal Aantal Abonnees: {subscribers.length}</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  E-mailadres
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aangemeld Op
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acties
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subscribers.length > 0 ? (
                subscribers.map((subscriber, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {subscriber.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(subscriber.created_at).toLocaleString('nl-NL')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => handleDelete(subscriber.email)}
                        disabled={deleteStatus.email === subscriber.email && (deleteStatus.status === 'loading' || deleteStatus.status === 'success')}
                        className="flex items-center text-red-600 hover:text-red-900 disabled:opacity-50"
                      >
                        {deleteStatus.email === subscriber.email && deleteStatus.status === 'loading' ? (
                          <>
                            <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Verwijderen...
                          </>
                        ) : deleteStatus.email === subscriber.email && deleteStatus.status === 'success' ? (
                          <>
                            <svg className="h-4 w-4 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Verwijderd
                          </>
                        ) : (
                          <>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Verwijderen
                          </>
                        )}
                      </button>
                      
                      {deleteStatus.email === subscriber.email && deleteStatus.status === 'error' && (
                        <p className="text-xs text-red-600 mt-1">{deleteStatus.message}</p>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    Nog geen abonnees
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 
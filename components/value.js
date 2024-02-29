import {useEffect,useState} from 'react';
import Mininavbar from './mininavbar';
import {useRouter} from 'next/router'
import { user } from '@nextui-org/react';
export default function Value() {
  // Add to get value from email -> and validate admin and email
  const [isAdmin, setIsAdmin] = useState(false)
  const [documentId, setDocumentId] = useState(null)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  useEffect(() => {
    setIsLoading(true);
    const fetchToken = async () => {
      const response = await fetch('api/token');
      const result = await response.json();
      setDocumentId(result.documentId);
      setIsAdmin(result.isAdmin)
    };

    fetchToken();
}, [router.isReady]);

  useEffect(() => {
    if(!documentId) return
    if(isAdmin && !router.query.documentId) return
    if(isAdmin){
      setDocumentId(router.query.documentId)
    }
      fetchData(documentId).then(fetchedData => {
        setData(fetchedData)
        setIsLoading(false);
      });

  },[documentId])
  return(
    <>
    <div className="overflow-x-auto p-10">
    {isLoading ? ( // Check if it's loading
            <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : (
      <table className="min-w-full table-auto">
        <tbody>
          {
  data.map((row, index) => (
    index === 0 ? (
      // Header row
      <tr key={index}>
        {row.map((cell, cellIndex) => (
          <th key={cellIndex} className="border px-4 py-2">{cell}</th>
        ))}
      </tr>
    ) : (
      // Data rows
      <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex} className="border px-4 py-2">{cell}</td>
        ))}
      </tr>
    )
  ))
}
        </tbody>
      </table>
        )}
    </div>
    </>
    );
}
const fetchData = async (documentId) => {
  const response = await fetch('/api/stock', {
        method: 'POST', // Use POST method to send data in the request body
    headers: {
      'Content-Type': 'application/json', // Indicate that we're sending JSON data
    },
    body: JSON.stringify({ documentId}),
  });
  const data = await response.json();
  return data;
};


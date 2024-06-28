import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

export default function Value({result,data}) {
  console.log(result)
  const [isAdmin, setIsAdmin] = useState(null)
  const [documentId, setDocumentId] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const router = useRouter()
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  useEffect(() => { 
    const domainName = process.env.DOMAIN
    const fetchToken = async () => {
      const response = await fetch(`${domainName}/api/token`);
      const result = await response.json();
      setDocumentId(result.documentId);
      setIsAdmin(result.isAdmin)
    };

    fetchToken();
  }, [router.isReady]);

  return(
    <>
      <div className="overflow-x-auto p-10 bg-gray-50 bg-gray-800">
          <>
          <table className="min-w-full table-auto text-gray-900 bg-gray-800 text-white">
            <tbody>
              {data.map((row, index) => (
                index === 0 ? (
                  <tr key={index}>
                    {row.map((cell, cellIndex) => (
                      <th key={cellIndex} className="border px-4 py-2 text-sm">{cell}</th>
                    ))}
                  </tr>
                ) : (
                  <tr key={index} className={`${index % 2 === 0 ? 'dark:bg-gray-700' : 'dark:bg-gray-800'}`}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border px-4 py-2 text-sm">{cell}</td>
                    ))}
                  </tr>
                )
              ))}
            </tbody>
          </table>
          </>
      </div>
    </>
  );
}



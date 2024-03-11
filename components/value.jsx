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
    const fetchToken = async () => {
      const response = await fetch('api/token');
      const result = await response.json();
      setDocumentId(result.documentId);
      setIsAdmin(result.isAdmin)
    };

    fetchToken();
  }, [router.isReady]);

  return(
    <>
      <div className="overflow-x-auto p-10 bg-gray-50 dark:bg-gray-800">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
          </div>
        ) : (
          <>
          <div className="mb-5">
          <label htmlFor="datePicker" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Select Date:</label>
          <input
            type="date"
            id="datePicker"
            name="datePicker"
            value={selectedDate}
            onChange={handleDateChange}
            className="mt-1 block w-130 h-8  border-gray-300 shadow-sm sm:text-sm rounded-md text-black"
          />
        </div>
        {selectedDate}
          <table className="min-w-full table-auto text-gray-900 dark:text-white">
            <tbody>
              {data.map((row, index) => (
                index === 0 ? (
                  <tr key={index}>
                    {row.map((cell, cellIndex) => (
                      <th key={cellIndex} className="border px-4 py-2">{cell}</th>
                    ))}
                  </tr>
                ) : (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border px-4 py-2">{cell}</td>
                    ))}
                  </tr>
                )
              ))}
            </tbody>
          </table>
          </>
        )}
      </div>
    </>
  );
}



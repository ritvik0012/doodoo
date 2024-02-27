import {useEffect,useState} from 'react';
import Mininavbar from '../components/mininavbar';
export default function Value() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchData().then(fetchedData => {
      setData(fetchedData)
      setIsLoading(false);
    });
    //console.log(JSON.stringify(data))
}, []);
  return(
    <>
    <Mininavbar />
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
const fetchData = async () => {
  const response = await fetch('/api/stock');
  const data = await response.json();
  return data;
  console.log(data)
  setData(data);
};


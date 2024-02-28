import Value from './value'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidenavbar'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
export default function Home() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [userData, setUserData] = useState(null);
    const [dashboard, setDashboard] = useState(true);
    const [portfolio, setPortfolio] = useState(false);
    const [documentId, setDocumentId] = useState(null)
    const router = useRouter();
    useEffect(() => {
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
      if(!isAdmin){
        setUserData('test')
      }
      else{
        setUserData(router.query.username)
      }
    },[documentId])
    return (
        <>
        <Navbar />
        <div className="flex min-h-screen">
      <Sidebar setPortfolio={setPortfolio} setDashboard={setDashboard}/>
      <div className="flex-1">
        {portfolio && <Value/>}
        {dashboard && (<h1 className="text-4xl text-center font-bold animate-pulse">
          Hi, {userData}!
        </h1>)}
        {/* If you have other components or page content, they can go here */}
      </div>
    </div>
    
        </>
    )
}
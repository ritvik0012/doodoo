import Value from '../components/value'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidenavbar'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
export default function Home() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [userData, setUserData] = useState(null);
    const [dashboard, setDashboard] = useState(true);
    const [dashboardValue, setDashboardValue] = useState(null)
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
        setUserData(JSON.parse(localStorage.getItem('user')).username)
        setDashboardValue("Hi, " + JSON.parse(localStorage.getItem('user')).username)
      }
      else{
        if(!router.query.username || !router.query.documentId){
          router.push('/admin')
        }
        else{
          setDashboardValue("Portal of " + router.query.username)
          setUserData(router.query.username)
        }
      }
    },[documentId])
    return (
        <>
        <Navbar />
        <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar setPortfolio={setPortfolio} setDashboard={setDashboard}/>
      <div className="flex-1">
        {portfolio && <Value/>}
        {dashboard && (
    <h1 className="text-4xl text-center font-bold animate-pulse">
      {dashboardValue}
    </h1>

  )}
        {/* If you have other components or page content, they can go here */}
      </div>
    </div>
    
    
        </>
    )
}
import Value from './value'
import Navbar from '../components/navbar'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
export default function Home() {
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState(null);
    const [showValue, setShowValue] = useState(false);
    const router = useRouter();
    useEffect(() => {
      const loginStatus = localStorage.getItem('user');
      setUserData(JSON.parse(loginStatus))
      setIsLogin(loginStatus);
  }, []);
    return (
        <>
        <Navbar />
        {isLogin && (<h1 className="text-4xl text-center font-bold animate-pulse">
          Hi, {userData.username}!
        </h1>)}
        </>
    )
}
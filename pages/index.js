import { useRouteLoaderData } from 'react-router-dom';
import Navbar from '../components/navbar'
import Payment from '../components/payment'
import Value from './value'
import {useState, useEffect} from 'react'

export default function Page() {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showValue, setShowValue] = useState(false);
  useEffect(() => {
    const loginStatus = localStorage.getItem('user');
    setUserData(JSON.parse(loginStatus))
    setIsLogin(loginStatus);
}, []);
    return (
    <>
    <Navbar showValue = {showValue} setShowValue={setShowValue} />
    {isLogin && (<h1 className="text-4xl text-center font-bold animate-pulse">
          Hi, {userData.username}!
        </h1>)}
    <Payment />
    

    </>
    )
  }



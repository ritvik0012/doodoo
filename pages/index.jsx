import {useRouter} from 'next/router'
import Login from './login'
import Homepage from './homepage'
import {useState, useEffect} from 'react'

export default function Page() {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showValue, setShowValue] = useState(false);
  const router = useRouter()
  useEffect(() => {
    const loginStatus = localStorage.getItem('user');
    setUserData(JSON.parse(loginStatus))
    setIsLogin(loginStatus);
}, [router]);
    return (
    <>
    <Homepage />
    

    </>
    )
  }



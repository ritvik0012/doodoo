import Value from '../components/value'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidenavbar'
import {useState, useEffect} from 'react'
import jwt from 'jsonwebtoken'
import {useRouter} from 'next/router'
import cookie from 'cookie'
//import { content } from 'googleapis/build/src/apis/content'
export default function Home({result,data}) {
    const [dashboard, setDashboard] = useState(true);
    const [portfolio, setPortfolio] = useState(false);
    const router = useRouter();
    let dashBoardValue;
    if(result.isAdmin){
      dashBoardValue = ("PORTAL OF " + router.query.username)
    }
    else{
      dashBoardValue = ("Welcome " + result.email)
    }
    return (
        <>
        <Navbar admin={result.isAdmin}/>
        <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar setPortfolio={setPortfolio} setDashboard={setDashboard}/>
      <div className="flex-1">
        {portfolio && <Value data={data} />}
        {dashboard && (
    <h1 className="text-4xl text-center font-bold animate-pulse">
      {dashBoardValue}
    </h1>

  )}
        {/* If you have other components or page content, they can go here */}
      </div>
    </div>
    
    
        </>
  
  )
}

export async function getServerSideProps(context) {
const cookieHeader = await context.req.headers.cookie || '';
const parsedCookies = cookie.parse(cookieHeader)
console.log(parsedCookies)
const result = jwt.decode(parsedCookies.doodoo)
let documentId
if(result.isAdmin){
  documentId = context.query.documentId
}
else{
  documentId = result.documentId
}
const response = await fetch('http://localhost:3000/api/stock', {
  method: 'POST', // Use POST method to send data in the request body
  headers: {
    'Content-Type': 'application/json', // Indicate that we're sending JSON data
  },
  body: JSON.stringify({ documentId }),
});
const data = await response.json();
return {props:{result,data:data}}

}

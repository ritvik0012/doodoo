import Homenav from '../components/Homenav'
import About from '../components/Aboutme'
import Services from '../components/Services'
import Testcomponent from '../components/Testcomponent'
import Whatwedo from '../components/Whatwedo'
import Talk from '../components/Talk'
import Contact from '../components/Contact'
import {useEffect} from 'react'
export default function Homepage() {
    useEffect(() => {
        document.body.classList.add("dark");
    })
    return (
        <div className="bg-achu">
        <Homenav />
        <About />
        <Whatwedo />
        <Services/>
        <Talk />
        <Contact />
        </div>
    )
}
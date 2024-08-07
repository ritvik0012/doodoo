import Homenav from '../components/Homenav'
import About from '../components/Aboutme'
import Services from '../components/Services'
import Testcomponent from '../components/Testcomponent'
import Whatwedo from '../components/Whatwedo'
import Talk from '../components/Talk'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import {useEffect} from 'react'
export default function Homepage() {
    return (
        <div className="bg-achu">
        <Homenav />
        <About />
        <Whatwedo />
        <Services/>
        <Talk />
        <Contact />
        <Footer />
        </div>
    )
}
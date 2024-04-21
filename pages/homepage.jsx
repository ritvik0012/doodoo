import Homenav from '../components/Homenav'
import About from '../components/Aboutme'
import Services from '../components/Services'
import Testcomponent from '../components/Testcomponent'
import {useEffect} from 'react'
export default function Homepage() {
    useEffect(() => {
        document.body.classList.add("dark");
    })
    return (
        <>
        <Homenav />
        <About />
        <Services />
        <Testcomponent />
        </>
    )
}
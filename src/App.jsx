import {useEffect } from 'react'
import './App.css'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import {Routes,Route} from "react-router-dom"
import { Home } from './pages/Home'
import  AOS  from 'aos'
import 'aos/dist/aos.css'
import { Contact } from './pages/Contact'
import { Project } from './pages/Project'
import { About } from './pages/About'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfUse } from './pages/TermsOfUse'
import { Licensing } from './pages/Licensing'

function App() {
  useEffect(()=>{
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      offset:80,
    }
    );
  },[])

  return (
    <>
      <Nav/>
      <div className='overflow-x-hidden px-[12px] md:px-[5px]  w-full'>
      
      <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/project" element = {<Project/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/contact" element = {<Contact/>}/>
            <Route path="/terms-of-use" element = {<TermsOfUse/>}/>
            <Route path="/privacypolicy" element = {<PrivacyPolicy/>}/>
            <Route path="/licensing" element = {<Licensing/>}/>
            <Route path="*" element={<Home />} />

      </Routes>
      
        <Footer/>
      </div>

      
    </>
  )
}

export default App

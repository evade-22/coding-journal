import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./home"
import About from "./about"
import Activity from './activity'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hook from '../components/Hook'
import ContactUs from './ContactUs'
import Task from './Task'
import Thoughts from './Thoughts'


const Index = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/activity' element={<Activity/>}/>
                <Route path='/Hook' element={<Hook/>}/>
                <Route path='/ContactUs' element={<ContactUs/>}/>
                <Route path='/Task' element={<Task/>}/>
                <Route path='/Thoughts' element={<Thoughts/>}/>
                {/* <Route path='/choreforms' element={<ChoreForms/>}/> */}
            </Routes>
            <Footer/>
        </Router>

    )
}

export default Index
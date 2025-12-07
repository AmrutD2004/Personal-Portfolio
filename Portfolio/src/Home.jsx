import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Educations from './components/Educations'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='max-w-3xl mx-auto flex flex-col space-y-10 selection:bg-neutral-800 selection:text-white '>
                <div id='hero'>
                    <Hero />
                </div>
                <div id='project'>
                    <Projects />
                </div>
                <div id='education'>
                    <Educations />
                </div>
                <div id='contact'>
                    <Contact />
                </div>
            </div>
            <footer className='mt-20'>
                <Footer />
            </footer>
        </>
    )
}

export default Home
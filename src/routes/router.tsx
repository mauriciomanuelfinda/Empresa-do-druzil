import { Routes, Route } from 'react-router'
import Error from '@/pages/error'
import Home from "@/pages/home"
import About from '@/pages/about'
import Blog from '@/pages/blog'
import Portfolio from '@/pages/portfolio'
import Services from '@/pages/services'
import Contact from '@/pages/contacto'

export default function Router() {
    return (
        <>
            <Routes>
                <Route path='*' element={
                    <Error />
                } />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </>
    )
}
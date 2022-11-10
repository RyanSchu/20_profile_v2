import React, {useState} from 'react'
import About from './pages/About';
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Header from './Header'

export default function Container() {
    const text = "Text"
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
          }
        return <About />;
      };

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {text}
            {renderPage()}
        </div>
    )
}

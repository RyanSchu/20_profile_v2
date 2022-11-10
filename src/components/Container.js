import React, {useState} from 'react'
import About from './pages/About';
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Header from './Header'
import Footer from './Footer'

export default function Container() {
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
        <body>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
              <main>
                {renderPage()}
              </main>
            <Footer />
        </body>
    )
}

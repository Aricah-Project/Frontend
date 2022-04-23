import Navbar from "./component/Navbar/Navbar";
import AboutUs from "./component/AboutUs/AboutUs"
import Features from "./component/Features/Features"
import ContactUs from "./component/ContactUs/ContactUS"
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App () {
  return(
    <div>
      <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Features />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </main> 
     <Footer />
      </Router>
    </div>
  )
}

export default App
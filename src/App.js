import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ComingSoon } from './components/ComingSoon';
import About from './components/About';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs'


function App() {
 

  return (
    <>
    <Router>
      <div className='container'>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<ComingSoon />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;

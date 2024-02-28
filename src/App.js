import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <img src="https://cognifyz.com/wp-content/uploads/2023/11/cognifyz-1.png" alt="" id='top' />
      </div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

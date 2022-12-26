import './App.css';
import NavBar from './components/NavBar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <>
    <Layout >
      <Routes>
          <Route path = "/React-Portfolio" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/contact" element = {<Contact />} />
          <Route path = "/portfolio" element = {<Portfolio />} />
          <Route path = "/resume" element = {<Resume />} />
      </Routes>
      </Layout>
    </>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {About} from './components/About'
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import resumeData from './resumedata.js';


function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData}/>
      <About resumeData={resumeData}/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
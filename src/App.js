import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavbar } from './components/navbar';
import { Banner} from './components/Banner';
import { Skills} from './components/Skills';
import { Projects} from './components/Projects';
import { Footer} from './components/Footer';
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

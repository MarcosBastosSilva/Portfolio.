import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavbar } from './components/navbar';
import { Banner} from './components/Banner';
import { Skills} from './components/Skills';
import { Projects} from './components/Projects'

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Banner/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;

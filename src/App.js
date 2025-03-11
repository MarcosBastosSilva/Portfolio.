import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavbar } from './components/navbar';
import { Banner} from './components/Banner';
/*import { Skills} from './components/Skills';*/


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner/>
    </div>
  );
}

export default App;

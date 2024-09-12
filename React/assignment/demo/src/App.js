import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Hello2 } from './components/Hello2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap'
function App() {
  return (
    <div className="App">
     
   <Header/>
   <Hello2/>
    </div>
  );
}

export default App;

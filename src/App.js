import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {NavBar} from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  const styles = {
    color: 'green',
    fontSize: '130px'
  }
  return (
    <div className='App'>
        <NavBar />
        <ItemListContainer greeting = 'Hola Mundo!' styles = {styles} />
    </div>
  );
}

export default App;

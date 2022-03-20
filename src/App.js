import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import AllItmes from './components/AllItmes/AllItmes';
import SearchItems from './components/SearchItems/SearchItems';
function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <SearchItems></SearchItems>
      <AllItmes></AllItmes>
    </div>
  );
}

export default App;

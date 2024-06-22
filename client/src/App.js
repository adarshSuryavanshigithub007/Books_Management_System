import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import RoutesComponents from './authentication/routes/Routes';

function App() {
  return (
    <div >
      <RoutesComponents/>
      {/* <Layout/>
      <Home/> */}
      {/* <h1>hello</h1>
      <button className='btn btn-primary'>click</button> */}
    </div>
  );
}

export default App;

import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './Component/Banner/Banner';
import LogIn from './Component/Login/LogIn';
import Regestration from './Component/Regestration/Regestration';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Banner></Banner>
        <Switch>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path='/signup'>
            <Regestration></Regestration>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;

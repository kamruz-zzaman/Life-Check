import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './Component/Banner/Banner';
import LogIn from './Component/Login/LogIn';
import Regestration from './Component/Regestration/Regestration';
import Footer from './Component/Footer/Footer';
import Services from './Component/Our_Serrvices/Services/Services';
import Doctors from './Component/Our_Serrvices/Doctors/Doctors';
import FullServices from './Component/Our_Serrvices/ServiceCard/FullServices';
import FullDoctors from './Component/Our_Serrvices/Doctors/FullDoctors';
import Error from './Component/Error/Error';
import Appointament from './Component/Appointment/Appointament';
import SuccessApoint from './Component/Appointment/SuccesApoint/SuccessApoint';
import Details from './Component/MoreDetails/Dtails/Dtails';
import Support from './Component/Support/Support';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { AuthProvider } from './Component/context/Authprovider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Banner></Banner>
              <Services></Services>
              <Doctors></Doctors>
              <Support></Support>
            </Route>
            <Route path='/home'>
              <Banner></Banner>
              <Services></Services>
              <Doctors></Doctors>
              <Support></Support>
            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/signup'>
              <Regestration></Regestration>
            </Route>
            <Route path='/services'>
              <FullServices></FullServices>
            </Route>
            <Route path='/specialist'>
              <FullDoctors></FullDoctors>
            </Route>
            <PrivateRoute path='/appoint'>
              <Appointament></Appointament>
            </PrivateRoute>
            <Route path='/success'>
              <SuccessApoint></SuccessApoint>
            </Route>
            <PrivateRoute path='/detail/:Key'>
              <Details></Details>
            </PrivateRoute>
            <Route path='/support'>
              <Support></Support>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;

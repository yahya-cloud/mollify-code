import React, {useState, useEffect, Suspense, lazy} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";


import './App.css';
import Spinner from './components/UI/Spinner/Spinner';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MobileNav from './components/MobileNav/MobileNav';
import ContactImg from './assets/contact.png';
import CareerImg from './assets/career.png';

const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const Team =  lazy(() => import('./components/Team/Team'));
const FormBuilder = lazy(() => import('./components/FormBuilder/FormBuilder'));


function App() {
  
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [page, setPage] = useState('not-home');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      dataAosOffset:"500"
    })
    AOS.refresh();

  }, [])



  return (

      <div className="App">

      <Router>
      <ScrollToTop/>
      <Suspense fallback={<Spinner />}>
      <Header
      mobileNav={showMobileNav}
      mobileNavHandler= {setShowMobileNav}
      page={page} 
      />


      <MobileNav 
      mobileNavHandler= {setShowMobileNav} 
      showMobileNav={showMobileNav} />

   

      <Switch>
       <Route path="/Team">
         <Team />
       </Route>

      <Route path="/contact">
       <FormBuilder 
         formOrder= "0"
         mainColor="red"
         formHeading="Contact Us"
         sideContainerColor="#815063"
         imgContainerHeading="Let's Get in Contact"
         img={ContactImg}
       />
      </Route>

      <Route path="/career">
      <FormBuilder 
         formOrder= {-1}
         mainColor="green"
         formHeading="Register"
         sideContainerColor="#2E8473"
         imgContainerHeading="Let's Make History Together"
         img={CareerImg}
       />
      </Route>

       <Route  path="/" >
       <HomePage  setPage={setPage}/>     
       </Route>

       <Redirect to="/" />
</Switch>   

      <Footer />

      </Suspense>
      </Router>
      </div>

  );
}

export default App;

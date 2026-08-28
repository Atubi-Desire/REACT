import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Service from './Components/Service';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Counter from './Components/Feature/Counter/Counter';
import Student from './Components/student';


function App() {
  return (

    <div className="App">
      <Student />
     <Navbar title= "john" age="40"/>
    <Hero/>
    <About/>
    <Contact/>
    <Service/>
    <Footer/>
    <Counter/> 
  </div>
  );
}

export default App;

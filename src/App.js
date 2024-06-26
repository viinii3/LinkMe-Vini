import './App.css';
import Company from './components/Company/Company';
import Footer from './components/Footer/Footer';
import Freelancer from './components/Freelance/Freelancer';
import Links from './components/Links/Links';
import Portfolio from './components/Portfolio/Portfolio';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';

function App() {
  return (
      <div className='flex-container'>
        <div className='container'>
          <Profile/>
          <Skills/>
          <Company/>
          <Links/>
          <Portfolio/>
          <Freelancer/>
          <Footer/>
        </div>
      </div>
  );
}

export default App;

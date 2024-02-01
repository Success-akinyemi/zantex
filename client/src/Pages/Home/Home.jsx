import AboutUs from '../../Components/AboutUs/AboutUs'
import DropDown from '../../Components/DropDown/DropDown'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import MoreFromUs from '../../Components/MoreFromUs/MoreFromUs'
import OurSevices from '../../Components/OurSevices/OurSevices'
import './Home.css'

function Home({isOpen, toggle}) {
  return (
    <div className='home'>
        <Header toggle={toggle} />
        <DropDown isOpen={isOpen} toggle={toggle} />
        <Hero />
        <div className="h-1">
          <OurSevices />
        </div>
        <div className="h-2">
          <AboutUs />
        </div>
        <div className="h-1">
          <MoreFromUs />
        </div>
        <div className='h-3'>
          <Footer />
        </div>
    </div>
  )
}

export default Home
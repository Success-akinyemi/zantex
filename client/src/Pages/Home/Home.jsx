import AboutUs from '../../Components/AboutUs/AboutUs'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import MoreFromUs from '../../Components/MoreFromUs/MoreFromUs'
import OurSevices from '../../Components/OurSevices/OurSevices'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <Header />
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
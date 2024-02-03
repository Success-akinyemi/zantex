import Community from '../../Components/Community/Community'
import Companion from '../../Components/Companion/Companion'
import CoreStrength from '../../Components/CoreStrength/CoreStrength'
import DropDown from '../../Components/DropDown/DropDown'
import Footer from '../../Components/Footer/Footer'
import JoinForces from '../../Components/JoinForces/JoinForces'
import PageHeader from '../../Components/PageHeader/PageHeader'
import PageHero from '../../Components/PageHero/PageHero'
import Stats from '../../Components/Stats/Stats'
import SuccessStory from '../../Components/SuccessStory/SuccessStory'
import Thrive from '../../Components/Thrive/Thrive'
import YourHealth from '../../Components/YourHealth/YourHealth'
import './AboutUs.css'

function AboutUs({isOpen, toggle}) {
  return (
    <div className='aboutUsPage'>
        <PageHeader toggle={toggle} text={'About us'} />
        <DropDown isOpen={isOpen} toggle={toggle} />
        <PageHero />
        <div className="h-1">
          <Stats />
        </div>
        <div className="h-1">
          <Community />
        </div>
        <div className="h-1">
          <Thrive />
        </div>
        <div className="h-1">
          <SuccessStory />
        </div>
        <div className="h-1">
          <YourHealth />
        </div>
        <div className="h-1">
          <Companion />
        </div>
        <div className="h-1">
          <JoinForces />
        </div>
        <div className="h-1">
          <CoreStrength />
        </div>
        <div className="h-2">
          <Footer />
        </div>
    </div>
  )
}

export default AboutUs
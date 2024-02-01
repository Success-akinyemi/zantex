import './PageHero.css'
import HeroBg from '../../assets/hero.png'

function PageHero() {
  return (
    <div className='pageHero'>
        <div className="overlay"></div>
        <img src={HeroBg} alt='hero bg' className='heroImg' />
        <div className="sidePadding content">
        <div className="headingText">
            We are Zantex
        </div>
        <p className='headingPara'>
            We’re passionate about solving problems. We take on challenges others deem impossible.
        </p>
        {
          /**
           <div className="getStarted">
               <Link className='link getStartedLink'>
               Get Started
               </Link>
           </div>
           * 
           */
        }
        </div>
    </div>
  )
}

export default PageHero
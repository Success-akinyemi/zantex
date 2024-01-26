import'./Hero.css'
import HeroBg from '../../assets/difinitoHeroBg.jpg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero'>
        <img src={HeroBg} alt='hero bg' className='heroImg' />
        <div className="sidePadding content">
          <div className="headingText">
            Creativity, Versatility,<br /> Intelligence
          </div>
          <p className='headingPara'>
          With intelligence as our guiding force, we navigate the ever-evolving tech landscape, exploring possibilities and crafting solutions that serve as benchmarks of our unwavering commitment to technological excellence
          </p>
          <div className="getStarted">
            <Link className='link getStartedLink'>
              Get Started
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Hero
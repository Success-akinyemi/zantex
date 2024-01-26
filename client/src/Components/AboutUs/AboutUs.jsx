import './AboutUs.css'
import AboutUsImg from '../../assets/za.png'
import { aboutUs } from '../../data/aboutUs'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div className='sidePadding aboutUs'>
        <h2 className="aboutHead">Who we are at Zantex</h2>

        <div className="container">
            <div className="left">
              <img src={AboutUsImg} alt="about" className="aboutImg" />
            </div>

            <div className="right">
              <h3 className="topText">What we do</h3>

              <div className="content">
                {
                  aboutUs.map((item, idx) => (
                    <div className='card' key={idx}>
                       <span>{item.id}</span> 
                       <div className="info">
                        <h4 className=''>{item.title}</h4>
                        <p>{item.text}</p>
                       </div>
                    </div>
                  ))
                }
              </div>

                <div className='learnMoreBtn'>
                  <Link className='link learnMore' to='/about'>Learn more</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
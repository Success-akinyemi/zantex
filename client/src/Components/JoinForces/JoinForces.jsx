import { Link } from 'react-router-dom'
import './JoinForces.css'
import ImgOne from '../../assets/force1.png'
import ImgTwo from '../../assets/force2.png'


function JoinForces() {
  return (
    <div className='joinForces'>
        <div className="sidePadding content">
            <h1>Join forces with the best</h1>
            <p>We've seen that the most impactful solutions are born when talent comes together. That’s why we encourage our teams to work side-by-side on site.</p>
            <Link className='link btn'>Explore Our Locations</Link>

            <div className="cards">
                <div className="card">
                    <img src={ImgOne} alt='pic' />
                    <h3>Be productive at the office</h3>
                    <p>Our offices have everything you need for a good work day: designated individual workstations, team spaces, and lounge areas.</p>
                </div>
                <div className="card">
                    <img src={ImgTwo} alt="pic 2" />
                    <h3>Bring your pet with you</h3>
                    <p>Bringing your furry friends to work can be a mood booster, but it may not be possible at all office locations yet. We’re working towards creating a more inclusive and welcoming environment for all, including pets.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JoinForces
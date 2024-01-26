import { Link } from 'react-router-dom'
import { ourServices } from '../../data/ourServices'
import './OurSevices.css'

function OurSevices() {
  return (
    <div className='sidePadding ourSevices'>
        <h2 className="head">Our services</h2>

        <div className="container">
            {
                ourServices.map((item, idx) => (
                    <Link className='link card' to={item.link} key={idx}>
                            <h3>{item.title}</h3>
                            <img src={item.image} alt={item.title} className="cardImg" />
                            <p>{item.text}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default OurSevices
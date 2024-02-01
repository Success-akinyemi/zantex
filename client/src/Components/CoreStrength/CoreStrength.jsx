import { Link } from 'react-router-dom';
import { coreStrenght } from '../../data/coreStrenght';
import './CoreStrength.css'
import { FaQuoteLeft } from "react-icons/fa6";

function CoreStrength() {
  return (
    <div className='sidePadding coreStrength'>
        <h1>Core Strength</h1>

        <div className="values">
            {
                coreStrenght.map((item, id) => (
                    <div className={`value ${item.id === 1 ? 'reverse' : 'row'}`}>
                        <div className="left">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="right">
                            <p>{item.text}</p>
                            <h5>{item.name}</h5>
                            <p className='small'>{item.post}</p>

                            <div>
                                <Link to={item.link} className='link btn'>Keep Reading</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CoreStrength
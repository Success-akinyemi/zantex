import { Link } from 'react-router-dom'
import './YourHealth.css'
import ImageArray from '../Helpers/ImageArray/ImageArray'
import ImgOne from '../../assets/9.png'
import ImgTwo from '../../assets/10.png'
import ImgThree from '../../assets/11.png'
import ImgFour from '../../assets/12.png'


function YourHealth() {
  return (
    <div className='sidePadding yourHealth'>
        <div className="info">
            <h1>Take care of your health</h1>
            <p>We have a selection of benefits that let you enjoy an active lifestyle, and boost your mental well-being.</p>
        </div>

        <div className="img">
            <ImageArray 
                ImgOne={ImgOne}
                ImgTwo={ImgTwo}
                ImgThree={ImgThree}
                ImgFour={ImgFour}
            />
        </div>
    </div>
  )
}

export default YourHealth
import { Link } from 'react-router-dom'
import './SuccessStory.css'
import ImageArray from '../Helpers/ImageArray/ImageArray'
import ImgOne from '../../assets/5.png'
import ImgTwo from '../../assets/6.png'
import ImgThree from '../../assets/7.png'
import ImgFour from '../../assets/8.png'


function SuccessStory() {
  return (
    <div className='sidePadding successStory'>
        <div className="info">
            <h1>Have a share in our success</h1>
            <p>We know our fast growth is the result of our people’s work. That's why you receive stock options as a Bolt employee and get a share in the company's success. As Bolt does well, so do you.</p>
            <div>
                <Link className='link btn'>Read More</Link>
            </div>
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

export default SuccessStory
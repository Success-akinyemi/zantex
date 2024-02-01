import './Thrive.css'
import ImgOne from '../../assets/1.png'
import ImgTwo from '../../assets/2.png'
import ImgThree from '../../assets/3.png'
import ImgFour from '../../assets/4.png'
import ImageArray from '../Helpers/ImageArray/ImageArray'


function Thrive() {
  return (
    <div className='sidePadding thrive'>
        <h1>Thrive at Zantex</h1>
        <p>Zantex Digital and Electronics is an innovative technology company that offers cutting-edge solutions in the digital and electronics domain. Our mission is to empower businesses and individuals with advanced technology to thrive in an increasingly digital world. With a team of dedicated experts, we specialize in providing a wide range of services</p>
        <i>*Some perks may differ depending on your location and role.</i>

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

export default Thrive
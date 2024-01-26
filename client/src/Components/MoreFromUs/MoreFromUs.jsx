import './MoreFromUs.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { moreFromUs } from '../../data/moreFromUs';
import { Link } from 'react-router-dom';

function MoreFromUs() {

    var settings = {
        speed: 500,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {      
            breakpoint: 950,
            settings: {
              dots: true,
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              pauseOnHover: true,
            } 
          },
          {      
            breakpoint: 450,
            settings: {
              dots: true,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              pauseOnHover: true,
            } 
          },
        ]
      }

  return (
    <div className='sidePadding moreFromUs'>
        <h2 className='moreFromUsText'>What we offer</h2>

        <div className="container">
        <Slider {...settings}>
            {
                moreFromUs.map((item, idx) => (
                    <Link to='' key={idx} className='link card'>
                        <div className="imgcard">
                            <img src={item.image} alt="" className="img" />
                        </div>
                        <p className='text'>{item.title}</p>
                        
                        <small>{item.small}</small>
                    </Link>
                ))
            }
        </Slider>
        </div>
    </div>
  )
}

export default MoreFromUs
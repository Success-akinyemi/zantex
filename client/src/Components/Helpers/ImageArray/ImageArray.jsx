import './ImageArray.css'

function ImageArray({ImgOne, ImgTwo, ImgThree, ImgFour}) {
  return (
    <div className='imageArray'>
        <div className="images">
            <div className="card1">
                <div className="imageCard">
                    <img className='img1' src={ImgOne} alt="images" />
                </div>
                <div className="imageCard">
                    <img className='img2' src={ImgTwo} alt="images" />
                </div>
            </div>

            <div className="card2">
                <div className="imageCard">
                    <img className='img3' src={ImgThree} alt="images" />
                </div>
                <div className="imageCard">
                    <img className='img4' src={ImgFour} alt="images" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageArray
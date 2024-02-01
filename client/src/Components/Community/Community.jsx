import './Community.css'
import Video from '../../assets/video/video.mp4'

function Community() {
  return (
    <div className='sidePadding community'>
        <h1>Find your community</h1>
        <p>We bring our teams together through annual events for both local and global teams.</p>
        <div className='videoCard'>
            <video controls src={Video}></video>
        </div>
    </div>
  )
}

export default Community
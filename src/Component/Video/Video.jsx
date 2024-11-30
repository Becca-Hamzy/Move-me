// import movie from "../../assets/Videos/movie1.mp4"
import ReactPlayer from "react-player"
import movie from "../../../public/Video/movie1.mp4"
import "./Video.css"

const Video = () => {

    return(
      <div className="video">
        <h2>SEE HOW WE MOVE</h2>
        <div className="vid">
        <ReactPlayer url= {movie} type = "mp4" controls/>
      </div>
      </div>

    )
}

export default Video


import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "../featured/featured.scss";
import axios from "../../../config/axios";
import { API_KEY,imageUrl } from "../../../constants/constants";
import { useEffect,useState } from "react";

function Featured({type,overview}) {
  const [featuredMovie, setFeaturedMovie] = useState();

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(`trending/all/day?api_key=${API_KEY}`);
        var random = Math.floor(Math.random() * 10) + 1; 
        setFeaturedMovie(res.data.results[random]);
      } catch (error) {
        alert("Network error");
      }
    };
    getRandomList();
  }, []);
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
      <img
        width="100%"
        src={`${featuredMovie ? imageUrl+featuredMovie.backdrop_path:""}`}
        alt=""
      />
      <div className="info">
        <h1>{featuredMovie?featuredMovie.title:""}</h1>
        {/* <img
          width="100%"
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        /> */}
        <span className="desc">{featuredMovie ? featuredMovie.overview: ""}</span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;

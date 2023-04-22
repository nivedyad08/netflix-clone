import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import "../listItem/listItem.scss";
import { API_KEY, imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";
import axios from "../../config/axios";
import { Link } from "react-router-dom";

function ListItem({ index, item }) {
  const [isHover, setIsHover] = useState(false);
  const [isVideoKey, setVideoKey] = useState();

  const fetchVideoKey = (id) => {
    axios
      .get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`)
      .then((res) => {
        setVideoKey(res.data.results[0].key);
        console.log(res.data.results[0].key);
      })
      .catch((err) => {
        console.log("No video available");
      });
  };
  const opts = {
    height: "140px",
    width: "100%",
    autoplay: 1,
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Link to={`/watch/${isVideoKey}`}>
      <div
        className="listItem"
        style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img
          src={`${item ? imageUrl + item.backdrop_path : ""}`}
          alt=""
          onMouseOver={() => {
            fetchVideoKey(item.id);
          }}
        />
        {isHover && (
          <>
            <YouTube
              videoId={isVideoKey ? isVideoKey : ""}
              opts={opts}
              className="video"
            />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a
                qui tempora aliquid non debitis ex molestiae quae atque
                eligendi! Repellendus rem obcaecati modi, quam culpa corrupti
                fugit commodi nulla?
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default ListItem;

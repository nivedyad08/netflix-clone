import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import YouTube from "react-youtube";
import { Link,useParams  } from "react-router-dom";

export default function Watch() {
  const { key } = useParams();

  const opts = {
    height: "100%",
    width: "100%",
    autoplay: 1,
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <YouTube
        videoId={key ? key : ""}
        opts={opts}
        className="video"
      />
    </div>
  );
}

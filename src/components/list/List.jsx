import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { display } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import "../list/list.scss";
import ListItem from "../listItem/ListItem";
import axios from "../../config/axios"; 

export default function List({title,url}) {
  const listRef = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSliderNumber] = useState(0);
  const [isOrginals, setOriginals] = useState([]);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50; //gives component height and width
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderNumber(slideNumber - 1);
    }
    if (direction === "right" && slideNumber < 5) {
      setSliderNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setOriginals(res.data.results);
      })
      .catch((err) => {
        alert("Newtwork issue");
      });
  }); 

  return (
    <div className="list">
      <span className="listTitle">{title}</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {isOrginals.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

import React, {useState } from "react";
import List from "../../components/list/List";
import Featured from "../../components/navbar/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import {originals,action,trending,popular} from '../../config/urls';

export default function Home() {
  const [lists, setLists] = useState([]);
 
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie"/>
      <List title='Netflix Originals' url={originals}/>
      <List title='Action' url={action}/>
      <List title='Trending' url={trending}/>
      <List title='Popular' url={popular}/>
    </div>
  );
}

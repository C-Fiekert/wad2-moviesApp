import React from "react";
import Trending from "../trendingCard/";
import "./trendingList.css";

const TrendingList = ({movies}) => {
  const trendingCards = movies.map(m => (
    <Trending key={m.id} movie={m}/>
  ));
  return <div className="row movies bg-info" style={{backgroundColor:"#d20000"}}>{trendingCards}</div>;
};

export default TrendingList;
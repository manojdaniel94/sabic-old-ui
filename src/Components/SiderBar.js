import Container from "./Container";
import sidebarimage1 from "../images/sidebarimage1.svg"
import sidebarimage2 from "../images/sidebar_affiliates.png"
import sidebarimage3 from "../images/sidebar_plants.png"
import sidebarimage4 from "../images/sidebar_assets.png"
import sidebarimage5 from "../images/sidebar_info.png"
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "../styles.css";
import PlantPopup from "./Popup/PlantPopup";
import { useState } from "react";
import AssetsPopup from "./Popup/AssetsPopup";
import { useCommonDispatch } from "../context/common/context";

const SideBar = () => {
  const dispatchCommon = useCommonDispatch();

  const _getCommonAction = (item) => dispatchCommon({ type: "ADD_BREAD_CRUMBS", payload: item });
  const navigate = useNavigate()
  const [plantHover, setPlantHover] = useState(false)
  const [assetHover, setAssetHover] = useState(false)

  const onClickFunction = (key) => {
    navigate(`/${key}`)
  }
  const handleMouseIn = () => {
    setPlantHover(true)
  }

  const handleMouseOut = () => {
    setPlantHover(false)
  }

  const handlePlantPopup = (item) => {
    onClickFunction('plant');
    _getCommonAction({ title: item.label, key: "plant" });
  }
  const handleAssetPopup = (item) => {
    onClickFunction('assets');
    _getCommonAction({ title: item.label, key: "assets" });
  }

  return (
    <Container variant="sidebar">
      <div id="sidebar">
        <div class="sidebar-icon">
          <a onClick={() => { onClickFunction('home'); _getCommonAction({ title: "home", key: "home" }) }} class="home"><img src={sidebarimage1} alt="Home" /></a>
          <a onClick={() => { onClickFunction('affiliates'); _getCommonAction({ title: "affiliates", key: "affiliates" }) }} class="affiliates"><img src={sidebarimage2} alt="affiliates" /></a>
          <a onClick={() => { setPlantHover(true) }} class="plants"><img src={sidebarimage3} alt="Plants" /></a>
          <a onClick={() => { setAssetHover(true) }} class="assets"><img src={sidebarimage4} alt="Assets" /></a>
          <a class="assets"><img src={sidebarimage5} alt="Home" /></a>
          {plantHover ? <PlantPopup setData={setPlantHover} handlePlantPopup={handlePlantPopup} /> : null}
          {assetHover ? <AssetsPopup setData={setAssetHover} handleAssetPopup={handleAssetPopup} /> : null}
        </div>
      </div>
    </Container>
  );
};


// onClickFunction('assets'); 

export default SideBar;


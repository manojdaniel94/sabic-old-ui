import React, { useRef } from "react";
import AffiliatesBreadCrumb from "../Components/AffiliatesPage/AffiliatesBreadCrumb";
//import Status from "../Components/PlantComponent/Status";
import Status from "../Components/Assets/Status/Status";
import Affiliates from "../Components/PlantComponent/Affiliates";
import HealthIndex from "../Components/PlantComponent/HealthIndex";
import BreadCrumb from "../Components/BreadCrumbComponent/BreadCrumb";


const Plant = () => {
    return (
        <>
            <BreadCrumb />
            <div id="content-affiliates">
                <Status />
                <Affiliates />
                <HealthIndex />
            </div>
        </>

    );
};

export default Plant;
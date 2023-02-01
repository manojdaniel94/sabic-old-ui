import React, { useRef } from "react";
import Status from "../Components/Assets/Status/Status";
//import BreadCrumb from "../Components/Assets/BreadCrumb/BreadCrumb";
import BreadCrumb from "../Components/BreadCrumbComponent/BreadCrumb";
import TopContainer from "../Components/Assets/TopContainer/TopContainer";
import AssetTable from "../Components/Table/AssetTable";
import { useCommonDispatch } from "../context/common/context";
import { getCommonAction } from "../context/common/action";
import { useEffect } from "react";
import PlantComponent from "../Components/Assets/PlantLeftComponent/PlantComponent";

const Assets = () => {

    const data = [
        {
            "plantId": 1,
            "plantName": "AN4"
        },
        {
            "plantId": 19,
            "plantName": "AN5"
        },
    ]

    const dispatchCommon = useCommonDispatch();

    const _getCommonAction = () => dispatchCommon({ type: "REMOVE_BREAD_CRUMBS", payload: "affiliates" });

    // useEffect(() => {

    //     _getCommonAction()

    // }, [])



    return (
        <div>
            <BreadCrumb />
            <div id="content-affiliates">
                <Status />
                {/* <TopContainer /> */}
                <div id="plant-nav">
                    <a href="#">PMT</a>
                    <a href="#">ALERT STATISTICS</a>
                    <a href="#">MODEL PERFORMANCE</a>
                    <a href="#">ALERT MANAGEMENT PAGE</a>
                </div>
                <PlantComponent />
            </div>
        </div>

    );
};

export default Assets;


{/* <div>
    <BreadCrumb />
    <div id="content-affiliates">
        <Status />
        <TopContainer />
        <div style={{ width: '550px' }}>
            <AssetTable />
        </div>
        <button onClick={_getCommonAction}>Remove bread crumb</button>
    </div>
</div> */}
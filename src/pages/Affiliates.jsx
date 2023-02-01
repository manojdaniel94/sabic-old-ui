import React, { useRef } from "react";
import AffiliatesContainer from "../Components/AffiliatesPage/AffiliatesContainer";
import { useLocation } from 'react-router-dom';

const Affiliates = () => {

    const location = useLocation();
    // console.log("location.state.name", location.state.data);
    return (
        <>
            {/* <AffiliatesContainer affiliatesData={location.state.data} /> */}
            <AffiliatesContainer />
        </>

    );
};

export default Affiliates;
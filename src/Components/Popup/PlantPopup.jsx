import React, { useEffect, useRef, useState } from "react";
import Select from 'react-select'
import { affiliateList } from "../../DataModel/affiliateList"
import Dropdown from "../Dropdown/Dropdown";

const PlantPopup = (props) => {
    const [options, setOptions] = useState()
    const [selectedValue, SetSelectedValue] = useState()

    useEffect(() => {
        let data = affiliateList.map(function (item) {
            return { value: item.affiliateId, label: item.affiliateName };
        })
        setOptions(data)
    }, [])

    const handleChange = (e) => {
        //console.log(e.value)
        SetSelectedValue(e)
    }

    return (
        <>
            <div id="sidebar-popup" onMouseOver={() => props.setData(true)} onMouseOut={() => props.setData(false)}>
                <div>Affiliates</div>
                <Dropdown options={options} handleChange={handleChange} />
                <button onClick={() => { props.handlePlantPopup(selectedValue); props.setData(false) }}>Go</button>
            </div>
        </>


    );
};

export default PlantPopup;
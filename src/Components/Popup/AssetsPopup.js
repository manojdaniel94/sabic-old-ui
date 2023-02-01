import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { affiliateList } from "../../DataModel/affiliateList";
import { plantList } from "../../DataModel/plantList";
import Dropdown from "../Dropdown/Dropdown";

const AssetsPopup = (props) => {
  const [affiliateOptions, setAffiliateOptions] = useState();
  const [selectedAffiliateOption, setSelectedAffiliateOption] = useState();
  const [plantOptions, setPlantOptions] = useState();
  const [showPlantSelector, setShowPlantSelector] = useState(false);
  const [selectedValue, SetSelectedValue] = useState()

  useEffect(() => {
    let data = affiliateList.map((item) => {
      return { value: item.affiliateId, label: item.affiliateName };
    });
    setAffiliateOptions(data);
    let filteredPlantOptions = plantList.map((item) => {
      return { value: item.plantId, label: item.plantName };
    });
    setPlantOptions(filteredPlantOptions);
  }, []);


  const handleAffiliateChange = (selectedOption) => {
    setSelectedAffiliateOption(selectedOption);
    //let filteredPlantOptions = plantList.filter(
    //(plant) => plant.affiliateId === selectedOption.value
    // );
    //setPlantOptions(filteredPlantOptions);

    setShowPlantSelector(true);
  };

  const handlePlantChange = (e) => {
    SetSelectedValue(e)
  }



  return (
    <div
      id="sidebar-popup1"
      onMouseOver={() => props.setData(true)}
      onMouseOut={() => props.setData(false)}
    >
      <>
        <div>
          <div>Affiliates</div>
          <Dropdown options={affiliateOptions} handleChange={handleAffiliateChange} />

        </div>
        {showPlantSelector && (
          <div>
            <div>Plants</div>
            <Dropdown options={plantOptions} handleChange={handlePlantChange} />
          </div>
        )}
        <button onClick={() => { props.handleAssetPopup(selectedValue); props.setData(false) }}>Go</button>
      </>
    </div>
  );
};

export default AssetsPopup;

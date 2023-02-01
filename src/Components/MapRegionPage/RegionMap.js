import React, { useState } from "react";
import GlobalPreview from "./GlobalPreview";
import SubPreview, { SubPreviewMap } from "./SubPreview"
import "./Region.css";

const RegionMap = () => {

    const [selectedItem, setSelectedItem] = useState(null);


    return (
        <>
            <div id="global">
                <div id="global-left">
                    <div class="global-outer">
                        <div id="global-card">
                            <div class="global-titlebar">
                                <h3>Region List</h3>
                            </div>
                            <div class="global-content">
                                <SubPreview setSelectedItem={setSelectedItem} />
                            </div>
                        </div>
                    </div>
                    <div id="plant-alert-list"></div>
                </div>
                <div id="global-right">
                    <div class="global-outer">
                        <div class="global-titlebar">
                            {selectedItem === null ? <h3>Global Preview</h3> : <h3>{selectedItem.regionName}</h3>}
                        </div>
                           {selectedItem === null ?
                                <GlobalPreview /> :
                                <SubPreviewMap
                                    latitude={selectedItem.latitude}
                                    longitude={selectedItem.longitude}
                                    name={selectedItem.regionName}
                                    regionid={selectedItem.regionid}
                                />
                            }
                       </div>
                </div>
            </div>
        </>
    )
}
export default RegionMap;
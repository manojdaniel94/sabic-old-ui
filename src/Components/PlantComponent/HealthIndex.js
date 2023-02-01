import React from "react";
import { data } from "../../DataModel/data"
import affiliateArrazi from "../../images/affiliate-arrazi.png"
import affiliateIbnsind from "../../images/affiliate-ibnsind.png"
import affiliateKenya from "../../images/affiliate-kenya.png"
import affiliateSaudikayan from "../../images/affiliate-saudi-kayan.png"

import affiliateShark from "../../images/affiliate-shark.png"
import affiliateUnited from "../../images/affiliate-united.png"
import affiliateYanpet from "../../images/affiliate-yanpet.png"
import affiliateYansab from "../../images/affiliate-yansab.png"

const HealthIndex = () => {
    return (
        <>
            <div class="affiliates-outer">
                <h3>HEALTH INDEX</h3>
                <div id="health-index">
                    <div class="health-affiliate">
                        {/* <div class="health-box">
                            <div class="bar" style={{ height: "40px" }}><span>49%</span></div>
                        </div> */}
                        {/* <div class="health-af-name"><img src={affiliateArrazi} alt="affilatename" /></div> */}
                    </div>
                    <div class="health-affiliate">
                        {/* <div class="health-box">
                            <div class="bar" style={{ height: "69px" }} ><span>69%</span></div>
                        </div>
                        <div class="health-af-name"><img src={affiliateIbnsind} alt="affilatename" /></div> */}
                    </div>
                    <div class="health-affiliate">
                        <div class="health-box">
                            <div class="bar" style={{ height: "120px" }} ><span>8</span></div>
                        </div>
                        <div class="health-af-name">OLF 1</div>
                    </div>
                    <div class="health-affiliate">
                        <div class="health-box">
                            <div class="bar" style={{ height: "80px" }} ><span>5</span></div>
                        </div>
                        <div class="health-af-name">OLF 2</div>
                    </div>
                    <div class="health-affiliate">
                        <div class="health-box">
                            <div class="bar" style={{ height: "40px" }} ><span>2</span></div>
                        </div>
                        <div class="health-af-name">OLF 3</div>
                    </div>
                    <div class="health-affiliate">
                        {/* <div class="health-box">
                            <div class="bar" style={{ height: "99px" }} ><span>99%</span></div>
                        </div>
                        <div class="health-af-name"><img src={affiliateArrazi} alt="affilatename" /></div> */}
                    </div>
                    <div class="health-affiliate">
                        {/* <div class="health-box">
                            <div class="bar" style={{ height: "99px" }} ><span>49%</span></div>
                        </div>
                        <div class="health-af-name"><img src={affiliateUnited} alt="affilatename" /></div> */}
                    </div>
                    <div class="health-affiliate">
                        {/* <div class="health-box">
                            <div class="bar" style={{ height: "19px" }} ><span>19%</span></div>
                        </div>
                        <div class="health-af-name"><img src={affiliateYanpet} alt="affilatename" /></div> */}
                    </div>
                </div>

            </div>
        </>
    )
};

export default HealthIndex;
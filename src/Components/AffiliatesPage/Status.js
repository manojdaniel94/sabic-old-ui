import Container from "../Container";
import Affiliate from "./Affiliate";
import { affiliateStatusData } from "../../DataModel/affiliateStatusData"
import { useEffect } from "react";


const AffiliatesStatus = () => {


  return (
    <div class="affiliates-outer">
      <div id="status">
        <div class="common">
          <div class="c-affilate"><span>{affiliateStatusData[0].value}</span><span>AFFILIATES</span></div>
          <div class="c-assets"><span>{affiliateStatusData[1].value}</span><span>ASSETS</span></div>
          <div class="c-healthindex"><span>{affiliateStatusData[2].value}</span><span>HEALTH INDEX</span></div>
          <div class="c-compliance"><span>{affiliateStatusData[3].value}</span><span>PM COMPLIANCE</span></div>
        </div>
        <div class="alert">
          <div class="alert-bar"> ALERT</div>
          <div class="alert-content">
            <div class="c-active"><span>{affiliateStatusData[4].value}</span><span>ACTIVE</span></div>
            <div class="investigate">
              <div class="investigate-content">
                <div class="c-under"><span>{affiliateStatusData[5].value}</span><span>UNDER INVESTIGATION</span></div>
                <div class="c-overdue"><span>{affiliateStatusData[6].value}</span><span>OVERDUE INVESTIGATION</span></div>
              </div>
              <div class="investigate-bar">INVESTIGATION</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AffiliatesStatus;

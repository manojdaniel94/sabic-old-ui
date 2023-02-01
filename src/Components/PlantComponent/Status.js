import Container from "../Container";
import Affiliate from "./Affiliate";
import { affiliateStatusData } from "../../DataModel/affiliateStatusData"
import { useEffect } from "react";


const AffiliatesStatus = () => {


  return (
    <div class="affiliates-outer">
      <div id="status">
        <div class="common">
          <div class="c-affilate"><span id="value">{affiliateStatusData[0].value}</span><span>AFFILIATES</span></div>
          <div class="c-assets"><span>{affiliateStatusData[1].value}</span><span>ASSETS</span></div>
          <div class="c-healthindex"><span>{affiliateStatusData[2].value}</span><span>HEALTH INDEX</span></div>
          {/* <div class="c-compliance"><span>{affiliateStatusData[3].value}</span><span>PM COMPLIANCE</span></div> */}
          <div class="c-compliance"><span>{'16'}</span><span>ALERTS</span></div>
          <div class="c-compliance"><span>{'16'}</span><span>IN PROGRESS</span></div>
          <div class="c-compliance"><span>{'0'}</span><span>OVERDUE</span></div>
          <div class="c-compliance"><span>{'0'}</span><span>CLOSED</span></div>
        </div>
      </div>
    </div>
  );
};

export default AffiliatesStatus;

import React from "react";
import timage1 from "../../images/1.png"
import timage2 from "../../images/status_health.png"
import timage3 from "../../images/status_under_investigation.png"
import timage4 from "../../images/4.png"

export const AlertMapPop = () => {
    return (
        <div id="alert-map-pop">
            <h3>Overall Spain</h3>
            <div class="alert-content">
                <div class="pop-alert">
                    <div class="pop-img"><img src={timage1} /></div>
                    <div class="pop-content"><span>1</span><span>ALERTS</span></div>
                </div>
                <div class="pop-alert">
                    <div class="pop-img"><img src={timage2} /></div>
                    <div class="pop-content"><span>11</span><span>HEALTH INDEX</span></div>
                </div>
                <div class="pop-alert">
                    <div class="pop-img"><img src={timage3} /></div>
                    <div class="pop-content"><span>12</span><span>IN PROGRESS</span></div>
                </div>
                <div class="pop-alert">
                    <div class="pop-img"><img src={timage4} /></div>
                    <div class="pop-content"><span>4</span><span>CLOSED</span></div>
                </div>
            </div>
        </div>
    );
}

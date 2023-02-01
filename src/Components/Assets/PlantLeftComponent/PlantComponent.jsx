import React, { useRef } from "react";
import heatmap from "../../../images/heatmap.png"

const PlantComponent = () => {
    return (
        <>
            <div id="plant">
                <div id="plant-left">
                    <div class="plant-outer">
                        <div id="asset-card">
                            <div class="asset-titlebar">
                                <h3>Asset Card</h3>
                                <div>
                                    <select>
                                        <option>2E-1214</option>
                                        <option>3A-1114</option>
                                        <option>4E-3414</option>
                                        <option>2E-1214</option>
                                        <option>3A-1114</option>
                                        <option>4E-3414</option>
                                    </select><input type="button" value="CONFIRM" /></div>
                            </div>
                            <div class="asset-content">
                                <table>
                                    <tr class="tabletitle">
                                        <th>TIME STAMP</th>
                                        <th>ALERT ID</th>
                                        <th>ALERT DESCRIPTION</th>
                                        <th>ALERT STATUS</th>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>00986e</td>
                                        <td>Asset 06 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>00986e</td>
                                        <td>Asset 23 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 16:55</td>
                                        <td>00986e</td>
                                        <td>Asset 116 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 18:55</td>
                                        <td>00986e</td>
                                        <td>Asset 06 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 22:55</td>
                                        <td>00986e</td>
                                        <td>Asset 23 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>00986e</td>
                                        <td>Asset 116 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>00986e</td>
                                        <td>Asset 23 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 16:55</td>
                                        <td>00986e</td>
                                        <td>Asset 116 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 18:55</td>
                                        <td>00986e</td>
                                        <td>Asset 406 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 22:55</td>
                                        <td>00986e</td>
                                        <td>Asset 2023 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>00986e</td>
                                        <td>Asset 226 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>00986e</td>
                                        <td>Asset 06 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>00986e</td>
                                        <td>Asset 23 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 16:55</td>
                                        <td>00986e</td>
                                        <td>Asset 116 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 18:55</td>
                                        <td>00986e</td>
                                        <td>Asset 06 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 22:55</td>
                                        <td>00986e</td>
                                        <td>Asset 23 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>00986e</td>
                                        <td>Asset 116 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>00986e</td>
                                        <td>Asset 23 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 16:55</td>
                                        <td>00986e</td>
                                        <td>Asset 116 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 18:55</td>
                                        <td>00986e</td>
                                        <td>Asset 406 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 22:55</td>
                                        <td>00986e</td>
                                        <td>Asset 2023 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>00986e</td>
                                        <td>Asset 226 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                    </div>

                    <div class="plant-outer">
                        <div id="asset-card">
                            <h3>PLANT ALERT LIST</h3>
                            <div class="asset-content">
                                <table>
                                    <tr class="tabletitle">
                                        <th>TIME STAMP</th>
                                        <th>ASSET ID</th>
                                        <th>ALERT ID</th>
                                        <th>ALERT DESCRIPTION</th>
                                        <th>ALERT STATUS</th>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 06 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 23 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 16:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 116 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 18:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 06 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 22:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 23 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 116 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 23 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 16:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 116 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 18:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 406 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 22:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 2023 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 226 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 06 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 23 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 16:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 116 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 18:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 06 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 22:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 23 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 116 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 23 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 16:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 116 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 18:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 406 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 22:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 2023 not working Properly</td>
                                        <td class="red">Active</td>
                                    </tr>
                                    <tr>
                                        <td>20/01/2023 04:55</td>
                                        <td>G-2303B</td>
                                        <td>00986e</td>
                                        <td>Asset 226 Properly not active</td>
                                        <td class="green">Solved</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div id="plant-alert-list"></div>
                </div>
                <div id="plant-right">
                    <img src={heatmap} style={{ maxWidth: '100%', marginTop: '30px' }} />
                </div>
            </div>
        </>

    );
};

export default PlantComponent;
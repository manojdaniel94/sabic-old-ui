import { MapContainer, TileLayer, LayerGroup, Circle, Tooltip, SVGOverlay } from 'react-leaflet';
import { region } from '../../DataModel/region';
import { useNavigate } from "react-router-dom";
import { AlertMapPop } from "./AlertMapPop";
import { useCommonDispatch } from "../../context/common/context";

const GlobalPreview = () => {
    const dispatchCommon = useCommonDispatch();
    const _getCommonAction = (item) => dispatchCommon({ type: "ADD_BREAD_CRUMBS", payload: item });

    let navigate = useNavigate();
    const onClickAffiliates = (key, data) => {
        navigate(`/${key}`, { state: { data: data } });
    }

    return (
        <MapContainer
            center={[51.505, 35.09]}
            zoom={2}
            scrollWheelZoom={true}
            style={{ width: '100%', height: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup>
                {region.map((data) => (
                    <div>
                        <Circle
                            center={[data.latitude, data.longitude]}
                            pathOptions={{ color: `${data.color}`, fillColor: `${data.color}` }}
                            radius={1100000}
                            eventHandlers={{ click: () => { onClickAffiliates('affiliates', data); _getCommonAction({ title: data.regionName, key: "affiliates" }) } }}
                        >

                            <Tooltip direction="top">
                                <AlertMapPop />
                            </Tooltip>
                        </Circle>
                        <SVGOverlay
                            attributes={{ stroke: 'red' }}
                            bounds={[[data.latitude, data.longitude], [data.latitude, data.longitude],]}
                        >
                            <text x="50%" y="50%" stroke="#58595b">{data.affiliatesCount}</text>
                        </SVGOverlay>
                    </div>
                ))}
            </LayerGroup>
        </MapContainer>
    )
}

export default GlobalPreview;
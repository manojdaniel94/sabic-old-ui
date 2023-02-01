import React from "react";
import { region } from '../../DataModel/region';
import { getaffiliatesdetailsByregionId } from '../../DataModel/getaffiliatesdetailsByregionId';
import { MapContainer, TileLayer, Tooltip, Marker, useMap } from 'react-leaflet';
import { AlertMapPop } from "./AlertMapPop";

function SubPreview({ setSelectedItem }) {

  const allAffliatesCount = region.reduce((totalAffliates, meal) => totalAffliates + meal.affiliatesCount, 0);

  return (
    <>
      <table>
        <tr class="tabletitle">
          <th>REGION NAME</th>
          <th>AFFILIATES COUNT</th>
        </tr>
        <tr onClick={() => setSelectedItem(null)}>
          <td>Global</td>
          <td>{allAffliatesCount}</td>
        </tr>
        {region.map((data) => (
          <tr onClick={() => setSelectedItem(data)}>
            <td>{data.regionName}</td>
            <td>{data.affiliatesCount}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

const SubPreviewMap = (props) => {

  const getRegionAffiliates = getaffiliatesdetailsByregionId.filter(({ regionid }) => regionid === props.regionid);

  return (
    <MapContainer center={[props.latitude, props.longitude]} zoom={3} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {getRegionAffiliates !== null ? getRegionAffiliates.map((data) => (
        <Marker position={[data.latitude, data.longitude]}>
          <Tooltip direction="top">
             <AlertMapPop/>
          </Tooltip>
        </Marker>
      )) :
        <Marker position={[props.latitude, props.longitude]}>
          <Tooltip direction="top">
            <span>Region:{props.name} </span>
          </Tooltip>
        </Marker>
      }
      <SetViewOnClick
        coords={[
          props.latitude,
          props.longitude
        ]}
      />
    </MapContainer>
  )
}

export default SubPreview;
export { SubPreviewMap }
import Container from "../Container";
import Status from "../AffiliatesPage/Status"
import RegionMap from "../MapRegionPage/RegionMap";
import AffiliatesBreadCrumb from "../AffiliatesPage/AffiliatesBreadCrumb"
import BreadCrumb from "../BreadCrumbComponent/BreadCrumb";


const RegionMapContainer = () => {
  return (
    <>
      <BreadCrumb />
      <div id="content-affiliates">
        <Status />
        <RegionMap />
      </div>
    </>


  );
};

export default RegionMapContainer;

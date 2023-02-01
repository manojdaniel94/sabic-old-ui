import Container from "../Container";
import AffiliatesBreadCrumb from "./AffiliatesBreadCrumb";
import Affiliates from "./Affiliates";
import Status from "./Status";
import HealthIndex from "./HealthIndex";
import BreadCrumb from "../BreadCrumbComponent/BreadCrumb";


const AffiliatesContainer = () => {
  return (
    <>
      {/* <AffiliatesBreadCrumb /> */}
      <BreadCrumb />
      <div id="content-affiliates">
        <Status />
        <Affiliates />
        <HealthIndex />
      </div>
    </>


  );
};

export default AffiliatesContainer;

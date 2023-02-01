import Container from "../Container";
import Affiliate from "./Affiliate";
import { data } from "../../DataModel/data";
import { useCommonDispatch } from "../../context/common/context";
import { useNavigate } from "react-router-dom";

const Affiliates = () => {
  const dispatchCommon = useCommonDispatch();

  const _getCommonAction = (item) =>
    dispatchCommon({ type: "ADD_BREAD_CRUMBS", payload: item });
  let navigate = useNavigate();

  const onClickFunction = (key) => {
    navigate(`/${key}`);
  };

  const handleOnClick = (item) => {
    console.log(item);
    onClickFunction("assets");
    _getCommonAction({ title: "OLF1", key: "assets" });
  };

  return (
    <div className="affiliates-outer">
      <Container variant="affiliates">
        {data.map((data) => (
          <Affiliate
            name={data.name}
            image={data.image}
            handleOnClick={handleOnClick}
          />
        ))}
      </Container>
    </div>
  );
};

export default Affiliates;

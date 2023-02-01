const Affiliate = (props) => {
  return (
    <div class="affiliates-box" onClick={() => props.handleOnClick(props.name)}>
      <div>
        OLF 1
      </div>
      <div><span>HEALTH INDEX</span><span class="green">29%</span></div>
      <div><span>PM COMPLIANCE</span><span class="blue">70%</span></div>
      <div><span>ACTIVE ALERTS</span><span class="red">87</span></div>
      <div><span>UNDER INVESTIGATION</span><span class="blue">1</span></div>
      <div><span>OVERDUE INVESTIGATION</span><span class="red">86</span></div>
    </div>
  );
};

export default Affiliate;

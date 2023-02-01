const Container = (props) => {
  return <div id={props.variant}>{props.children}</div>;
};

export default Container;

import styled from "styled-components";

const Pane = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vh;
  border-radius: 10px;
  border: 2px solid rgba(45, 45, 45, 0.8);
  background-image: linear-gradient(45deg, rgba(35, 35, 35, 0.93), rgba(60, 60, 60, 0.93));
  box-shadow: -10px 5px 10px 5px rgba(34,34,34, 0.95);
`;

const ContentPane = () => {
  return <Pane />;
};

export default ContentPane;
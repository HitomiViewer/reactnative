import { Dimensions } from "react-native";
import styled from "styled-components/native";

export default styled.View`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

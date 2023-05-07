import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styled from "styled-components/native";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParams>;
  route: RouteProp<RootStackParams>;
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 36px;
  font-weight: 700;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const List = (props: Props) => {
  return (
    <>
      <Wrapper>
        <Title>{props.route.params?.search}</Title>
      </Wrapper>
    </>
  );
};

export default List;

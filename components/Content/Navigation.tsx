import { useNavigation } from "@react-navigation/native";
import { WithLocalSvg } from "react-native-svg";
import styled from "styled-components/native";
import { Props } from "../../@types/predefined";

const Container = styled.View`
  height: 80px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  border-top-width: 1px;
  border-top-color: #000;
`;

const ItemWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Item = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
`;

const ItemText = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;

// const ItemIcon = styled(WithLocalSvg)``;
// const ItemIcon = styled((props: any) => (<WithLocalSvg {...props}></WithLocalSvg>))``;
// const ItemIcon = WithLocalSvg;

const Navigation = ({ navigation }: Props.Navigation) => {
  return (
    <>
      <Container>
        <ItemWrapper style={{ borderRightColor: "#000" }}>
          <Item onPress={() => navigation.navigate("Main")}>
            <ItemText>홈</ItemText>
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item onPress={() => navigation.navigate("List", { search: true })}>
            <ItemText>추천</ItemText>
          </Item>
        </ItemWrapper>
      </Container>
    </>
  );
};

export default Navigation;

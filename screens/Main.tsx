import styled from "styled-components/native";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import getSuggestList from "../api/Suggest";
import { Content } from "../components/Content";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParams>;
}

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
`;

const TitleWrapper = styled.View`
  height: ${Dimensions.get("window").height}px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Title = styled.Text`
  font-size: 36px;
  font-weight: 700;
`;

const Description = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #969696;
  margin-bottom: 20px;
`;

const Scroll = styled.ScrollView``;

const DownWrapper = styled.View`
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Down = styled(WithLocalSvg)``;

const DownText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #969696;
`;

const Main = ({ navigation }: Props) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <>
      <Wrapper>
        <Scroll>
          <TitleWrapper>
            <Title>Hitomi Viewer</Title>
            <Description>검색어를 입력해주세요.</Description>
            <Input
              value={search}
              handler={handleSearch}
              returnKeyType="search"
              submitHandler={() => navigation.navigate("List", { search })}
            />
            <DownWrapper>
              <DownText>Scroll Down</DownText>
              <Down
                width={42}
                height={42}
                asset={require("../assets/icons/down.svg")}
              />
            </DownWrapper>
          </TitleWrapper>
          <Content.List />
        </Scroll>
      </Wrapper>
    </>
  );
};

export default Main;

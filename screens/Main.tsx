import styled from "styled-components/native";
import Input from "../components/Input";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Props } from "../@types/predefined";

type Props = {} & Props.Navigation;

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
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

const Main = ({ navigation }: Props) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <>
      <Wrapper>
        <Title>Hitomi Viewer</Title>
        <Description>검색어를 입력해주세요.</Description>
        <Input
          value={search}
          handler={handleSearch}
          returnKeyType="done"
          submitHandler={() => navigation.navigate("List", { search })}
        />
      </Wrapper>
    </>
  );
};

export default Main;

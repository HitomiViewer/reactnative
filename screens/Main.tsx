import styled from "styled-components/native";
import Input from "../components/Input";
import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Props } from "../@types/predefined";
import Navigation from "../components/Content/Navigation";

type Props = {} & Props.Navigation;

const TouchableWithoutFeedbackView = styled(TouchableWithoutFeedback)`
  flex: 1;
`;

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
`;

const TitleWrapper = styled.View`
  flex: 1;
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

const Main = ({ navigation }: Props) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <>
      <TouchableWithoutFeedbackView onPress={Keyboard.dismiss}>
        <Wrapper>
          <TitleWrapper>
            <Title>Hitomi Viewer</Title>
            <Description>검색어를 입력해주세요.</Description>
            <Input
              value={search}
              handler={handleSearch}
              returnKeyType="search"
              submitHandler={() => navigation.navigate("List", { search })}
            />
          </TitleWrapper>
          <Navigation navigation={navigation} />
        </Wrapper>
      </TouchableWithoutFeedbackView>
    </>
  );
};

export default Main;

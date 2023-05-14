import { RouteProp } from "@react-navigation/native";
import styled from "styled-components/native";
import { Props } from "../@types/predefined";
import { useEffect, useState } from "react";
import getSuggestList from "../api/Suggest";
import { Content } from "../components/Content";
import getSearchList from "../api/Search";

type Props = {
  route: RouteProp<RootStackParams, "List">;
} & Props.Navigation;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  margin: 10px 0 10px 20px;
`;

const List = (props: Props) => {
  const [galleryList, setGalleryList] = useState<number[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    (async () => {
      if (props.route.params?.search === true)
        getSuggestList().then(setGalleryList);
      else {
        getSearchList(props.route.params?.search as string).then(
          setGalleryList
        );
      }
    })();
  }, []);

  const handleEndReached = async () => {
    if (props.route.params?.search === true) {
      getSuggestList(page + 1).then((list) =>
        setGalleryList([...galleryList, ...list])
      );
    } else {
      getSearchList(props.route.params?.search as string, page + 1).then(
        (list) => setGalleryList([...galleryList, ...list])
      );
    }
    setPage(page + 1);
  };

  return (
    <>
      <Wrapper>
        <Title>
          {props.route.params?.search === true
            ? "추천"
            : props.route.params?.search}
        </Title>
        <Content.List
          galleryList={galleryList}
          onEndReached={handleEndReached}
        />
      </Wrapper>
    </>
  );
};

export default List;

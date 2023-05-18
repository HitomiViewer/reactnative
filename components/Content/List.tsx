import styled from "styled-components/native";
import { Content } from ".";
import { FlatList } from "react-native";

type Props = {
  galleryList: Array<number>;
  onEndReached: () => void;
};

const Wrapper = styled.View`
  flex: 1;
`;

const List = (props: Props) => {
  return (
    <>
      <Wrapper>
        <FlatList
          data={props.galleryList}
          keyExtractor={(item) => (item as number).toString()}
          renderItem={({ item }) => <Content.Item number={item} />}
          initialNumToRender={2}
          onEndReached={props.onEndReached}
          onEndReachedThreshold={0.8}
        />
      </Wrapper>
    </>
  );
};

export default List;

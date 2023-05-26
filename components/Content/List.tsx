import { Dimensions, FlatList } from "react-native";
import styled from "styled-components/native";

import Item from "./Item";

type Props = {
  galleryList: Array<number>;
  onEndReached: () => void;
};

const Wrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

const List = (props: Props) => {
  return (
    <>
      <Wrapper>
        <FlatList
          data={props.galleryList}
          keyExtractor={(item) => (item as number).toString()}
          renderItem={({ item }) => <Item number={item} />}
          initialNumToRender={2}
          onEndReached={props.onEndReached}
          onEndReachedThreshold={0.8}
        />
      </Wrapper>
    </>
  );
};

export default List;

import { RouteProp } from "@react-navigation/native";
import styled from "styled-components/native";
import { Dimensions, FlatList, Platform, View } from "react-native";
import { SafeAreaView } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Keyboard } from "react-native";
import { Content } from "../components/Content";

type Props = {
  route: RouteProp<RootStackParams, "Detail">;
};

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: 700;
  width: ${Dimensions.get("window").width}px;
  text-align: center;
  margin-top: 20px;
`;

const Arrow = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #969696;
  z-index: 100;
`;

const ArrowText = styled.Text`
  font-size: 18px;
`;

const Image = styled(Content.Image)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
  content-fit: contain;
`;

const Detail = (props: Props) => {
  const flatListRef = useRef<FlatList<string>>(null);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    if (Platform.OS === "web") {
      const node: HTMLElement | null = flatListRef.current?.getScrollableNode();
      if (node) {
        node.scrollTo({
          x: Dimensions.get("window").width * page,
          y: 0,
          animated: true,
        });
      }
      return;
    }
    flatListRef.current?.scrollToIndex({
      index: page,
    });
  }, [page]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Wrapper>
        <Arrow
          onPress={() => setPage(Math.max(0, page - 1))}
          style={{
            left: 40,
          }}
        >
          <ArrowText>{"<"}</ArrowText>
        </Arrow>
        <Arrow
          onPress={() =>
            setPage(
              Math.min(
                (props.route.params?.gallery.files.length as number) - 1,
                page + 1
              )
            )
          }
          style={{
            right: 40,
          }}
        >
          <ArrowText>{">"}</ArrowText>
        </Arrow>
        <FlatList
          ref={flatListRef}
          style={{
            flex: 1,
          }}
          data={props.route.params?.gallery.files.map((e) => e.hash)}
          keyExtractor={(item) => item}
          initialNumToRender={2}
          maxToRenderPerBatch={2}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={true}
          onMomentumScrollEnd={(e) => {
            setPage(
              Math.round(
                e.nativeEvent.contentOffset.x / Dimensions.get("window").width
              )
            );
          }}
          renderItem={({ item, index }) => (
            <Content.Fullsize>
              <Image
                source={{
                  uri: `https://api.toshu.me/images/webp/${item}`,
                }}
              />
              <SafeAreaView
                style={{
                  position: "absolute",
                }}
              >
                <Text>
                  {index + 1} / {props.route.params?.gallery.files.length}
                </Text>
              </SafeAreaView>
            </Content.Fullsize>
          )}
        />
      </Wrapper>
    </SafeAreaView>
  );
};

export default Detail;
